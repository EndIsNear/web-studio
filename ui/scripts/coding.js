var socket;
var editor;
var onClickNode;

window.onload = function () {
    InitNodeEditor();
    socket=openSocket(handleOnMessage);
    socket.onopen = function () {
        const message = {
            messageType: "requestGraphSave"
        };
        socket.send(JSON.stringify(message));
    };
}

function InitNodeEditor() {
    const plugin = BaklavaJS.createBaklava(document.getElementById("editor"));
    editor = plugin.editor;
    const iface = new BaklavaJS.PluginInterfaceTypes.InterfaceTypePlugin();
    const opts = new BaklavaJS.PluginOptionsVue.OptionPlugin()
    editor.use(iface);
    editor.use(opts);
    

    iface.addType("flow", "#ffffff");
    iface.addType("int", "#ff0000");
    iface.addType("bool", "#00ff00");

    // Flow nodes
    const onClickNode = new BaklavaJS.Core.NodeBuilder("On click").addOption("Button ID", "InputOption").addOutputInterface("Output", {type: "flow"}).build();
    editor.registerNodeType("On click", onClickNode, "Flows");

    // Logic nodes
    const ifNode = new BaklavaJS.Core.NodeBuilder("If/Else").addInputInterface("Input Flow", "", "", {type: "flow"}).addOutputInterface("True", {type: "flow"}).addOutputInterface("False", {type: "flow"}).addInputInterface("Condition", "", "", {type: "bool"}).build();
    editor.registerNodeType("If/Else", ifNode, "Logic");

    // Integer nodes
    const readInt = new BaklavaJS.Core.NodeBuilder("Read num").addOption("Variable Name", "InputOption").addOutputInterface("Output", {type: "int"}).build();
    editor.registerNodeType("Read num", readInt, "Number");
    const writeInt = new BaklavaJS.Core.NodeBuilder("Write num").addOption("Variable Name", "InputOption").addInputInterface("Input Flow", "", "", {type: "flow"}).addInputInterface("Input", "NumberOption", "", {type: "int"}).build();
    editor.registerNodeType("Write num", writeInt, "Number");

    const addInt = new BaklavaJS.Core.NodeBuilder("Add num").addInputInterface("A", "NumberOption", "", {type: "int"}).addInputInterface("B", "NumberOption", "", {type: "int"}).addOutputInterface("Result", {type: "int"}).build();
    editor.registerNodeType("Add num", addInt, "Number");
    const subInt = new BaklavaJS.Core.NodeBuilder("Subtract num").addInputInterface("A", "NumberOption", "", {type: "int"}).addInputInterface("B", "NumberOption", "", {type: "int"}).addOutputInterface("Result", {type: "int"}).build();
    editor.registerNodeType("Subtract num", subInt, "Number");
    const multInt = new BaklavaJS.Core.NodeBuilder("Multiply num").addInputInterface("A", "NumberOption", "", {type: "int"}).addInputInterface("B", "NumberOption", "", {type: "int"}).addOutputInterface("Result", {type: "int"}).build();
    editor.registerNodeType("Multiply num", multInt, "Number");
    const divInt = new BaklavaJS.Core.NodeBuilder("Devide num").addInputInterface("A", "NumberOption", "", {type: "int"}).addInputInterface("B", "NumberOption", "", {type: "int"}).addOutputInterface("Result", {type: "int"}).build();
    editor.registerNodeType("Devide num", divInt, "Number");

    const compInt = new BaklavaJS.Core.NodeBuilder("Compare num")
    .addOption("Operator", "SelectOption", "EquEqual(==)", undefined, { items: ["Equal(==)", "Not Equal(!=)", "Greater Than(>)", "Less Than(<)", "Greater or Equal(>=)", "Less or Equal(<=)"]})
    .addInputInterface("A", "NumberOption", "", {type: "int"}).addInputInterface("B", "NumberOption", "", {type: "int"}).addOutputInterface("Result", {type: "bool"}).build();
    editor.registerNodeType("Compare num", compInt, "Number");
    
    
    // BOOL
    //"AND(&&)", "OR(||)"

    // const test = new BaklavaJS.Core.NodeBuilder("Flow start").addOutputInterface("Output", {type: "flow"}).build();
    // const test2 = new BaklavaJS.Core.NodeBuilder("Flow end").addInputInterface("Input", "", "", {type: "flow"}).build();
    
    // const myNode = new BaklavaJS.Core.NodeBuilder("Test").addInputInterface("My Interface", "meh", "", {type: "string"}).build();
    // const myNode2 = new BaklavaJS.Core.NodeBuilder("Test2").addOutputInterface("My Interface", {type: "int"}).build();
    // const myNode3 = new BaklavaJS.Core.NodeBuilder("Test3").addInputInterface("My Interface", "meh", "", {type: "int"}).addOption("Variable Name", "InputOption").addOption("Variable Name2", "InputOption").addOption("Varia", "NumberOption").build();
    //.addInputInterface("Input Flow", "", "", {type: "flow"}).addOutputInterface("Output Flow", {type: "flow"})
}

function handleOnMessage(evt) {
    if (evt.data===null || evt.data==="null" || evt.data==="") {
        return;
    }
    let asd=JSON.parse(evt.data);
    console.log(editor.load(asd.graph))
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

function onBack() {
    onSave();
    document.location.href = "/";
}
