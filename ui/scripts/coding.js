var socket;
var editor;

window.onload = function () {
    socket=openSocket(handleOnMessage);
    InitNodeEditor();
}

function InitNodeEditor() {
    const plugin = BaklavaJS.createBaklava(document.getElementById("editor"));
    editor = plugin.editor;
    const iface = new BaklavaJS.PluginInterfaceTypes.InterfaceTypePlugin();
    const opts = new BaklavaJS.PluginOptionsVue.OptionPlugin()
    editor.use(iface);
    editor.use(opts);
    

    iface.addType("flow", "#ffff00");
    iface.addType("int", "#ff0000");

    // Integer nodes
    const readInt = new BaklavaJS.Core.NodeBuilder("Read number variable").addOption("Variable Name", "InputOption").addOutputInterface("Output", {type: "int"}).build();
    const writeInt = new BaklavaJS.Core.NodeBuilder("Write number variable").addOption("Variable Name", "InputOption").addInputInterface("Input", "NumberOption", "", {type: "int"}).build();

    const addInt = new BaklavaJS.Core.NodeBuilder("+Add number").addInputInterface("A", "NumberOption", "", {type: "int"}).addInputInterface("B", "NumberOption", "", {type: "int"}).addOutputInterface("Result", {type: "int"}).build();
    const subInt = new BaklavaJS.Core.NodeBuilder("-Subtract number").addInputInterface("A", "NumberOption", "", {type: "int"}).addInputInterface("B", "NumberOption", "", {type: "int"}).addOutputInterface("Result", {type: "int"}).build();
    const multInt = new BaklavaJS.Core.NodeBuilder("*Multiply number").addInputInterface("A", "NumberOption", "", {type: "int"}).addInputInterface("B", "NumberOption", "", {type: "int"}).addOutputInterface("Result", {type: "int"}).build();
    const divInt = new BaklavaJS.Core.NodeBuilder("/Devide number").addInputInterface("A", "NumberOption", "", {type: "int"}).addInputInterface("B", "NumberOption", "", {type: "int"}).addOutputInterface("Result", {type: "int"}).build();

    editor.registerNodeType("Read", readInt, "Number");
    editor.registerNodeType("Write", writeInt, "Number");

    editor.registerNodeType("Add", addInt, "Number");
    editor.registerNodeType("Subtract", subInt, "Number");
    editor.registerNodeType("Multiply", multInt, "Number");
    editor.registerNodeType("Divide", divInt, "Number");

    // const test = new BaklavaJS.Core.NodeBuilder("Flow start").addOutputInterface("Output", {type: "flow"}).build();
    // const test2 = new BaklavaJS.Core.NodeBuilder("Flow end").addInputInterface("Input", "", "", {type: "flow"}).build();

    // const myNode = new BaklavaJS.Core.NodeBuilder("Test").addInputInterface("My Interface", "meh", "", {type: "string"}).build();
    // const myNode2 = new BaklavaJS.Core.NodeBuilder("Test2").addOutputInterface("My Interface", {type: "int"}).build();
    // const myNode3 = new BaklavaJS.Core.NodeBuilder("Test3").addInputInterface("My Interface", "meh", "", {type: "int"}).addOption("Variable Name", "InputOption").addOption("Variable Name2", "InputOption").addOption("Varia", "NumberOption").build();
}

function handleOnMessage(evt) {
    data=JSON.parse(evt.data);
    if (data==null) {
        return;
    }
}

function onSave() {
    const message = {
        messageType: "updateBluprint",
        blueprintName: "Hardcoded name",
        graph: editor.save()
    };


    if (!socket) {
        console.error("web socket is not open");
    }
    socket.send(JSON.stringify(message));
}
