package main

import (
	"encoding/json"
	"testing"
)

func TestBuildSimpleGraph(t *testing.T) {
	bytes := `{"nodes":[{"type":"On click","id":"node_16434652589680","name":"On click","options":[["Button ID","testbutton"]],"state":{},"interfaces":[["Output",{"id":"ni_16434652589681","value":null}]],"position":{"x":270,"y":248},"width":200,"twoColumn":false,"customClasses":""},{"type":"Write number variable","id":"node_16434652643062","name":"Write number variable","options":[["Variable Name","variable"]],"state":{},"interfaces":[["Input Flow",{"id":"ni_16434652643063","value":""}],["Input",{"id":"ni_16434652643064","value":""}]],"position":{"x":909,"y":372},"width":200,"twoColumn":false,"customClasses":""},{"type":"Add number","id":"node_16434652781518","name":"Add number","options":[],"state":{},"interfaces":[["A",{"id":"ni_16434652781519","value":""}],["B",{"id":"ni_164346527815110","value":3}],["Result",{"id":"ni_164346527815111","value":null}]],"position":{"x":535,"y":529},"width":200,"twoColumn":false,"customClasses":""},{"type":"Read number variable","id":"node_164346528282315","name":"Read number variable","options":[["Variable Name","variable"]],"state":{},"interfaces":[["Output",{"id":"ni_164346528282316","value":null}]],"position":{"x":214,"y":507},"width":200,"twoColumn":false,"customClasses":""}],"connections":[{"id":"16434652683937","from":"ni_16434652589681","to":"ni_16434652643063"},{"id":"164346528076214","from":"ni_164346527815111","to":"ni_16434652643064"},{"id":"164346528831619","from":"ni_164346528282316","to":"ni_16434652781519"}],"panning":{"x":65,"y":-68},"scaling":1}`
	var graph CodeGraph
	graph.Init()
	err := json.Unmarshal([]byte(bytes), &graph)
	if err != nil {
		t.Error("Cant unmarshal by array")
	}

	jsCode := graph.Build(false)
	if jsCode != `var app=new Vue({el:"#app",data:{timer:0},created:function(){var e=this;setInterval(function(){e.timer++},1e3)},methods:{}});` {
		t.Errorf("Wrong code: %s", jsCode)
	}
}

func TestBuildSimpleGraph2(t *testing.T) {
	bytes := `{"nodes":[{"type":"On click","id":"node_16439173677720","name":"On click","options":[["Button ID",null]],"state":{},"interfaces":[["Output",{"id":"ni_16439173677721","value":null}]],"position":{"x":200,"y":207},"width":200,"twoColumn":false,"customClasses":""},{"type":"Write num","id":"node_16439173705002","name":"Write num","options":[["Variable Name",null]],"state":{},"interfaces":[["Input Flow",{"id":"ni_16439173705003","value":""}],["Input",{"id":"ni_16439173705004","value":""}]],"position":{"x":967,"y":347},"width":200,"twoColumn":false,"customClasses":""},{"type":"Add num","id":"node_16439173754139","name":"Add num","options":[],"state":{},"interfaces":[["A",{"id":"ni_164391737541310","value":5}],["B",{"id":"ni_164391737541311","value":5}],["Result",{"id":"ni_164391737541312","value":null}]],"position":{"x":482,"y":533},"width":200,"twoColumn":false,"customClasses":""}],"connections":[{"id":"16439173737798","from":"ni_16439173677721","to":"ni_16439173705003"},{"id":"164391737778215","from":"ni_164391737541312","to":"ni_16439173705004"}],"panning":{"x":0,"y":0},"scaling":1}`
	var graph CodeGraph
	graph.Init()
	err := json.Unmarshal([]byte(bytes), &graph)
	if err != nil {
		t.Error("Cant unmarshal by array")
	}

	jsCode := graph.Build(false)
	if jsCode != `var app=new Vue({el:"#app",data:{timer:0},created:function(){var e=this;setInterval(function(){e.timer++},1e3)},methods:{}});` {
		t.Errorf("Wrong code: %s", jsCode)
	}
}

func TestBuildSimpleGraph3(t *testing.T) {
	bytes := `{"nodes":[{"type":"On click","id":"node_16440913702490","name":"On click","options":[["Button ID","ID"]],"state":{},"interfaces":[["Output",{"id":"ni_16440913702491","value":null}]],"position":{"x":204,"y":164},"width":200,"twoColumn":false,"customClasses":""},{"type":"If/Else","id":"node_16440913765792","name":"If/Else","options":[],"state":{},"interfaces":[["Input Flow",{"id":"ni_16440913765793","value":""}],["True",{"id":"ni_16440913765794","value":null}],["False",{"id":"ni_16440913765795","value":null}],["Condition",{"id":"ni_16440913765796","value":""}]],"position":{"x":563,"y":271},"width":200,"twoColumn":false,"customClasses":""},{"type":"Compare num","id":"node_164409139024610","name":"Compare num","options":[["Operator","Equal(==)"]],"state":{},"interfaces":[["A",{"id":"ni_164409139024611","value":1}],["B",{"id":"ni_164409139024612","value":2}],["Result",{"id":"ni_164409139024613","value":null}]],"position":{"x":184,"y":385},"width":200,"twoColumn":false,"customClasses":""},{"type":"Write num","id":"node_164409141160017","name":"Write num","options":[["Variable Name","VAR"]],"state":{},"interfaces":[["Input Flow",{"id":"ni_164409141160018","value":""}],["Input",{"id":"ni_164409141160019","value":""}]],"position":{"x":1275,"y":124},"width":200,"twoColumn":false,"customClasses":""},{"type":"Write num","id":"node_164409142178120","name":"Write num","options":[["Variable Name","VAR"]],"state":{},"interfaces":[["Input Flow",{"id":"ni_164409142178121","value":""}],["Input",{"id":"ni_164409142178122","value":""}]],"position":{"x":1239,"y":454},"width":200,"twoColumn":false,"customClasses":""},{"type":"Random num","id":"node_164409143417923","name":"Random num","options":[],"state":{},"interfaces":[["From",{"id":"ni_164409143418024","value":"0"}],["To",{"id":"ni_164409143418025","value":"10"}],["Output",{"id":"ni_164409143418026","value":null}]],"position":{"x":1005,"y":300},"width":200,"twoColumn":false,"customClasses":""},{"type":"Random num","id":"node_164409146636336","name":"Random num","options":[],"state":{},"interfaces":[["From",{"id":"ni_164409146636337","value":100}],["To",{"id":"ni_164409146636338","value":110}],["Output",{"id":"ni_164409146636339","value":null}]],"position":{"x":888,"y":642},"width":200,"twoColumn":false,"customClasses":""}],"connections":[{"id":"16440913807679","from":"ni_16440913702491","to":"ni_16440913765793"},{"id":"164409139451916","from":"ni_164409139024613","to":"ni_16440913765796"},{"id":"164409144038629","from":"ni_164409143418026","to":"ni_164409141160019"},{"id":"164409145032432","from":"ni_16440913765795","to":"ni_164409142178121"},{"id":"164409145811435","from":"ni_16440913765794","to":"ni_164409141160018"},{"id":"164409146883642","from":"ni_164409146636339","to":"ni_164409142178122"}],"panning":{"x":-13,"y":-28},"scaling":1}`
	var graph CodeGraph
	graph.Init()
	err := json.Unmarshal([]byte(bytes), &graph)
	if err != nil {
		t.Error("Cant unmarshal by array")
	}

	jsCode := graph.Build(false)
	if jsCode != `var app=new Vue({el:"#app",data:{timer:0},created:function(){var e=this;setInterval(function(){e.timer++},1e3)},methods:{}});` {
		t.Errorf("Wrong code: %s", jsCode)
	}
}
