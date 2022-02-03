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

	jsCode := graph.Build()
	if jsCode != `var app=new Vue({el:"#app",data:{timer:0},created:function(){var e=this;setInterval(function(){e.timer++},1e3)},methods:{}});` {
		t.Errorf("Wrong code: %s", jsCode)
	}
}
