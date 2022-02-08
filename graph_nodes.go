package main

import (
	"fmt"
)

type GraphNode interface {
	// Returns the code that should be applied in the caller
	// Also appends any arrows to the input argument
	GetCode(arrowFuncs *string) string
	// actually it's output for values and input for flows :)
	HasInputWithID(id int) bool
}

type NodeOnClick struct {
	MethodName  string
	OutFlowNode int

	CodeGraph *CodeGraph
}

func (n *NodeOnClick) GetCode(_ *string) string {
	arrowFunctions := ""

	calleeCode := ""
	childNode := n.CodeGraph.GetConnectedNode(n.OutFlowNode)
	if childNode != nil {
		calleeCode = childNode.GetCode(&arrowFunctions)
	}

	return fmt.Sprintf(`%s: function () { %s %s }`, n.MethodName, arrowFunctions, calleeCode)
}

func (n *NodeOnClick) HasInputWithID(id int) bool {
	return false
}

type NodeOnStart struct {
	OutFlowNode int

	CodeGraph *CodeGraph
}

func (n *NodeOnStart) GetCode(_ *string) string {
	arrowFunctions := ""

	calleeCode := ""
	childNode := n.CodeGraph.GetConnectedNode(n.OutFlowNode)
	if childNode != nil {
		calleeCode = childNode.GetCode(&arrowFunctions)
	}

	return fmt.Sprintf(`%s %s;`, arrowFunctions, calleeCode)
}

func (n *NodeOnStart) HasInputWithID(id int) bool {
	return false
}

type NodeOnTimer struct {
	OutFlowNode int
	Interval    int

	CodeGraph *CodeGraph
}

func (n *NodeOnTimer) GetCode(_ *string) string {
	arrowFunctions := ""

	calleeCode := ""
	childNode := n.CodeGraph.GetConnectedNode(n.OutFlowNode)
	if childNode != nil {
		calleeCode = childNode.GetCode(&arrowFunctions)
	}

	return fmt.Sprintf(`%s setInterval(()=>{%s}, %d);`, arrowFunctions, calleeCode, n.Interval)
}

func (n *NodeOnTimer) HasInputWithID(id int) bool {
	return false
}

type NodeReadNumber struct {
	CodeGraph *CodeGraph

	VarName string
	ResConn int
}

func (n *NodeReadNumber) GetCode(arrowFuncs *string) string {
	return fmt.Sprintf(`this.%s`, n.VarName)
}

func (n *NodeReadNumber) HasInputWithID(id int) bool {
	return id == n.ResConn
}

type NodeWriteNumber struct {
	CodeGraph *CodeGraph

	VarName      string
	NumInputConn int
	FlowInput    int
	Value        float32
}

func (n *NodeWriteNumber) GetCode(arrowFuncs *string) string {
	funcName := "WriteNum" + n.CodeGraph.GetNextFuncName()
	if n.NumInputConn == -1 {
		*arrowFuncs += fmt.Sprintf(`%s=()=>{this.%s=%f};`, funcName, n.VarName, n.Value)
		return fmt.Sprintf(`%s();`, funcName)
	}

	calleeCode := ""
	childNode := n.CodeGraph.GetConnectedNode(n.NumInputConn)
	if childNode != nil {
		calleeCode = childNode.GetCode(arrowFuncs)
	}

	*arrowFuncs += fmt.Sprintf(`%s=()=>{this.%s=%s};`, funcName, n.VarName, calleeCode)
	return fmt.Sprintf(`%s();`, funcName)
}

func (n *NodeWriteNumber) HasInputWithID(id int) bool {
	return id == n.FlowInput
}

type NodeNumberOperation struct {
	CodeGraph *CodeGraph

	Operand string
	ValueA  float32
	ValueB  float32
	ConnA   int
	ConnB   int

	ResConn int
}

func (n *NodeNumberOperation) GetCode(arrowFuncs *string) string {
	var valA string
	var valB string

	if n.ConnA == -1 {
		valA = fmt.Sprintf("%f", n.ValueA)
	} else {
		childNode := n.CodeGraph.GetConnectedNode(n.ConnA)
		if childNode != nil {
			valA = childNode.GetCode(arrowFuncs)
		}
	}

	if n.ConnB == -1 {
		valB = fmt.Sprintf("%f", n.ValueB)
	} else {
		childNode := n.CodeGraph.GetConnectedNode(n.ConnB)
		if childNode != nil {
			valB = childNode.GetCode(arrowFuncs)
		}
	}

	return fmt.Sprintf(`(%s%s%s)`, valA, n.Operand, valB)
}

func (n *NodeNumberOperation) HasInputWithID(id int) bool {
	return id == n.ResConn
}

type NodeRandomNumber struct {
	CodeGraph *CodeGraph

	ValFrom  float32
	ValTo    float32
	ConnFrom int
	ConnTo   int

	ResConn int
}

func (n *NodeRandomNumber) GetCode(arrowFuncs *string) string {
	var valFrom string
	var valTo string

	if n.ConnFrom == -1 {
		valFrom = fmt.Sprintf("%f", n.ValFrom)
	} else {
		childNode := n.CodeGraph.GetConnectedNode(n.ConnFrom)
		if childNode != nil {
			valFrom = childNode.GetCode(arrowFuncs)
		}
	}

	if n.ConnTo == -1 {
		valTo = fmt.Sprintf("%f", n.ValTo)
	} else {
		childNode := n.CodeGraph.GetConnectedNode(n.ConnTo)
		if childNode != nil {
			valTo = childNode.GetCode(arrowFuncs)
		}
	}
	funcName := "RandomNum" + n.CodeGraph.GetNextFuncName()

	*arrowFuncs += fmt.Sprintf(`%s=()=>{ let a=%s; let b=%s; return (Math.random() * (b-a) + a)};`, funcName, valFrom, valTo)
	return fmt.Sprintf(`%s()`, funcName)
}

func (n *NodeRandomNumber) HasInputWithID(id int) bool {
	return id == n.ResConn
}

type NodeCompareNumbers struct {
	CodeGraph *CodeGraph

	Operator string
	ValueA   float32
	ValueB   float32
	ConnA    int
	ConnB    int

	ResConn int
}

func (n *NodeCompareNumbers) GetCode(arrowFuncs *string) string {
	var codeA string
	var codeB string

	if n.ConnA == -1 {
		codeA = fmt.Sprintf("%f", n.ValueA)
	} else {
		childNode := n.CodeGraph.GetConnectedNode(n.ConnA)
		if childNode != nil {
			codeA = childNode.GetCode(arrowFuncs)
		}
	}

	if n.ConnB == -1 {
		codeB = fmt.Sprintf("%f", n.ValueB)
	} else {
		childNode := n.CodeGraph.GetConnectedNode(n.ConnB)
		if childNode != nil {
			codeB = childNode.GetCode(arrowFuncs)
		}
	}

	return fmt.Sprintf(`(%s %s %s)`, codeA, n.Operator, codeB)
}

func (n *NodeCompareNumbers) HasInputWithID(id int) bool {
	return id == n.ResConn
}

type NodeIfElse struct {
	CodeGraph *CodeGraph

	InputFlowID int
	TrueFlowID  int
	FalseFlowID int

	ConditionID int
}

func (n *NodeIfElse) GetCode(arrowFuncs *string) string {
	condCode := ""
	trueCode := ""
	falseCode := ""

	childNode := n.CodeGraph.GetConnectedNode(n.ConditionID)
	if childNode != nil {
		condCode = childNode.GetCode(arrowFuncs)
	}

	childNode = n.CodeGraph.GetConnectedNode(n.TrueFlowID)
	if childNode != nil {
		trueCode = childNode.GetCode(arrowFuncs)
	}

	childNode = n.CodeGraph.GetConnectedNode(n.FalseFlowID)
	if childNode != nil {
		falseCode = childNode.GetCode(arrowFuncs)
	}

	funcName := "IfElse" + n.CodeGraph.GetNextFuncName()
	*arrowFuncs += fmt.Sprintf(`%s=()=>{if (%s) {%s} else {%s};};`, funcName, condCode, trueCode, falseCode)
	return fmt.Sprintf(`%s()`, funcName)
}

func (n *NodeIfElse) HasInputWithID(id int) bool {
	return id == n.InputFlowID
}

type NodeSplitFlow struct {
	CodeGraph *CodeGraph

	InputFlowID int
	Flow1ID     int
	FLow2ID     int
}

func (n *NodeSplitFlow) GetCode(arrowFuncs *string) string {
	funcOne := ""
	funcTwo := ""

	childNode := n.CodeGraph.GetConnectedNode(n.Flow1ID)
	if childNode != nil {
		funcOne = childNode.GetCode(arrowFuncs)
	}

	childNode = n.CodeGraph.GetConnectedNode(n.FLow2ID)
	if childNode != nil {
		funcTwo = childNode.GetCode(arrowFuncs)
	}

	return fmt.Sprintf(`%s; %s;`, funcOne, funcTwo)
}

func (n *NodeSplitFlow) HasInputWithID(id int) bool {
	return id == n.InputFlowID
}
