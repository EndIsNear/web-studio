


window.onload = function () {
    InitNodeEditor();
}

function InitNodeEditor() {
    const plugin = BaklavaJS.createBaklava(document.getElementById("editor"));
    const editor = plugin.editor;
    const iface = new BaklavaJS.PluginInterfaceTypes.InterfaceTypePlugin();
    const opts = new BaklavaJS.PluginOptionsVue.OptionPlugin()
    editor.use(iface);
    editor.use(opts);

    iface.addType("flow", "#ffff00");
    iface.addType("int", "#ff0000");

    // Integer nodes
    const constInt = new BaklavaJS.Core.NodeBuilder("Const INT").addOption("Number", "NumberOption").addOutputInterface("Output", {type: "int"}).build();
    const readInt = new BaklavaJS.Core.NodeBuilder("Read INT variable").addOption("Variable Name", "InputOption").addOutputInterface("Output", {type: "int"}).build();
    const writeInt = new BaklavaJS.Core.NodeBuilder("Write INT variable").addOption("Variable Name", "InputOption").addInputInterface("Input", "NumberOption", "", {type: "int"}).build();

    const addInt = new BaklavaJS.Core.NodeBuilder("+Add INT").addInputInterface("A", "NumberOption", "", {type: "int"}).addInputInterface("B", "NumberOption", "", {type: "int"}).addOutputInterface("Result", {type: "int"}).build();
    const subInt = new BaklavaJS.Core.NodeBuilder("-Subtract INT").addInputInterface("A", "NumberOption", "", {type: "int"}).addInputInterface("B", "NumberOption", "", {type: "int"}).addOutputInterface("Result", {type: "int"}).build();
    const multInt = new BaklavaJS.Core.NodeBuilder("+Add INT").addInputInterface("A", "NumberOption", "", {type: "int"}).addInputInterface("B", "NumberOption", "", {type: "int"}).addOutputInterface("Result", {type: "int"}).build();
    const divInt = new BaklavaJS.Core.NodeBuilder("-Subtract INT").addInputInterface("A", "NumberOption", "", {type: "int"}).addInputInterface("B", "NumberOption", "", {type: "int"}).addOutputInterface("Result", {type: "int"}).build();

    editor.registerNodeType("Const", constInt, "INT");
    editor.registerNodeType("Read", readInt, "INT");
    editor.registerNodeType("Write", writeInt, "INT");

    editor.registerNodeType("Add", addInt, "INT");
    editor.registerNodeType("Subtract", subInt, "INT");
    editor.registerNodeType("Multiply", multInt, "INT");
    editor.registerNodeType("Divide", divInt, "INT");

    // const test = new BaklavaJS.Core.NodeBuilder("Flow start").addOutputInterface("Output", {type: "flow"}).build();
    // const test2 = new BaklavaJS.Core.NodeBuilder("Flow end").addInputInterface("Input", "", "", {type: "flow"}).build();

    // const myNode = new BaklavaJS.Core.NodeBuilder("Test").addInputInterface("My Interface", "meh", "", {type: "string"}).build();
    // const myNode2 = new BaklavaJS.Core.NodeBuilder("Test2").addOutputInterface("My Interface", {type: "int"}).build();
    // const myNode3 = new BaklavaJS.Core.NodeBuilder("Test3").addInputInterface("My Interface", "meh", "", {type: "int"}).addOption("Variable Name", "InputOption").addOption("Variable Name2", "InputOption").addOption("Varia", "NumberOption").build();
}
