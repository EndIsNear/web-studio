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

type NodeOnCanvasClick struct {
	OutFlowNode int
	VarName     string

	CodeGraph *CodeGraph
}

func (n *NodeOnCanvasClick) GetCode(_ *string) string {
	arrowFunctions := ""

	calleeCode := ""
	childNode := n.CodeGraph.GetConnectedNode(n.OutFlowNode)
	if childNode != nil {
		calleeCode = childNode.GetCode(&arrowFunctions)
	}

	return fmt.Sprintf(`c.addEventListener('click', (event) => { this.%sX=event.offsetX;this.%sY=event.offsetY; %s %s }, false);`, n.VarName, n.VarName, arrowFunctions, calleeCode)
}

func (n *NodeOnCanvasClick) HasInputWithID(id int) bool {
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
		return fmt.Sprintf(`%s()`, funcName)
	}

	calleeCode := ""
	childNode := n.CodeGraph.GetConnectedNode(n.NumInputConn)
	if childNode != nil {
		calleeCode = childNode.GetCode(arrowFuncs)
	}

	*arrowFuncs += fmt.Sprintf(`%s=()=>{this.%s=%s};`, funcName, n.VarName, calleeCode)
	return fmt.Sprintf(`%s()`, funcName)
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

type NodeAbsNumber struct {
	CodeGraph *CodeGraph

	Value float32
	Conn  int

	ResConn int
}

func (n *NodeAbsNumber) GetCode(arrowFuncs *string) string {
	var val string

	if n.Conn == -1 {
		val = fmt.Sprintf("%f", n.Value)
	} else {
		childNode := n.CodeGraph.GetConnectedNode(n.Conn)
		if childNode != nil {
			val = childNode.GetCode(arrowFuncs)
		}
	}

	return fmt.Sprintf(`Math.abs(%s)`, val)
}

func (n *NodeAbsNumber) HasInputWithID(id int) bool {
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

type NodeTrigonometryFunc struct {
	CodeGraph *CodeGraph

	Value    float32
	Conn     int
	Function string

	ResConn int
}

func (n *NodeTrigonometryFunc) GetCode(arrowFuncs *string) string {
	var val string

	if n.Conn == -1 {
		val = fmt.Sprintf("%f", n.Value)
	} else {
		childNode := n.CodeGraph.GetConnectedNode(n.Conn)
		if childNode != nil {
			val = childNode.GetCode(arrowFuncs)
		}
	}

	return fmt.Sprintf(`Math.%s(%s * Math.PI / 180)`, n.Function, val)
}

func (n *NodeTrigonometryFunc) HasInputWithID(id int) bool {
	return id == n.ResConn
}

///////////////////////
// Number Array
///////////////////////

type NodeInitArr struct {
	CodeGraph *CodeGraph

	VarName string
	Value   string

	ResConn int
}

func (n *NodeInitArr) GetCode(arrowFuncs *string) string {
	return fmt.Sprintf(`this.%s=[%s]`, n.VarName, n.Value)
}

func (n *NodeInitArr) HasInputWithID(id int) bool {
	return id == n.ResConn
}

type NodeReadArrSize struct {
	CodeGraph *CodeGraph

	VarName string

	ResConn int
}

func (n *NodeReadArrSize) GetCode(arrowFuncs *string) string {
	return fmt.Sprintf(`this.%s.length`, n.VarName)
}

func (n *NodeReadArrSize) HasInputWithID(id int) bool {
	return id == n.ResConn
}

type NodeReadArrNumber struct {
	CodeGraph *CodeGraph

	VarName   string
	Index     int
	IndexConn int

	ResConn int
}

func (n *NodeReadArrNumber) GetCode(arrowFuncs *string) string {
	idxCode := ""
	if n.IndexConn == -1 {
		idxCode = fmt.Sprintf("%d", n.Index)
	} else {
		childNode := n.CodeGraph.GetConnectedNode(n.IndexConn)
		if childNode != nil {
			idxCode = childNode.GetCode(arrowFuncs)
		}
	}

	return fmt.Sprintf(`this.%s[%s]`, n.VarName, idxCode)
}

func (n *NodeReadArrNumber) HasInputWithID(id int) bool {
	return id == n.ResConn
}

type NodeWriteArrNumber struct {
	CodeGraph *CodeGraph

	VarName string

	Index     int
	IndexConn int
	Value     float32
	ValueConn int

	FlowInput int
}

func (n *NodeWriteArrNumber) GetCode(arrowFuncs *string) string {
	funcName := "WriteArrNum" + n.CodeGraph.GetNextFuncName()
	idxCode := ""
	valCode := ""

	if n.IndexConn == -1 {
		idxCode = fmt.Sprintf("%d", n.Index)
	} else {
		childNode := n.CodeGraph.GetConnectedNode(n.IndexConn)
		if childNode != nil {
			idxCode = childNode.GetCode(arrowFuncs)
		}
	}

	if n.ValueConn == -1 {
		valCode = fmt.Sprintf("%f", n.Value)
	} else {
		childNode := n.CodeGraph.GetConnectedNode(n.ValueConn)
		if childNode != nil {
			valCode = childNode.GetCode(arrowFuncs)
		}
	}

	*arrowFuncs += fmt.Sprintf(`%s=()=>{this.%s[%s]=%s};`, funcName, n.VarName, idxCode, valCode)
	return fmt.Sprintf(`%s()`, funcName)
}

func (n *NodeWriteArrNumber) HasInputWithID(id int) bool {
	return id == n.FlowInput
}

type NodePushArrNumber struct {
	CodeGraph *CodeGraph

	VarName string

	Value     float32
	ValueConn int

	FlowInput int
}

func (n *NodePushArrNumber) GetCode(arrowFuncs *string) string {
	valCode := ""
	if n.ValueConn == -1 {
		valCode = fmt.Sprintf("%f", n.Value)
	} else {
		childNode := n.CodeGraph.GetConnectedNode(n.ValueConn)
		if childNode != nil {
			valCode = childNode.GetCode(arrowFuncs)
		}
	}

	return fmt.Sprintf(`this.%s.push(%s);`, n.VarName, valCode)
}

func (n *NodePushArrNumber) HasInputWithID(id int) bool {
	return id == n.FlowInput
}

///////////////////////
// Flow
///////////////////////

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

type NodeForLoop struct {
	CodeGraph *CodeGraph

	InputFlowID int
	InitFlowID  int
	LoopFlowID  int

	ConditionID int
}

func (n *NodeForLoop) GetCode(arrowFuncs *string) string {
	condCode := ""
	initCode := ""
	loopCode := ""

	childNode := n.CodeGraph.GetConnectedNode(n.ConditionID)
	if childNode != nil {
		condCode = childNode.GetCode(arrowFuncs)
	}

	childNode = n.CodeGraph.GetConnectedNode(n.InitFlowID)
	if childNode != nil {
		initCode = childNode.GetCode(arrowFuncs)
	}

	childNode = n.CodeGraph.GetConnectedNode(n.LoopFlowID)
	if childNode != nil {
		loopCode = childNode.GetCode(arrowFuncs)
	}

	funcName := "Loop" + n.CodeGraph.GetNextFuncName()
	*arrowFuncs += fmt.Sprintf(`%s=()=>{for(%s;%s;) { %s }};`, funcName, initCode, condCode, loopCode)
	return fmt.Sprintf(`%s()`, funcName)
}

func (n *NodeForLoop) HasInputWithID(id int) bool {
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

type NodeDrawRectangle struct {
	CodeGraph *CodeGraph

	FlowInput int

	Operation string
	ValueX    float32
	ValueY    float32
	ValueW    float32
	ValueH    float32
	ConnX     int
	ConnY     int
	ConnW     int
	ConnH     int
}

func (n *NodeDrawRectangle) GetCode(arrowFuncs *string) string {
	var valX string
	var valY string
	var valW string
	var valH string

	funcName := "DrawRect" + n.CodeGraph.GetNextFuncName()

	if n.ConnX == -1 {
		valX = fmt.Sprintf("%f", n.ValueX)
	} else {
		childNode := n.CodeGraph.GetConnectedNode(n.ConnX)
		if childNode != nil {
			valX = childNode.GetCode(arrowFuncs)
		}
	}

	if n.ConnY == -1 {
		valY = fmt.Sprintf("%f", n.ValueY)
	} else {
		childNode := n.CodeGraph.GetConnectedNode(n.ConnY)
		if childNode != nil {
			valY = childNode.GetCode(arrowFuncs)
		}
	}

	if n.ConnW == -1 {
		valW = fmt.Sprintf("%f", n.ValueW)
	} else {
		childNode := n.CodeGraph.GetConnectedNode(n.ConnW)
		if childNode != nil {
			valW = childNode.GetCode(arrowFuncs)
		}
	}

	if n.ConnH == -1 {
		valH = fmt.Sprintf("%f", n.ValueH)
	} else {
		childNode := n.CodeGraph.GetConnectedNode(n.ConnH)
		if childNode != nil {
			valH = childNode.GetCode(arrowFuncs)
		}
	}

	methodName := `fillRect`
	if n.Operation == "Clear" {
		methodName = `clearRect`
	}

	*arrowFuncs += fmt.Sprintf(`%s=()=>{ let x=%s; let y=%s; let w=%s; let h=%s; this.CANVAS_CONTEXT.%s(x, y, w, h);};`, funcName, valX, valY, valW, valH, methodName)
	return fmt.Sprintf(`%s()`, funcName)
}

func (n *NodeDrawRectangle) HasInputWithID(id int) bool {
	return id == n.FlowInput
}

type NodeDrawLine struct {
	CodeGraph *CodeGraph

	FlowInput int

	ValueX float32
	ValueY float32
	ValueW float32
	ValueH float32
	ConnX  int
	ConnY  int
	ConnW  int
	ConnH  int
}

func (n *NodeDrawLine) GetCode(arrowFuncs *string) string {
	var valX string
	var valY string
	var valW string
	var valH string

	funcName := "DrawRect" + n.CodeGraph.GetNextFuncName()

	if n.ConnX == -1 {
		valX = fmt.Sprintf("%f", n.ValueX)
	} else {
		childNode := n.CodeGraph.GetConnectedNode(n.ConnX)
		if childNode != nil {
			valX = childNode.GetCode(arrowFuncs)
		}
	}

	if n.ConnY == -1 {
		valY = fmt.Sprintf("%f", n.ValueY)
	} else {
		childNode := n.CodeGraph.GetConnectedNode(n.ConnY)
		if childNode != nil {
			valY = childNode.GetCode(arrowFuncs)
		}
	}

	if n.ConnW == -1 {
		valW = fmt.Sprintf("%f", n.ValueW)
	} else {
		childNode := n.CodeGraph.GetConnectedNode(n.ConnW)
		if childNode != nil {
			valW = childNode.GetCode(arrowFuncs)
		}
	}

	if n.ConnH == -1 {
		valH = fmt.Sprintf("%f", n.ValueH)
	} else {
		childNode := n.CodeGraph.GetConnectedNode(n.ConnH)
		if childNode != nil {
			valH = childNode.GetCode(arrowFuncs)
		}
	}

	*arrowFuncs += fmt.Sprintf(`%s=()=>{ let x=%s; let y=%s; let w=%s; let h=%s; this.CANVAS_CONTEXT.beginPath(); this.CANVAS_CONTEXT.moveTo(x, y);this.CANVAS_CONTEXT.lineTo(w, h); this.CANVAS_CONTEXT.stroke();};`, funcName, valX, valY, valW, valH)
	return fmt.Sprintf(`%s()`, funcName)
}

func (n *NodeDrawLine) HasInputWithID(id int) bool {
	return id == n.FlowInput
}

type NodeDrawCircle struct {
	CodeGraph *CodeGraph

	FlowInput int

	ValueX float32
	ValueY float32
	ValueR float32
	ConnX  int
	ConnY  int
	ConnR  int
}

func (n *NodeDrawCircle) GetCode(arrowFuncs *string) string {
	var valX string
	var valY string
	var valR string

	funcName := "DrawCircle" + n.CodeGraph.GetNextFuncName()

	if n.ConnX == -1 {
		valX = fmt.Sprintf("%f", n.ValueX)
	} else {
		childNode := n.CodeGraph.GetConnectedNode(n.ConnX)
		if childNode != nil {
			valX = childNode.GetCode(arrowFuncs)
		}
	}

	if n.ConnY == -1 {
		valY = fmt.Sprintf("%f", n.ValueY)
	} else {
		childNode := n.CodeGraph.GetConnectedNode(n.ConnY)
		if childNode != nil {
			valY = childNode.GetCode(arrowFuncs)
		}
	}

	if n.ConnR == -1 {
		valR = fmt.Sprintf("%f", n.ValueR)
	} else {
		childNode := n.CodeGraph.GetConnectedNode(n.ConnR)
		if childNode != nil {
			valR = childNode.GetCode(arrowFuncs)
		}
	}

	*arrowFuncs += fmt.Sprintf(`%s=()=>{ let x=%s; let y=%s; let r=%s; this.CANVAS_CONTEXT.beginPath(); this.CANVAS_CONTEXT.arc(x, y, r, 0, 2 * Math.PI); this.CANVAS_CONTEXT.stroke(); };`, funcName, valX, valY, valR)
	return fmt.Sprintf(`%s()`, funcName)
}

func (n *NodeDrawCircle) HasInputWithID(id int) bool {
	return id == n.FlowInput
}
