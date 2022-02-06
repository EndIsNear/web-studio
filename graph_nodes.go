package main

import (
	"fmt"
)

type GraphNode interface {
	GetCode(funcName string) string
	// actually it's output for values and input for flows :)
	HasInputWithID(id int) bool
}

type NodeOnClick struct {
	MethodName  string
	OutFlowNode int

	CodeGraph *CodeGraph
}

func (n *NodeOnClick) GetCode(_ string) string {
	calleeFuncName := n.CodeGraph.GetNextFuncName()

	calleeCode := ""
	childNode := n.CodeGraph.GetConnectedNode(n.OutFlowNode)
	if childNode != nil {
		calleeCode = childNode.GetCode(calleeFuncName)
	}

	return fmt.Sprintf(`%s: function () { %s %s() }`, n.MethodName, calleeCode, calleeFuncName)
}

func (n *NodeOnClick) HasInputWithID(id int) bool {
	return false
}

type NodeOnStart struct {
	OutFlowNode int

	CodeGraph *CodeGraph
}

func (n *NodeOnStart) GetCode(_ string) string {
	calleeFuncName := n.CodeGraph.GetNextFuncName()

	calleeCode := ""
	childNode := n.CodeGraph.GetConnectedNode(n.OutFlowNode)
	if childNode != nil {
		calleeCode = childNode.GetCode(calleeFuncName)
	}

	return fmt.Sprintf(`%s %s();`, calleeCode, calleeFuncName)
}

func (n *NodeOnStart) HasInputWithID(id int) bool {
	return false
}

type NodeReadNumber struct {
	CodeGraph *CodeGraph

	VarName string
	ResConn int
}

func (n *NodeReadNumber) GetCode(funcName string) string {
	return fmt.Sprintf(`%s=()=>{return this.%s};`, funcName, n.VarName)
}

func (n *NodeReadNumber) HasInputWithID(id int) bool {
	return id == n.ResConn
}

type NodeWriteNumber struct {
	CodeGraph *CodeGraph

	VarName      string
	NumInputConn int
	FlowInput    int
}

func (n *NodeWriteNumber) GetCode(funcName string) string {
	calleeFuncName := n.CodeGraph.GetNextFuncName()

	calleeCode := ""
	childNode := n.CodeGraph.GetConnectedNode(n.NumInputConn)
	if childNode != nil {
		calleeCode = childNode.GetCode(calleeFuncName)
	}

	return fmt.Sprintf(`%s %s=()=>{this.%s=%s()};`, calleeCode, funcName, n.VarName, calleeFuncName)
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

func (n *NodeNumberOperation) GetCode(funcName string) string {
	var opCode string
	var calleesCode string
	if n.ConnA == -1 && n.ConnB == -1 {
		opCode = fmt.Sprintf(`%f%s%f`, n.ValueA, n.Operand, n.ValueB)
	} else if n.ConnB == -1 {
		calleeFuncName := n.CodeGraph.GetNextFuncName()

		childNode := n.CodeGraph.GetConnectedNode(n.ConnA)
		if childNode != nil {
			calleesCode = childNode.GetCode(calleeFuncName)
		}

		opCode = fmt.Sprintf(`%s()%s%f`, calleeFuncName, n.Operand, n.ValueB)
	} else if n.ConnA == -1 {
		calleeFuncName := n.CodeGraph.GetNextFuncName()

		childNode := n.CodeGraph.GetConnectedNode(n.ConnB)
		if childNode != nil {
			calleesCode = childNode.GetCode(calleeFuncName)
		}

		opCode = fmt.Sprintf(`%s()%s%f`, calleeFuncName, n.Operand, n.ValueA)
	} else {
		calleeFuncName := n.CodeGraph.GetNextFuncName()
		calleeFuncName2 := n.CodeGraph.GetNextFuncName()

		childNode := n.CodeGraph.GetConnectedNode(n.ConnA)
		childNode2 := n.CodeGraph.GetConnectedNode(n.ConnB)
		if childNode != nil && childNode2 != nil {
			calleesCode = childNode.GetCode(calleeFuncName)
			calleesCode += childNode2.GetCode(calleeFuncName)
		}

		opCode = fmt.Sprintf(`%s()%s%s()`, calleeFuncName, n.Operand, calleeFuncName2)
	}
	return fmt.Sprintf(`%s %s=()=>{ return %s};`, calleesCode, funcName, opCode)
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

func (n *NodeRandomNumber) GetCode(funcName string) string {
	var calleesCode string
	var valFrom string
	var valTo string

	if n.ConnFrom == -1 {
		valFrom = fmt.Sprintf("%f", n.ValFrom)
	} else {
		calleeFuncName := n.CodeGraph.GetNextFuncName()

		childNode := n.CodeGraph.GetConnectedNode(n.ConnFrom)
		if childNode != nil {
			calleesCode += childNode.GetCode(calleeFuncName)
		}
		valFrom = calleeFuncName + "()"
	}

	if n.ConnTo == -1 {
		valTo = fmt.Sprintf("%f", n.ValTo)
	} else {
		calleeFuncName := n.CodeGraph.GetNextFuncName()

		childNode := n.CodeGraph.GetConnectedNode(n.ConnTo)
		if childNode != nil {
			calleesCode += childNode.GetCode(calleeFuncName)
		}
		valTo = calleeFuncName + "()"
	}

	return fmt.Sprintf(`%s %s=()=>{ let a=%s; let b=%s; return (Math.random() * (b-a) + a)};`, calleesCode, funcName, valFrom, valTo)
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

func (n *NodeCompareNumbers) GetCode(funcName string) string {
	var calleesCode string
	var codeA string
	var codeB string

	if n.ConnA == -1 {
		codeA = fmt.Sprintf("%f", n.ValueA)
	} else {
		calleeFuncName := n.CodeGraph.GetNextFuncName()

		childNode := n.CodeGraph.GetConnectedNode(n.ConnA)
		if childNode != nil {
			calleesCode += childNode.GetCode(calleeFuncName)
		}
		codeA = calleeFuncName + "()"
	}

	if n.ConnB == -1 {
		codeB = fmt.Sprintf("%f", n.ValueB)
	} else {
		calleeFuncName := n.CodeGraph.GetNextFuncName()

		childNode := n.CodeGraph.GetConnectedNode(n.ConnB)
		if childNode != nil {
			calleesCode += childNode.GetCode(calleeFuncName)
		}
		codeB = calleeFuncName + "()"
	}

	return fmt.Sprintf(`%s %s=()=>{ return %s %s %s };`, calleesCode, funcName, codeA, n.Operator, codeB)
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

func (n *NodeIfElse) GetCode(funcName string) string {
	calleesCode := ""

	condCode := n.CodeGraph.GetNextFuncName()
	childNode := n.CodeGraph.GetConnectedNode(n.ConditionID)
	if childNode != nil {
		calleesCode += childNode.GetCode(condCode)
	}

	trueCode := n.CodeGraph.GetNextFuncName()
	childNode = n.CodeGraph.GetConnectedNode(n.TrueFlowID)
	if childNode != nil {
		calleesCode += childNode.GetCode(trueCode)
	}

	falseCode := n.CodeGraph.GetNextFuncName()
	childNode = n.CodeGraph.GetConnectedNode(n.FalseFlowID)
	if childNode != nil {
		calleesCode += childNode.GetCode(falseCode)
	}

	return fmt.Sprintf(`%s if (%s()) {%s()} else {%s()};`, calleesCode, condCode, trueCode, falseCode)
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

func (n *NodeSplitFlow) GetCode(funcName string) string {
	calleesCode := ""

	funcOne := n.CodeGraph.GetNextFuncName()
	childNode := n.CodeGraph.GetConnectedNode(n.Flow1ID)
	if childNode != nil {
		calleesCode += childNode.GetCode(funcOne)
	}

	funcTwo := n.CodeGraph.GetNextFuncName()
	childNode = n.CodeGraph.GetConnectedNode(n.FLow2ID)
	if childNode != nil {
		calleesCode += childNode.GetCode(funcTwo)
	}

	return fmt.Sprintf(`%s %s(); %s();`, calleesCode, funcOne, funcTwo)
}

func (n *NodeSplitFlow) HasInputWithID(id int) bool {
	return id == n.InputFlowID
}
