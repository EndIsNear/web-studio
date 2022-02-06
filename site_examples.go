package main

type SiteExample struct {
	HTMLElements []string
	CodeGraph    string
}

var SiteExamplesList = map[string]SiteExample{
	"1 Simple": {
		HTMLElements: []string{
			`{"messageType":"newHTMLElement","type":"Button","label":"Increment","blueprint":"ID"}`,
			`{"messageType":"newHTMLElement","type":"Header","label":"{{VAR}}"}`,
		},
		CodeGraph: `{"messageType":"updateBluprint","blueprintName":"Hardcoded name","graph":{"nodes":[{"type":"On click","id":"node_16441803526980","name":"On click","options":[["Button ID","ID"]],"state":{},"interfaces":[["Output",{"id":"ni_16441803526981","value":null}]],"position":{"x":260,"y":221},"width":200,"twoColumn":false,"customClasses":""},{"type":"Read num","id":"node_16441803573592","name":"Read num","options":[["Variable Name","VAR"]],"state":{},"interfaces":[["Output",{"id":"ni_16441803573593","value":null}]],"position":{"x":292,"y":512},"width":200,"twoColumn":false,"customClasses":""},{"type":"Write num","id":"node_16441803616264","name":"Write num","options":[["Variable Name","VAR"]],"state":{},"interfaces":[["Input Flow",{"id":"ni_16441803616275","value":""}],["Input",{"id":"ni_16441803616276","value":""}]],"position":{"x":1187,"y":314},"width":200,"twoColumn":false,"customClasses":""},{"type":"Operators","id":"node_16441803639617","name":"Operators","options":[["Operator","Add(+)"]],"state":{},"interfaces":[["A",{"id":"ni_16441803639618","value":""}],["B",{"id":"ni_16441803639629","value":1}],["Result",{"id":"ni_164418036396210","value":null}]],"position":{"x":734,"y":454},"width":200,"twoColumn":false,"customClasses":""}],"connections":[{"id":"164418036665513","from":"ni_16441803573593","to":"ni_16441803639618"},{"id":"164418037634018","from":"ni_16441803526981","to":"ni_16441803616275"},{"id":"164418038128521","from":"ni_164418036396210","to":"ni_16441803616276"}],"panning":{"x":0,"y":0},"scaling":1}}`,
	},
	"2 Random number": {
		HTMLElements: []string{
			`{"messageType":"newHTMLElement","type":"Button","label":"Get random number","blueprint":"ID"}`,
			`{"messageType":"newHTMLElement","type":"Header","label":"{{NUM}}"}`,
		},
		CodeGraph: `{"messageType":"updateBluprint","blueprintName":"Hardcoded name","graph":{"nodes":[{"type":"On click","id":"node_16441803526980","name":"On click","options":[["Button ID","ID"]],"state":{},"interfaces":[["Output",{"id":"ni_16441803526981","value":null}]],"position":{"x":260,"y":221},"width":200,"twoColumn":false,"customClasses":""},{"type":"Write num","id":"node_16441803616264","name":"Write num","options":[["Variable Name","NUM"]],"state":{},"interfaces":[["Input Flow",{"id":"ni_16441803616275","value":""}],["Input",{"id":"ni_16441803616276","value":""}]],"position":{"x":1187,"y":314},"width":200,"twoColumn":false,"customClasses":""},{"type":"Random num","id":"node_164418050543817","name":"Random num","options":[],"state":{},"interfaces":[["From",{"id":"ni_164418050543818","value":0}],["To",{"id":"ni_164418050543819","value":10}],["Output",{"id":"ni_164418050543820","value":null}]],"position":{"x":672,"y":474},"width":200,"twoColumn":false,"customClasses":""}],"connections":[{"id":"164418037634018","from":"ni_16441803526981","to":"ni_16441803616275"},{"id":"164418051889923","from":"ni_164418050543820","to":"ni_16441803616276"}],"panning":{"x":0,"y":0},"scaling":1}}`,
	},
	"3 Simple game": {
		HTMLElements: []string{
			``,
			``,
		},
		CodeGraph: ``,
	},
}
