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
    const onStart = new BaklavaJS.Core.NodeBuilder("On start").addOutputInterface("Output", {type: "flow"}).build();
    editor.registerNodeType("On start", onStart, "Flows");
    const timer = new BaklavaJS.Core.NodeBuilder("On timer").addOption("Interval", "IntegerOption", "1000").addOutputInterface("Output", {type: "flow"}).build();
    editor.registerNodeType("On timer", timer, "Flows");


    const splitFlow = new BaklavaJS.Core.NodeBuilder("Split flow").addInputInterface("Input Flow", "", "", {type: "flow"}).addOutputInterface("Output 1", {type: "flow"}).addOutputInterface("Output 2", {type: "flow"}).build();
    editor.registerNodeType("Split flow", splitFlow, "Flows");

    // Logic nodes
    const ifNode = new BaklavaJS.Core.NodeBuilder("If/Else").addInputInterface("Input Flow", "", "", {type: "flow"}).addOutputInterface("True", {type: "flow"}).addOutputInterface("False", {type: "flow"}).addInputInterface("Condition", "", "", {type: "bool"}).build();
    editor.registerNodeType("If/Else", ifNode, "Logic");

    // Number nodes
    const readInt = new BaklavaJS.Core.NodeBuilder("Read num").addOption("Variable Name", "InputOption").addOutputInterface("Output", {type: "int"}).build();
    editor.registerNodeType("Read num", readInt, "Number");
    const writeInt = new BaklavaJS.Core.NodeBuilder("Write num").addOption("Variable Name", "InputOption").addInputInterface("Input Flow", "", "", {type: "flow"}).addInputInterface("Input", "NumberOption", "", {type: "int"}).build();
    editor.registerNodeType("Write num", writeInt, "Number");

    const randInt = new BaklavaJS.Core.NodeBuilder("Random num").addInputInterface("From", "NumberOption", "0", {type: "int"}).addInputInterface("To", "NumberOption", "10", {type: "int"}).addOutputInterface("Output", {type: "int"}).build();
    editor.registerNodeType("Random num", randInt, "Number");

    const opInt = new BaklavaJS.Core.NodeBuilder("Operators")
    .addOption("Operator", "SelectOption", "Add(+)", undefined, { items: ["Add(+)", "Subtract(-)", "Multiply(*)", "Devide(/)", "Modulus(%)"]})
    .addInputInterface("A", "NumberOption", "", {type: "int"}).addInputInterface("B", "NumberOption", "", {type: "int"})
    .addOutputInterface("Result", {type: "int"}).build();
    editor.registerNodeType("Operators", opInt, "Number");

    const compInt = new BaklavaJS.Core.NodeBuilder("Compare num")
    .addOption("Operator", "SelectOption", "Equal(==)", undefined, { items: ["Equal(==)", "Not Equal(!=)", "Greater Than(>)", "Less Than(<)", "Greater or Equal(>=)", "Less or Equal(<=)"]})
    .addInputInterface("A", "NumberOption", "", {type: "int"}).addInputInterface("B", "NumberOption", "", {type: "int"})
    .addOutputInterface("Result", {type: "bool"}).build();
    editor.registerNodeType("Compare num", compInt, "Number");

    // Draw nodes
    const drawRect = new BaklavaJS.Core.NodeBuilder("Draw rectangle")
    .addInputInterface("Input Flow", "", "", {type: "flow"})
    .addInputInterface("X", "NumberOption", "", {type: "int"}).addInputInterface("Y", "NumberOption", "", {type: "int"})
    .addInputInterface("Width", "NumberOption", "", {type: "int"}).addInputInterface("Height", "NumberOption", "", {type: "int"})
    .build();
    editor.registerNodeType("Draw rectangle", drawRect, "Drawing");

    const clearRect = new BaklavaJS.Core.NodeBuilder("Clear rectangle")
    .addInputInterface("Input Flow", "", "", {type: "flow"})
    .addInputInterface("X", "NumberOption", "", {type: "int"}).addInputInterface("Y", "NumberOption", "", {type: "int"})
    .addInputInterface("Width", "NumberOption", "", {type: "int"}).addInputInterface("Height", "NumberOption", "", {type: "int"})
    .build();
    editor.registerNodeType("Clear rectangle", clearRect, "Drawing");

    // BOOL
    //"AND(&&)", "OR(||)"
}

function handleOnMessage(evt) {
    if (evt.data===null || evt.data==="null" || evt.data==="" || evt.data==="connected") {
        return;
    }

    let msg=JSON.parse(evt.data);
    if(msg.messageType==="updateBluprint") {
        editor.load(msg.graph)
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

function onBack() {
    onSave();
    document.location.href = "/";
}
