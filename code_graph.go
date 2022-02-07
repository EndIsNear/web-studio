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
	Nodes         []GraphNode
	OnClickNodes  []GraphNode
	StartingNodes []GraphNode
	NumVariables  map[string]bool

	Connections []GraphConnection

	lastUsedFunction int
}

func (c *CodeGraph) Init() {
	c.NumVariables = make(map[string]bool)
}

func (c *CodeGraph) Build() string {
	c.lastUsedFunction = 0

	header := `var app=new Vue({el:"#app",data:{`
	vars := c.BuildVars()
	created := `},created:function(){`
	onStartCode := c.BuildOnStart()
	mid := `},methods:{`
	methods := c.BuildOnClick()
	footer := `}});`

	return fmt.Sprintf("%s%s%s%s%s%s%s", header, vars, created, onStartCode, mid, methods, footer)
}

func (c *CodeGraph) BuildVars() string {
	result := ``
	for key := range c.NumVariables {
		result += fmt.Sprintf(`%s: 0, `, key)
	}
	return result
}

func (c *CodeGraph) GetNextFuncName() string {
	c.lastUsedFunction++
	return "N" + strconv.Itoa(c.lastUsedFunction)
}

func (c *CodeGraph) BuildOnStart() string {
	res := ""
	for _, et := range c.StartingNodes {
		res += et.GetCode(nil)
	}

	return res
}

func (c *CodeGraph) BuildOnClick() string {
	var res string
	for _, et := range c.OnClickNodes {
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
