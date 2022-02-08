package main

var SiteExamplesList = map[string]struct {
	HTMLElements []string
	CodeGraph    string
}{
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
	"3 Timer": {
		HTMLElements: []string{
			`{"messageType":"newHTMLElement","type":"Header","label":"Timer (1s) {{VAR}}s"}`,
			`{"messageType":"newHTMLElement","type":"Header","label":"Timer (0.5s) {{VAR2}}s"}`,
		},
		CodeGraph: `{"messageType":"updateBluprint","blueprintName":"Hardcoded name","graph":{"nodes":[{"type":"On timer","id":"node_16443284114260","name":"On timer","options":[["Interval","1000"]],"state":{},"interfaces":[["Output",{"id":"ni_16443284114271","value":null}]],"position":{"x":41,"y":62},"width":200,"twoColumn":false,"customClasses":""},{"type":"Write num","id":"node_16443284174152","name":"Write num","options":[["Variable Name","VAR"]],"state":{},"interfaces":[["Input Flow",{"id":"ni_16443284174153","value":""}],["Input",{"id":"ni_16443284174154","value":""}]],"position":{"x":625,"y":72},"width":200,"twoColumn":false,"customClasses":""},{"type":"Operators","id":"node_16443284256938","name":"Operators","options":[["Operator","Add(+)"]],"state":{},"interfaces":[["A",{"id":"ni_16443284256939","value":""}],["B",{"id":"ni_164432842569310","value":1}],["Result",{"id":"ni_164432842569311","value":null}]],"position":{"x":368,"y":202},"width":200,"twoColumn":false,"customClasses":""},{"type":"Read num","id":"node_164432843141512","name":"Read num","options":[["Variable Name","VAR"]],"state":{},"interfaces":[["Output",{"id":"ni_164432843141513","value":null}]],"position":{"x":50,"y":272},"width":200,"twoColumn":false,"customClasses":""},{"type":"On timer","id":"node_164432851918717","name":"On timer","options":[["Interval",500]],"state":{},"interfaces":[["Output",{"id":"ni_164432851918718","value":null}]],"position":{"x":45,"y":483},"width":200,"twoColumn":false,"customClasses":""},{"type":"Write num","id":"node_164432852731319","name":"Write num","options":[["Variable Name","VAR2"]],"state":{},"interfaces":[["Input Flow",{"id":"ni_164432852731320","value":""}],["Input",{"id":"ni_164432852731321","value":""}]],"position":{"x":574,"y":519},"width":200,"twoColumn":false,"customClasses":""},{"type":"Operators","id":"node_164432857253922","name":"Operators","options":[["Operator","Add(+)"]],"state":{},"interfaces":[["A",{"id":"ni_164432857253923","value":""}],["B",{"id":"ni_164432857253924","value":0.5}],["Result",{"id":"ni_164432857253925","value":null}]],"position":{"x":312,"y":607},"width":200,"twoColumn":false,"customClasses":""},{"type":"Read num","id":"node_164432857615726","name":"Read num","options":[["Variable Name","VAR2"]],"state":{},"interfaces":[["Output",{"id":"ni_164432857615727","value":null}]],"position":{"x":39,"y":669},"width":200,"twoColumn":false,"customClasses":""}],"connections":[{"id":"16443284213757","from":"ni_16443284114271","to":"ni_16443284174153"},{"id":"164432843403916","from":"ni_164432843141513","to":"ni_16443284256939"},{"id":"164432844012219","from":"ni_164432842569311","to":"ni_16443284174154"},{"id":"164432858004831","from":"ni_164432857615727","to":"ni_164432857253923"},{"id":"164432858638334","from":"ni_164432851918718","to":"ni_164432852731320"},{"id":"164432859441538","from":"ni_164432857253925","to":"ni_164432852731321"}],"panning":{"x":66,"y":16},"scaling":1}}`,
	},
	"4 Simple game": {
		HTMLElements: []string{
			`{"messageType":"newHTMLElement","type":"Header","label":"Money {{MONEY}}"}`,
			`{"messageType":"newHTMLElement","type":"Header","label":"Workers: {{MPS}}"}`,
			`{"messageType":"newHTMLElement","type":"Button","label":"Work (+{{MPC}})","blueprint":"ID"}`,
			`{"messageType":"newHTMLElement","type":"Button","label":"Study ({{UP}}money)","blueprint":"ID2"}`,
			`{"messageType":"newHTMLElement","type":"Button","label":"Hire worker (+1/s) (cost: {{WP}})","blueprint":"ID3"}`,
		},
		CodeGraph: `{"messageType":"updateBluprint","blueprintName":"Hardcoded name","graph":{"nodes":[{"type":"On start","id":"node_16441830679070","name":"On start","options":[],"state":{},"interfaces":[["Output",{"id":"ni_16441830679071","value":null}]],"position":{"x":-30.16504275623808,"y":-475.13824646052046},"width":200,"twoColumn":false,"customClasses":""},{"type":"Split flow","id":"node_16441830710922","name":"Split flow","options":[],"state":{},"interfaces":[["Input Flow",{"id":"ni_16441830710923","value":""}],["Output 1",{"id":"ni_16441830710924","value":null}],["Output 2",{"id":"ni_16441830710925","value":null}]],"position":{"x":307.9123101767123,"y":-535.7109506604517},"width":200,"twoColumn":false,"customClasses":""},{"type":"Write num","id":"node_16441830795499","name":"Write num","options":[["Variable Name","MPC"]],"state":{},"interfaces":[["Input Flow",{"id":"ni_164418307954910","value":""}],["Input",{"id":"ni_164418307954911","value":1}]],"position":{"x":680.9090245160588,"y":-776.1209817949508},"width":200,"twoColumn":false,"customClasses":""},{"type":"Write num","id":"node_164418308368112","name":"Write num","options":[["Variable Name","UP"]],"state":{},"interfaces":[["Input Flow",{"id":"ni_164418308368113","value":""}],["Input",{"id":"ni_164418308368114","value":10}]],"position":{"x":1010.0713798503865,"y":-615.1337342458809},"width":200,"twoColumn":false,"customClasses":""},{"type":"On click","id":"node_164418325208918","name":"On click","options":[["Button ID","ID"]],"state":{},"interfaces":[["Output",{"id":"ni_164418325208919","value":null}]],"position":{"x":-974.2192456443186,"y":-164.79476280018554},"width":200,"twoColumn":false,"customClasses":""},{"type":"Write num","id":"node_164418326641520","name":"Write num","options":[["Variable Name","MONEY"]],"state":{},"interfaces":[["Input Flow",{"id":"ni_164418326641521","value":""}],["Input",{"id":"ni_164418326641522","value":""}]],"position":{"x":-558.2158961073537,"y":-112.50182734264365},"width":200,"twoColumn":false,"customClasses":""},{"type":"Operators","id":"node_164418327419926","name":"Operators","options":[["Operator","Add(+)"]],"state":{},"interfaces":[["A",{"id":"ni_164418327419927","value":""}],["B",{"id":"ni_164418327419928","value":""}],["Result",{"id":"ni_164418327419929","value":null}]],"position":{"x":-810.5121811018603,"y":25.616016747766025},"width":200,"twoColumn":false,"customClasses":""},{"type":"Read num","id":"node_164418328160233","name":"Read num","options":[["Variable Name","MONEY"]],"state":{},"interfaces":[["Output",{"id":"ni_164418328160234","value":null}]],"position":{"x":-1259.619976581376,"y":35.6732640244885},"width":200,"twoColumn":false,"customClasses":""},{"type":"Read num","id":"node_164418328649235","name":"Read num","options":[["Variable Name","MPC"]],"state":{},"interfaces":[["Output",{"id":"ni_164418328649236","value":null}]],"position":{"x":-1256.7378206717856,"y":198.84835539162071},"width":200,"twoColumn":false,"customClasses":""},{"type":"On click","id":"node_164418375438239","name":"On click","options":[["Button ID","ID2"]],"state":{},"interfaces":[["Output",{"id":"ni_164418375438240","value":null}]],"position":{"x":571.9301114997288,"y":397.4210854393057},"width":200,"twoColumn":false,"customClasses":""},{"type":"If/Else","id":"node_164418377136941","name":"If/Else","options":[],"state":{},"interfaces":[["Input Flow",{"id":"ni_164418377136942","value":""}],["True",{"id":"ni_164418377136943","value":null}],["False",{"id":"ni_164418377136944","value":null}],["Condition",{"id":"ni_164418377136945","value":""}]],"position":{"x":954.6825873195444,"y":577.0419331001627},"width":200,"twoColumn":false,"customClasses":""},{"type":"Compare num","id":"node_164418377953949","name":"Compare num","options":[["Operator","Greater or Equal(>=)"]],"state":{},"interfaces":[["A",{"id":"ni_164418377953950","value":""}],["B",{"id":"ni_164418377953951","value":""}],["Result",{"id":"ni_164418377953952","value":null}]],"position":{"x":618,"y":657},"width":200,"twoColumn":false,"customClasses":""},{"type":"Read num","id":"node_164418381218356","name":"Read num","options":[["Variable Name","MONEY"]],"state":{},"interfaces":[["Output",{"id":"ni_164418381218357","value":null}]],"position":{"x":302.4173504762668,"y":668.741520788193},"width":200,"twoColumn":false,"customClasses":""},{"type":"Read num","id":"node_164418383781261","name":"Read num","options":[["Variable Name","UP"]],"state":{},"interfaces":[["Output",{"id":"ni_164418383781262","value":null}]],"position":{"x":268,"y":794},"width":200,"twoColumn":false,"customClasses":""},{"type":"Write num","id":"node_164418385854066","name":"Write num","options":[["Variable Name","MONEY"]],"state":{},"interfaces":[["Input Flow",{"id":"ni_164418385854067","value":""}],["Input",{"id":"ni_164418385854068","value":1321321}]],"position":{"x":1816.9272456853905,"y":219.4010476122731},"width":200,"twoColumn":false,"customClasses":""},{"type":"Operators","id":"node_164418389726167","name":"Operators","options":[["Operator","Subtract(-)"]],"state":{},"interfaces":[["A",{"id":"ni_164418389726168","value":""}],["B",{"id":"ni_164418389726169","value":""}],["Result",{"id":"ni_164418389726170","value":null}]],"position":{"x":1257.57340276044,"y":306.8473585417716},"width":200,"twoColumn":false,"customClasses":""},{"type":"Read num","id":"node_164418391466574","name":"Read num","options":[["Variable Name","MONEY"]],"state":{},"interfaces":[["Output",{"id":"ni_164418391466675","value":null}]],"position":{"x":927.1278319593464,"y":272.0636142469197},"width":200,"twoColumn":false,"customClasses":""},{"type":"Read num","id":"node_164418392851179","name":"Read num","options":[["Variable Name","UP"]],"state":{},"interfaces":[["Output",{"id":"ni_164418392851180","value":null}]],"position":{"x":932.9251226751552,"y":421.633714714783},"width":200,"twoColumn":false,"customClasses":""},{"type":"Split flow","id":"node_164418396315181","name":"Split flow","options":[],"state":{},"interfaces":[["Input Flow",{"id":"ni_164418396315182","value":""}],["Output 1",{"id":"ni_164418396315183","value":null}],["Output 2",{"id":"ni_164418396315184","value":null}]],"position":{"x":1304.5200242332164,"y":550.8103977498528},"width":200,"twoColumn":false,"customClasses":""},{"type":"Split flow","id":"node_164418398373592","name":"Split flow","options":[],"state":{},"interfaces":[["Input Flow",{"id":"ni_164418398373593","value":""}],["Output 1",{"id":"ni_164418398373594","value":null}],["Output 2",{"id":"ni_164418398373595","value":null}]],"position":{"x":1597.2946387068275,"y":689.4685457851431},"width":200,"twoColumn":false,"customClasses":""},{"type":"Write num","id":"node_164418399376299","name":"Write num","options":[["Variable Name","MPC"]],"state":{},"interfaces":[["Input Flow",{"id":"ni_1644183993762100","value":""}],["Input",{"id":"ni_1644183993762101","value":""}]],"position":{"x":2398.7694024941406,"y":377.8767821039342},"width":200,"twoColumn":false,"customClasses":""},{"type":"Write num","id":"node_1644184028328107","name":"Write num","options":[["Variable Name","UP"]],"state":{},"interfaces":[["Input Flow",{"id":"ni_1644184028328108","value":""}],["Input",{"id":"ni_1644184028328109","value":""}]],"position":{"x":1932.3780420805679,"y":935.2736721354302},"width":200,"twoColumn":false,"customClasses":""},{"type":"Operators","id":"node_1644184039232114","name":"Operators","options":[["Operator","Multiply(*)"]],"state":{},"interfaces":[["A",{"id":"ni_1644184039232115","value":""}],["B",{"id":"ni_1644184039232116","value":1.5}],["Result",{"id":"ni_1644184039232117","value":null}]],"position":{"x":1481.3488243906543,"y":914.4034255585191},"width":200,"twoColumn":false,"customClasses":""},{"type":"Read num","id":"node_1644184050831123","name":"Read num","options":[["Variable Name","UP"]],"state":{},"interfaces":[["Output",{"id":"ni_1644184050831124","value":null}]],"position":{"x":1075.538474284048,"y":879.6196812636671},"width":200,"twoColumn":false,"customClasses":""},{"type":"Operators","id":"node_1644184078699128","name":"Operators","options":[["Operator","Add(+)"]],"state":{},"interfaces":[["A",{"id":"ni_1644184078699129","value":""}],["B",{"id":"ni_1644184078699130","value":1}],["Result",{"id":"ni_1644184078699131","value":null}]],"position":{"x":2248.7642825585294,"y":679.0462477732103},"width":200,"twoColumn":false,"customClasses":""},{"type":"Read num","id":"node_1644184101974135","name":"Read num","options":[["Variable Name","MPC"]],"state":{},"interfaces":[["Output",{"id":"ni_1644184101974136","value":null}]],"position":{"x":1979.7701482417463,"y":720.4973217193674},"width":200,"twoColumn":false,"customClasses":""},{"type":"Split flow","id":"node_1644329134749123","name":"Split flow","options":[],"state":{},"interfaces":[["Input Flow",{"id":"ni_1644329134750124","value":""}],["Output 1",{"id":"ni_1644329134750125","value":null}],["Output 2",{"id":"ni_1644329134750126","value":null}]],"position":{"x":644.0510514319978,"y":-537.3564986588262},"width":200,"twoColumn":false,"customClasses":""},{"type":"Write num","id":"node_1644329147776134","name":"Write num","options":[["Variable Name","WP"]],"state":{},"interfaces":[["Input Flow",{"id":"ni_1644329147776135","value":""}],["Input",{"id":"ni_1644329147776136","value":100}]],"position":{"x":1288.2174041557785,"y":-508.95149333050585},"width":200,"twoColumn":false,"customClasses":""},{"type":"On click","id":"node_1644329249710145","name":"On click","options":[["Button ID","ID3"]],"state":{},"interfaces":[["Output",{"id":"ni1644329249710147","value":null}]],"position":{"x":-1166.6311760369176,"y":847.6369761270851},"width":200,"twoColumn":false,"customClasses":""},{"type":"Compare num","id":"node_1644329249710148","name":"Compare num","options":[["Operator","Greater or Equal(>=)"]],"state":{},"interfaces":[["A",{"id":"ni1644329249711152","value":""}],["B",{"id":"ni1644329249711153","value":""}],["Result",{"id":"ni1644329249711154","value":null}]],"position":{"x":-1185.49090376188,"y":1104.6236455763571},"width":200,"twoColumn":false,"customClasses":""},{"type":"If/Else","id":"node_1644329249711155","name":"If/Else","options":[],"state":{},"interfaces":[["Input Flow",{"id":"ni1644329249711160","value":""}],["True",{"id":"ni1644329249711161","value":null}],["False",{"id":"ni1644329249711162","value":null}],["Condition",{"id":"ni1644329249711163","value":""}]],"position":{"x":-878.2038325790637,"y":912.8787881881605},"width":200,"twoColumn":false,"customClasses":""},{"type":"Split flow","id":"node_1644329323381149","name":"Split flow","options":[],"state":{},"interfaces":[["Input Flow",{"id":"ni_1644329323381150","value":""}],["Output 1",{"id":"ni_1644329323381151","value":null}],["Output 2",{"id":"ni_1644329323381152","value":null}]],"position":{"x":1005.9785490770996,"y":-407.0503085185893},"width":200,"twoColumn":false,"customClasses":""},{"type":"Write num","id":"node_1644329340726160","name":"Write num","options":[["Variable Name","MPS"]],"state":{},"interfaces":[["Input Flow",{"id":"ni_1644329340726161","value":""}],["Input",{"id":"ni_1644329340726162","value":0}]],"position":{"x":1284.2123869962704,"y":-274.25688587534864},"width":200,"twoColumn":false,"customClasses":""},{"type":"Write num","id":"node_1644329377369168","name":"Write num","options":[["Variable Name","MONEY"]],"state":{},"interfaces":[["Input Flow",{"id":"ni_1644329377369169","value":""}],["Input",{"id":"ni_1644329377369170","value":""}]],"position":{"x":510.4529792170406,"y":-63.99608729557171},"width":200,"twoColumn":false,"customClasses":""},{"type":"Operators","id":"node_1644329439882169","name":"Operators","options":[["Operator","Add(+)"]],"state":{},"interfaces":[["A",{"id":"ni_1644329439882170","value":""}],["B",{"id":"ni_1644329439882171","value":""}],["Result",{"id":"ni_1644329439882172","value":null}]],"position":{"x":173.99509250502413,"y":36.20188740958322},"width":200,"twoColumn":false,"customClasses":""},{"type":"Read num","id":"node_1644329445206176","name":"Read num","options":[["Variable Name","MONEY"]],"state":{},"interfaces":[["Output",{"id":"ni_1644329445206177","value":null}]],"position":{"x":-143.51971193186947,"y":11.134929164565293},"width":200,"twoColumn":false,"customClasses":""},{"type":"Read num","id":"node_1644329449056178","name":"Read num","options":[["Variable Name","MPS"]],"state":{},"interfaces":[["Output",{"id":"ni_1644329449056179","value":null}]],"position":{"x":-140.7344943490896,"y":174.07015775718168},"width":200,"twoColumn":false,"customClasses":""},{"type":"On timer","id":"node_1644329471266187","name":"On timer","options":[["Interval","1000"]],"state":{},"interfaces":[["Output",{"id":"ni_1644329471266188","value":null}]],"position":{"x":-9.829267958440617,"y":-200.54160712669702},"width":200,"twoColumn":false,"customClasses":""},{"type":"Read num","id":"node_1644329750249181","name":"Read num","options":[["Variable Name","MONEY"]],"state":{},"interfaces":[["Output",{"id":"ni_1644329750249182","value":null}]],"position":{"x":-1531.6429866259343,"y":1054.3806412621655},"width":200,"twoColumn":false,"customClasses":""},{"type":"Read num","id":"node_1644329753896183","name":"Read num","options":[["Variable Name","WP"]],"state":{},"interfaces":[["Output",{"id":"ni_1644329753896184","value":null}]],"position":{"x":-1514.9335357051596,"y":1229.8298759303004},"width":200,"twoColumn":false,"customClasses":""},{"type":"Split flow","id":"node_1644329947543189","name":"Split flow","options":[],"state":{},"interfaces":[["Input Flow",{"id":"ni1644329947544193","value":""}],["Output 1",{"id":"ni1644329947544194","value":null}],["Output 2",{"id":"ni1644329947544195","value":null}]],"position":{"x":-546.0578064589157,"y":805.2753907855795},"width":200,"twoColumn":false,"customClasses":""},{"type":"Operators","id":"node_1644329947544196","name":"Operators","options":[["Operator","Subtract(-)"]],"state":{},"interfaces":[["A",{"id":"ni1644329947544200","value":""}],["B",{"id":"ni1644329947544201","value":""}],["Result",{"id":"ni1644329947544202","value":null}]],"position":{"x":-600.0083048220897,"y":446.4262655656696},"width":200,"twoColumn":false,"customClasses":""},{"type":"Read num","id":"node_1644329947544203","name":"Read num","options":[["Variable Name","MONEY"]],"state":{},"interfaces":[["Output",{"id":"ni1644329947545205","value":null}]],"position":{"x":-939.0387040667466,"y":398.08723072655164},"width":200,"twoColumn":false,"customClasses":""},{"type":"Read num","id":"node_1644329947545206","name":"Read num","options":[["Variable Name","WP"]],"state":{},"interfaces":[["Output",{"id":"ni1644329947545208","value":null}]],"position":{"x":-904.0885044273908,"y":579.7238941706664},"width":200,"twoColumn":false,"customClasses":""},{"type":"Write num","id":"node_1644329947545209","name":"Write num","options":[["Variable Name","MONEY"]],"state":{},"interfaces":[["Input Flow",{"id":"ni1644329947545212","value":""}],["Input",{"id":"ni1644329947545213","value":1321321}]],"position":{"x":-253.70011198206694,"y":604.9969088381009},"width":200,"twoColumn":false,"customClasses":""},{"type":"Split flow","id":"node_1644330037302214","name":"Split flow","options":[],"state":{},"interfaces":[["Input Flow",{"id":"ni1644330037303218","value":""}],["Output 1",{"id":"ni1644330037303219","value":null}],["Output 2",{"id":"ni1644330037303220","value":null}]],"position":{"x":-458.579482611626,"y":1254.222384091258},"width":200,"twoColumn":false,"customClasses":""},{"type":"Write num","id":"node_1644330037303221","name":"Write num","options":[["Variable Name","WP"]],"state":{},"interfaces":[["Input Flow",{"id":"ni1644330037303224","value":""}],["Input",{"id":"ni1644330037303225","value":""}]],"position":{"x":-170.8808379652012,"y":1355.155378750574},"width":200,"twoColumn":false,"customClasses":""},{"type":"Operators","id":"node_1644330037303226","name":"Operators","options":[["Operator","Multiply(*)"]],"state":{},"interfaces":[["A",{"id":"ni1644330037303230","value":""}],["B",{"id":"ni1644330037303231","value":1.5}],["Result",{"id":"ni1644330037303232","value":null}]],"position":{"x":-612.1668545783211,"y":1450.434167279328},"width":200,"twoColumn":false,"customClasses":""},{"type":"Read num","id":"node_1644330037303233","name":"Read num","options":[["Variable Name","WP"]],"state":{},"interfaces":[["Output",{"id":"ni1644330037304235","value":null}]],"position":{"x":-997.5831731653675,"y":1490.3657165503355},"width":200,"twoColumn":false,"customClasses":""},{"type":"Split flow","id":"node_1644330082582247","name":"Split flow","options":[],"state":{},"interfaces":[["Input Flow",{"id":"ni_1644330082582248","value":""}],["Output 1",{"id":"ni_1644330082582249","value":null}],["Output 2",{"id":"ni_1644330082582250","value":null}]],"position":{"x":-429.8169854836774,"y":1015.0816133127379},"width":200,"twoColumn":false,"customClasses":""},{"type":"Read num","id":"node_1644330120187257","name":"Read num","options":[["Variable Name","MPS"]],"state":{},"interfaces":[["Output",{"id":"ni1644330120187259","value":null}]],"position":{"x":-817.686434124392,"y":1999.3613251162417},"width":200,"twoColumn":false,"customClasses":""},{"type":"Operators","id":"node_1644330120187260","name":"Operators","options":[["Operator","Add(+)"]],"state":{},"interfaces":[["A",{"id":"ni1644330120187264","value":""}],["B",{"id":"ni1644330120187265","value":1}],["Result",{"id":"ni1644330120187266","value":null}]],"position":{"x":43.95076764721898,"y":1752.764573974183},"width":200,"twoColumn":false,"customClasses":""},{"type":"Write num","id":"node_1644330120187267","name":"Write num","options":[["Variable Name","MPC"]],"state":{},"interfaces":[["Input Flow",{"id":"ni1644330120188270","value":""}],["Input",{"id":"ni1644330120188271","value":""}]],"position":{"x":2408.7694024941406,"y":387.8767821039342},"width":200,"twoColumn":false,"customClasses":""},{"type":"Write num","id":"node_1644330120188272","name":"Write num","options":[["Variable Name","MPC"]],"state":{},"interfaces":[["Input Flow",{"id":"ni1644330120188275","value":""}],["Input",{"id":"ni1644330120188276","value":""}]],"position":{"x":2408.7694024941406,"y":387.8767821039342},"width":200,"twoColumn":false,"customClasses":""},{"type":"Write num","id":"node_1644330120188277","name":"Write num","options":[["Variable Name","MPC"]],"state":{},"interfaces":[["Input Flow",{"id":"ni1644330120188280","value":""}],["Input",{"id":"ni1644330120188281","value":""}]],"position":{"x":2408.7694024941406,"y":387.8767821039342},"width":200,"twoColumn":false,"customClasses":""},{"type":"Write num","id":"node_1644330120188282","name":"Write num","options":[["Variable Name","MPC"]],"state":{},"interfaces":[["Input Flow",{"id":"ni1644330120189285","value":""}],["Input",{"id":"ni1644330120189286","value":""}]],"position":{"x":2408.7694024941406,"y":387.8767821039342},"width":200,"twoColumn":false,"customClasses":""},{"type":"Write num","id":"node_1644330120189287","name":"Write num","options":[["Variable Name","MPC"]],"state":{},"interfaces":[["Input Flow",{"id":"ni1644330120189290","value":""}],["Input",{"id":"ni1644330120189291","value":""}]],"position":{"x":2408.7694024941406,"y":387.8767821039342},"width":200,"twoColumn":false,"customClasses":""},{"type":"Write num","id":"node_1644330120189292","name":"Write num","options":[["Variable Name","MPS"]],"state":{},"interfaces":[["Input Flow",{"id":"ni1644330120189295","value":""}],["Input",{"id":"ni1644330120189296","value":""}]],"position":{"x":378.55971380222445,"y":1073.8520298348992},"width":200,"twoColumn":false,"customClasses":""}],"connections":[{"id":"16441830767688","from":"ni_16441830679071","to":"ni_16441830710923"},{"id":"164418308688017","from":"ni_16441830710924","to":"ni_164418307954910"},{"id":"164418327083125","from":"ni_164418325208919","to":"ni_164418326641521"},{"id":"164418327780232","from":"ni_164418327419929","to":"ni_164418326641522"},{"id":"164418330079639","from":"ni_164418328160234","to":"ni_164418327419927"},{"id":"164418330240142","from":"ni_164418328649236","to":"ni_164418327419928"},{"id":"164418377558548","from":"ni_164418375438240","to":"ni_164418377136942"},{"id":"164418378454755","from":"ni_164418377953952","to":"ni_164418377136945"},{"id":"164418381609260","from":"ni_164418381218357","to":"ni_164418377953950"},{"id":"164418384311165","from":"ni_164418383781262","to":"ni_164418377953951"},{"id":"164418389997973","from":"ni_164418389726170","to":"ni_164418385854068"},{"id":"164418391980578","from":"ni_164418391466675","to":"ni_164418389726168"},{"id":"164418393470783","from":"ni_164418392851180","to":"ni_164418389726169"},{"id":"164418397255091","from":"ni_164418377136943","to":"ni_164418396315182"},{"id":"1644184003806104","from":"ni_164418398373594","to":"ni_1644183993762100"},{"id":"1644184034837113","from":"ni_164418398373595","to":"ni_1644184028328108"},{"id":"1644184042922122","from":"ni_1644184039232117","to":"ni_1644184028328109"},{"id":"1644184069939127","from":"ni_1644184050831124","to":"ni_1644184039232115"},{"id":"1644184086413134","from":"ni_1644184078699131","to":"ni_1644183993762101"},{"id":"1644184105047139","from":"ni_1644184101974136","to":"ni_1644184078699129"},{"id":"1644184224124125","from":"ni_164418396315183","to":"ni_164418385854067"},{"id":"1644184226428129","from":"ni_164418396315184","to":"ni_164418398373593"},{"id":"1644329138381129","from":"ni_16441830710925","to":"ni_1644329134750124"},{"id":"1644329141811133","from":"ni_1644329134750125","to":"ni_164418308368113"},{"id":"1644329249711165","from":"ni1644329249710147","to":"ni1644329249711160"},{"id":"1644329249711167","from":"ni1644329249711154","to":"ni1644329249711163"},{"id":"1644329327740155","from":"ni_1644329323381151","to":"ni_1644329147776135"},{"id":"1644329334495159","from":"ni_1644329134750126","to":"ni_1644329323381150"},{"id":"1644329347530165","from":"ni_1644329323381152","to":"ni_1644329340726161"},{"id":"1644329442841175","from":"ni_1644329439882172","to":"ni_1644329377369170"},{"id":"1644329454922182","from":"ni_1644329449056179","to":"ni_1644329439882171"},{"id":"1644329464100186","from":"ni_1644329445206177","to":"ni_1644329439882170"},{"id":"1644329476242192","from":"ni_1644329471266188","to":"ni_1644329377369169"},{"id":"1644329760706187","from":"ni_1644329750249182","to":"ni1644329249711152"},{"id":"1644329766519190","from":"ni_1644329753896184","to":"ni1644329249711153"},{"id":"1644329947545215","from":"ni1644329947544202","to":"ni1644329947545213"},{"id":"1644329947546217","from":"ni1644329947545205","to":"ni1644329947544200"},{"id":"1644329947546219","from":"ni1644329947545208","to":"ni1644329947544201"},{"id":"1644329947546221","from":"ni1644329947544194","to":"ni1644329947545212"},{"id":"1644329989458224","from":"ni1644329249711161","to":"ni1644329947544193"},{"id":"1644330037304237","from":"ni1644330037303220","to":"ni1644330037303224"},{"id":"1644330037304239","from":"ni1644330037303232","to":"ni1644330037303225"},{"id":"1644330037304241","from":"ni1644330037304235","to":"ni1644330037303230"},{"id":"1644330088060253","from":"ni1644329947544195","to":"ni_1644330082582248"},{"id":"1644330091893256","from":"ni_1644330082582250","to":"ni1644330037303218"},{"id":"1644330120189298","from":"ni1644330120187266","to":"ni1644330120189296"},{"id":"1644330120189300","from":"ni1644330120187259","to":"ni1644330120187264"},{"id":"1644330243683303","from":"ni1644330037303219","to":"ni1644330120189295"}],"panning":{"x":2900.6551125557994,"y":875.3706586637082},"scaling":0.25928109761235485}}`,
	},
}
