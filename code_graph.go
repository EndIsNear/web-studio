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
	callback := `},created:function(){var e=this;setInterval(function(){e.timer++},1e3)`
	mid := `},methods:{`
	methods := c.BuildMethods()
	footer := `}});`

	return fmt.Sprintf("%s%s%s%s%s%s", header, vars, callback, mid, methods, footer)
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
	return "Func" + strconv.Itoa(c.lastUsedFunction)
}

func (c *CodeGraph) BuildMethods() string {
	var res string
	for _, et := range c.StartingNodes {
		res += et.GetCode("")
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
