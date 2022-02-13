package main

import (
	"fmt"
	"strconv"
)

type GraphConnection struct {
	from int
	to   int
}

type CodeGraph struct {
	Nodes        []GraphNode
	MethodsNodes []GraphNode
	CreatedNodes []GraphNode
	NumVariables map[string]bool
	ArrVariables map[string]bool

	Connections []GraphConnection

	lastUsedFunction int
}

func (c *CodeGraph) Init() {
	c.NumVariables = make(map[string]bool)
	c.ArrVariables = make(map[string]bool)
}

func (c *CodeGraph) Build(initCanvas bool) string {
	c.lastUsedFunction = 0

	header := `var app=new Vue({el:"#app",data:{`
	vars := c.BuildVars(initCanvas)
	created := `},created:function(){`
	canvasInitCode := ``
	onStartCode := c.BuildOnStart()
	mid := `},methods:{`
	methods := c.BuildOnClick()
	footer := `}});`

	if initCanvas {
		canvasInitCode = `c = document.getElementById("myCanvas"); this.CANVAS_CONTEXT = c.getContext('2d'); c.width = this.CANVAS_W = document.body.clientWidth * 0.7; c.height = this.CANVAS_H = document.body.clientHeight * 0.9;`
	}

	return fmt.Sprintf("%s%s%s%s%s%s%s%s", header, vars, created, canvasInitCode, onStartCode, mid, methods, footer)
}

func (c *CodeGraph) BuildVars(initCanvas bool) string {
	result := ``

	if initCanvas {
		result = `CANVAS_W: 0, CANVAS_H: 0, CANVAS_CONTEXT: null, `
	}

	for key := range c.NumVariables {
		result += fmt.Sprintf(`%s: 0, `, key)
	}

	for key := range c.ArrVariables {
		result += fmt.Sprintf(`%s: [], `, key)
	}

	return result
}

func (c *CodeGraph) GetNextFuncName() string {
	c.lastUsedFunction++
	return "N" + strconv.Itoa(c.lastUsedFunction)
}

func (c *CodeGraph) BuildOnStart() string {
	res := ""
	for _, et := range c.CreatedNodes {
		res += et.GetCode(nil)
	}

	return res
}

func (c *CodeGraph) BuildOnClick() string {
	var res string
	for _, et := range c.MethodsNodes {
		res += et.GetCode(nil)
		res += ", "
	}

	return res
}

func (c *CodeGraph) GetConnectedNode(id int) GraphNode {
	var otherConnID int
	for _, et := range c.Connections {
		if et.from == id {
			otherConnID = et.to
		} else if et.to == id {
			otherConnID = et.from
		}
	}

	for _, et := range c.Nodes {
		if et.HasInputWithID(otherConnID) {
			return et
		}
	}
	return nil
}
