package main

import (
	"encoding/json"
	"errors"
	"fmt"
	"strconv"
)

// Parsing structs
type InterfacePropsJSON struct {
	ID    string `json:"id"`
	Value string `json:"value"`
}

func (c *CodeGraph) UnmarshalJSON(bytes []byte) error {
	var data map[string]*json.RawMessage
	err := json.Unmarshal(bytes, &data)
	if err != nil {
		return err
	}

	idsMap := make(map[string]int)
	err = c.parseConnections(*data["connections"], idsMap)
	if err != nil {
		return err
	}

	err = c.parseNodes(*data["nodes"], idsMap)
	if err != nil {
		return err
	}

	return nil
}

func (c *CodeGraph) parseConnections(bytes []byte, idsMap map[string]int) error {
	type GraphConnectionJson struct {
		From string `json:"from"`
		To   string `json:"to"`
	}

	var Connections []GraphConnectionJson

	err := json.Unmarshal(bytes, &Connections)
	if err != nil {
		return err
	}

	index := 0

	for _, et := range Connections {
		if _, ok := idsMap[et.From]; !ok {
			idsMap[et.From] = index
			index++
		}
		if _, ok := idsMap[et.To]; !ok {
			idsMap[et.To] = index
			index++
		}

		c.Connections = append(c.Connections, GraphConnection{from: idsMap[et.From], to: idsMap[et.To]})
	}

	return nil
}

func (c *CodeGraph) parseNodes(bytes []byte, idsMap map[string]int) error {
	var nodes []json.RawMessage

	nodeType := struct {
		Name string `json:"type"`
	}{}

	err := json.Unmarshal(bytes, &nodes)
	if err != nil {
		return err
	}

	for _, element := range nodes {
		json.Unmarshal(element, &nodeType)

		switch nodeType.Name {
		case "On click":
			c.parseOnClick(element, idsMap)
		case "On Canvas click":
			c.parseOnCanvasClick(element, idsMap)
		case "On start":
			c.parseOnStart(element, idsMap)
		case "On timer":
			c.parseTimer(element, idsMap)
		case "Read num":
			c.parseReadNumVar(element, idsMap)
		case "Write num":
			c.parseWriteNumVar(element, idsMap)
		case "Random num":
			c.parseRandomNum(element, idsMap)
		case "Absolute num":
			c.parseAbsNum(element, idsMap)
		case "Operators":
			c.parseNumOperation(element, idsMap)
		case "Read array size":
			c.parseArrSize(element, idsMap)
		case "Read array num":
			c.parseReadArrNum(element, idsMap)
		case "Write array num":
			c.parseWriteArrNum(element, idsMap)
		case "Push back num":
			c.parseArrPushBack(element, idsMap)
		case "If/Else":
			c.parseIfElse(element, idsMap)
		case "For loop":
			c.parseForLoop(element, idsMap)
		case "Compare num":
			c.parseNumComparison(element, idsMap)
		case "Split flow":
			c.parseSplitFLow(element, idsMap)
		case "Draw rectangle":
			c.parseFillRect(element, idsMap, "Draw")
		case "Clear rectangle":
			c.parseFillRect(element, idsMap, "Clear")
		case "Draw line":
			c.parseDrawLine(element, idsMap)
		case "Draw circle":
			c.parseDrawCircle(element, idsMap)
		default:
			return errors.New("unknown node type while CodeGraph unmarshal")
		}
	}

	return nil
}

func getOptsIfaces(bytes json.RawMessage) ([]json.RawMessage, []json.RawMessage, error) {
	var data map[string]*json.RawMessage
	if err := json.Unmarshal(bytes, &data); err != nil {
		return nil, nil, err
	}

	var opts []json.RawMessage
	if err := json.Unmarshal(*data["options"], &opts); err != nil {
		return nil, nil, err
	}

	var ifaces []json.RawMessage
	if err := json.Unmarshal(*data["interfaces"], &ifaces); err != nil {
		return nil, nil, err
	}

	return opts, ifaces, nil
}

func getOptAtIndex(opts []json.RawMessage, index uint, expectedName string) (name string, val string, err error) {
	name = ""
	val = ""
	err = nil

	var opt []interface{}
	if err = json.Unmarshal(opts[index], &opt); err != nil {
		return
	}
	if opt[0] != expectedName {
		err = errors.New("first option of onClick is not " + expectedName)
		return
	}

	name = fmt.Sprintf("%v", opt[0])
	val = fmt.Sprintf("%v", opt[1])

	return
}

func getIfaceAtIndex(ifaces []json.RawMessage, index uint, expectedName string, idsMap map[string]int) (val string, id int, err error) {

	val = ""
	id = -1
	err = nil

	var iface []json.RawMessage
	if err = json.Unmarshal(ifaces[index], &iface); err != nil {
		return
	}

	name := ""
	if err = json.Unmarshal(iface[0], &name); err != nil {
		return
	}
	if name != expectedName {
		err = errors.New("expected interface name:" + expectedName + " the name is:" + name)
		name = ""
		return
	}

	var props InterfacePropsJSON
	if err = json.Unmarshal(iface[1], &props); err != nil {
		type InterfaceFallback struct {
			ID    string      `json:"id"`
			Value json.Number `json:"value"`
		}
		var props2 InterfaceFallback
		if err = json.Unmarshal(iface[1], &props2); err != nil {
			fmt.Println(err)
			return
		}
		props.ID = props2.ID
		props.Value = string(props2.Value)
	}

	val = props.Value
	id, ok := idsMap[props.ID]
	if !ok {
		id = -1
	}

	return
}

func (c *CodeGraph) parseOnClick(bytes json.RawMessage, idsMap map[string]int) error {
	opts, ifaces, err := getOptsIfaces(bytes)
	if err != nil {
		fmt.Println(err)
		return err
	}

	_, val, err := getOptAtIndex(opts, 0, "Button ID")
	if err != nil {
		return err
	}

	_, id, err := getIfaceAtIndex(ifaces, 0, "Output", idsMap)
	if err != nil {
		return err
	}

	node := NodeOnClick{MethodName: val, OutFlowNode: id, CodeGraph: c}
	c.Nodes = append(c.Nodes, &node)
	c.MethodsNodes = append(c.MethodsNodes, &node)

	return nil
}

func (c *CodeGraph) parseOnCanvasClick(bytes json.RawMessage, idsMap map[string]int) error {
	_, ifaces, err := getOptsIfaces(bytes)
	if err != nil {
		fmt.Println(err)
		return err
	}

	_, id, err := getIfaceAtIndex(ifaces, 0, "Output", idsMap)
	if err != nil {
		return err
	}

	_, idX, err := getIfaceAtIndex(ifaces, 1, "X", idsMap)
	if err != nil {
		return err
	}

	_, idY, err := getIfaceAtIndex(ifaces, 2, "Y", idsMap)
	if err != nil {
		return err
	}

	node := NodeOnCanvasClick{VarName: "ON_CLICK_", OutFlowNode: id, CodeGraph: c}
	c.Nodes = append(c.Nodes, &node)
	c.CreatedNodes = append(c.CreatedNodes, &node)

	c.Nodes = append(c.Nodes, &NodeReadNumber{VarName: "ON_CLICK_X", ResConn: idX, CodeGraph: c})
	c.Nodes = append(c.Nodes, &NodeReadNumber{VarName: "ON_CLICK_Y", ResConn: idY, CodeGraph: c})

	return nil
}

func (c *CodeGraph) parseOnStart(bytes json.RawMessage, idsMap map[string]int) error {
	_, ifaces, err := getOptsIfaces(bytes)
	if err != nil {
		fmt.Println(err)
		return err
	}

	_, id, err := getIfaceAtIndex(ifaces, 0, "Output", idsMap)
	if err != nil {
		return err
	}

	node := NodeOnStart{OutFlowNode: id, CodeGraph: c}
	c.Nodes = append(c.Nodes, &node)
	c.CreatedNodes = append(c.CreatedNodes, &node)

	return nil
}

func (c *CodeGraph) parseTimer(bytes json.RawMessage, idsMap map[string]int) error {
	opts, ifaces, err := getOptsIfaces(bytes)
	if err != nil {
		fmt.Println(err)
		return err
	}

	_, val, err := getOptAtIndex(opts, 0, "Interval")
	if err != nil {
		fmt.Println(err)
		return err
	}
	intVal, err := strconv.Atoi(val)
	if err != nil {
		return err
	}

	_, id, err := getIfaceAtIndex(ifaces, 0, "Output", idsMap)
	if err != nil {
		return err
	}

	node := NodeOnTimer{OutFlowNode: id, Interval: intVal, CodeGraph: c}
	c.Nodes = append(c.Nodes, &node)
	c.CreatedNodes = append(c.CreatedNodes, &node)

	return nil
}

func (c *CodeGraph) parseReadNumVar(bytes json.RawMessage, idsMap map[string]int) error {
	opts, ifaces, err := getOptsIfaces(bytes)
	if err != nil {
		fmt.Println(err)
		return err
	}

	_, val, err := getOptAtIndex(opts, 0, "Variable Name")
	if err != nil {
		return err
	}

	_, id, err := getIfaceAtIndex(ifaces, 0, "Output", idsMap)
	if err != nil {
		return err
	}

	c.NumVariables[val] = true
	c.Nodes = append(c.Nodes, &NodeReadNumber{VarName: val, ResConn: id, CodeGraph: c})
	return nil
}

func (c *CodeGraph) parseWriteNumVar(bytes json.RawMessage, idsMap map[string]int) error {
	opts, ifaces, err := getOptsIfaces(bytes)
	if err != nil {
		fmt.Println(err)
		return err
	}

	_, val, err := getOptAtIndex(opts, 0, "Variable Name")
	if err != nil {
		return err
	}

	_, flowId, err := getIfaceAtIndex(ifaces, 0, "Input Flow", idsMap)
	if err != nil {
		return err
	}

	inVal, id, err := getIfaceAtIndex(ifaces, 1, "Input", idsMap)
	if err != nil {
		return err
	}
	inValF, err := strconv.ParseFloat(inVal, 32)
	if err != nil {
		inValF = 0.0
	}

	c.NumVariables[val] = true
	c.Nodes = append(c.Nodes, &NodeWriteNumber{VarName: val, NumInputConn: id, FlowInput: flowId, Value: float32(inValF), CodeGraph: c})
	return nil
}

func (c *CodeGraph) parseRandomNum(bytes json.RawMessage, idsMap map[string]int) error {
	_, ifaces, err := getOptsIfaces(bytes)
	if err != nil {
		fmt.Println(err)
		return err
	}

	aValS, aID, err := getIfaceAtIndex(ifaces, 0, "From", idsMap)
	if err != nil {
		return err
	}
	aValF, err := strconv.ParseFloat(aValS, 32)
	if err != nil {
		aValF = 0.0
	}

	bValS, bID, err := getIfaceAtIndex(ifaces, 1, "To", idsMap)
	if err != nil {
		return err
	}
	bValF, err := strconv.ParseFloat(bValS, 32)
	if err != nil {
		aValF = 0.0
	}

	_, resID, err := getIfaceAtIndex(ifaces, 2, "Output", idsMap)
	if err != nil {
		return err
	}

	c.Nodes = append(c.Nodes, &NodeRandomNumber{
		CodeGraph: c,
		ValFrom:   float32(aValF),
		ConnFrom:  aID,
		ValTo:     float32(bValF),
		ConnTo:    bID,
		ResConn:   resID,
	})
	return nil
}

func (c *CodeGraph) parseAbsNum(bytes json.RawMessage, idsMap map[string]int) error {
	_, ifaces, err := getOptsIfaces(bytes)
	if err != nil {
		fmt.Println(err)
		return err
	}

	valS, id, err := getIfaceAtIndex(ifaces, 0, "Input", idsMap)
	if err != nil {
		return err
	}
	valF, err := strconv.ParseFloat(valS, 32)
	if err != nil {
		valF = 0.0
	}

	_, resID, err := getIfaceAtIndex(ifaces, 1, "Result", idsMap)
	if err != nil {
		return err
	}

	c.Nodes = append(c.Nodes, &NodeAbsNumber{
		CodeGraph: c,
		Value:     float32(valF),
		Conn:      id,
		ResConn:   resID,
	})
	return nil
}

func (c *CodeGraph) parseNumOperation(bytes json.RawMessage, idsMap map[string]int) error {
	opts, ifaces, err := getOptsIfaces(bytes)
	if err != nil {
		fmt.Println(err)
		return err
	}

	_, val, err := getOptAtIndex(opts, 0, "Operator")
	if err != nil {
		return err
	}

	var op string
	switch val {
	case "Add(+)":
		op = "+"
	case "Subtract(-)":
		op = "-"
	case "Multiply(*)":
		op = "*"
	case "Devide(/)":
		op = "/"
	case "Modulus(%)":
		op = "%"
	default:
		return errors.New("unknown operation in Num opeator node")
	}

	aValS, aID, err := getIfaceAtIndex(ifaces, 0, "A", idsMap)
	if err != nil {
		return err
	}
	aValF, err := strconv.ParseFloat(aValS, 32)
	if err != nil {
		aValF = 0.0
	}

	bValS, bID, err := getIfaceAtIndex(ifaces, 1, "B", idsMap)
	if err != nil {
		return err
	}
	bValF, err := strconv.ParseFloat(bValS, 32)
	if err != nil {
		aValF = 0.0
	}

	_, resID, err := getIfaceAtIndex(ifaces, 2, "Result", idsMap)
	if err != nil {
		return err
	}

	c.Nodes = append(c.Nodes, &NodeNumberOperation{
		CodeGraph: c,
		ValueA:    float32(aValF),
		ConnA:     aID,
		ValueB:    float32(bValF),
		ConnB:     bID,
		ResConn:   resID,
		Operand:   op,
	})
	return nil
}

func (c *CodeGraph) parseNumComparison(bytes json.RawMessage, idsMap map[string]int) error {
	opts, ifaces, err := getOptsIfaces(bytes)
	if err != nil {
		fmt.Println(err)
		return err
	}

	_, val, err := getOptAtIndex(opts, 0, "Operator")
	if err != nil {
		return err
	}

	var op string
	switch val {
	case "Equal(==)":
		op = "=="
	case "Not Equal(!=)":
		op = "!="
	case "Greater Than(>)":
		op = ">"
	case "Less Than(<)":
		op = "<"
	case "Greater or Equal(>=)":
		op = ">="
	case "Less or Equal(<=)":
		op = "<="
	default:
		return errors.New("unknown operation in Num comparison node")
	}

	aValS, aID, err := getIfaceAtIndex(ifaces, 0, "A", idsMap)
	if err != nil {
		return err
	}
	aValF, err := strconv.ParseFloat(aValS, 32)
	if err != nil {
		aValF = 0.0
	}

	bValS, bID, err := getIfaceAtIndex(ifaces, 1, "B", idsMap)
	if err != nil {
		return err
	}
	bValF, err := strconv.ParseFloat(bValS, 32)
	if err != nil {
		aValF = 0.0
	}

	_, resID, err := getIfaceAtIndex(ifaces, 2, "Result", idsMap)
	if err != nil {
		return err
	}

	c.Nodes = append(c.Nodes, &NodeCompareNumbers{
		CodeGraph: c,
		ValueA:    float32(aValF),
		ConnA:     aID,
		ValueB:    float32(bValF),
		ConnB:     bID,
		ResConn:   resID,
		Operator:  op,
	})
	return nil
}

func (c *CodeGraph) parseArrSize(bytes json.RawMessage, idsMap map[string]int) error {
	opts, ifaces, err := getOptsIfaces(bytes)
	if err != nil {
		fmt.Println(err)
		return err
	}

	_, val, err := getOptAtIndex(opts, 0, "Array Var Name")
	if err != nil {
		return err
	}

	_, id, err := getIfaceAtIndex(ifaces, 0, "Output", idsMap)
	if err != nil {
		return err
	}

	c.ArrVariables[val] = true
	c.Nodes = append(c.Nodes, &NodeReadArrSize{VarName: val, ResConn: id, CodeGraph: c})
	return nil
}

func (c *CodeGraph) parseReadArrNum(bytes json.RawMessage, idsMap map[string]int) error {
	opts, ifaces, err := getOptsIfaces(bytes)
	if err != nil {
		fmt.Println(err)
		return err
	}

	_, val, err := getOptAtIndex(opts, 0, "Array Var Name")
	if err != nil {
		return err
	}

	idxS, idIdx, err := getIfaceAtIndex(ifaces, 0, "Index", idsMap)
	if err != nil {
		return err
	}
	idxInt, err := strconv.Atoi(idxS)
	if err != nil {
		idxInt = 0
	}

	_, idRes, err := getIfaceAtIndex(ifaces, 1, "Output", idsMap)
	if err != nil {
		return err
	}

	c.ArrVariables[val] = true
	c.Nodes = append(c.Nodes, &NodeReadArrNumber{
		VarName:   val,
		Index:     idxInt,
		IndexConn: idIdx,
		ResConn:   idRes,
		CodeGraph: c,
	})
	return nil
}

func (c *CodeGraph) parseWriteArrNum(bytes json.RawMessage, idsMap map[string]int) error {
	opts, ifaces, err := getOptsIfaces(bytes)
	if err != nil {
		fmt.Println(err)
		return err
	}

	_, val, err := getOptAtIndex(opts, 0, "Array Var Name")
	if err != nil {
		return err
	}

	idxS, idIdx, err := getIfaceAtIndex(ifaces, 0, "Index", idsMap)
	if err != nil {
		return err
	}
	idxInt, err := strconv.Atoi(idxS)
	if err != nil {
		idxInt = 0
	}

	_, idInFlow, err := getIfaceAtIndex(ifaces, 1, "Input Flow", idsMap)
	if err != nil {
		return err
	}

	inVal, idInput, err := getIfaceAtIndex(ifaces, 2, "Input", idsMap)
	if err != nil {
		return err
	}
	inValF, err := strconv.ParseFloat(inVal, 32)
	if err != nil {
		inValF = 0.0
	}

	c.ArrVariables[val] = true
	c.Nodes = append(c.Nodes, &NodeWriteArrNumber{
		CodeGraph: c,
		VarName:   val,
		Index:     idxInt,
		IndexConn: idIdx,
		Value:     float32(inValF),
		ValueConn: idInput,
		FlowInput: idInFlow,
	})
	return nil
}

func (c *CodeGraph) parseArrPushBack(bytes json.RawMessage, idsMap map[string]int) error {
	opts, ifaces, err := getOptsIfaces(bytes)
	if err != nil {
		fmt.Println(err)
		return err
	}

	_, val, err := getOptAtIndex(opts, 0, "Array Var Name")
	if err != nil {
		return err
	}

	_, flowId, err := getIfaceAtIndex(ifaces, 0, "Input Flow", idsMap)
	if err != nil {
		return err
	}

	inVal, id, err := getIfaceAtIndex(ifaces, 1, "Input", idsMap)
	if err != nil {
		return err
	}
	inValF, err := strconv.ParseFloat(inVal, 32)
	if err != nil {
		inValF = 0.0
	}

	c.ArrVariables[val] = true
	c.Nodes = append(c.Nodes, &NodePushArrNumber{
		VarName:   val,
		Value:     float32(inValF),
		ValueConn: id,
		FlowInput: flowId,
		CodeGraph: c,
	})
	return nil
}

func (c *CodeGraph) parseIfElse(bytes json.RawMessage, idsMap map[string]int) error {
	_, ifaces, err := getOptsIfaces(bytes)
	if err != nil {
		fmt.Println(err)
		return err
	}

	_, inputID, err := getIfaceAtIndex(ifaces, 0, "Input Flow", idsMap)
	if err != nil {
		return err
	}
	_, trueID, err := getIfaceAtIndex(ifaces, 1, "True", idsMap)
	if err != nil {
		return err
	}
	_, falseID, err := getIfaceAtIndex(ifaces, 2, "False", idsMap)
	if err != nil {
		return err
	}
	_, condID, err := getIfaceAtIndex(ifaces, 3, "Condition", idsMap)
	if err != nil {
		return err
	}

	c.Nodes = append(c.Nodes, &NodeIfElse{
		CodeGraph:   c,
		InputFlowID: inputID,
		TrueFlowID:  trueID,
		FalseFlowID: falseID,
		ConditionID: condID,
	})
	return nil
}

func (c *CodeGraph) parseForLoop(bytes json.RawMessage, idsMap map[string]int) error {
	_, ifaces, err := getOptsIfaces(bytes)
	if err != nil {
		fmt.Println(err)
		return err
	}

	_, inputID, err := getIfaceAtIndex(ifaces, 0, "Input Flow", idsMap)
	if err != nil {
		return err
	}
	_, initID, err := getIfaceAtIndex(ifaces, 1, "Initialization", idsMap)
	if err != nil {
		return err
	}
	_, loopID, err := getIfaceAtIndex(ifaces, 2, "Loop flow", idsMap)
	if err != nil {
		return err
	}
	_, condID, err := getIfaceAtIndex(ifaces, 3, "Condition", idsMap)
	if err != nil {
		return err
	}

	c.Nodes = append(c.Nodes, &NodeForLoop{
		CodeGraph:   c,
		InputFlowID: inputID,
		InitFlowID:  initID,
		LoopFlowID:  loopID,
		ConditionID: condID,
	})
	return nil
}

func (c *CodeGraph) parseSplitFLow(bytes json.RawMessage, idsMap map[string]int) error {
	_, ifaces, err := getOptsIfaces(bytes)
	if err != nil {
		fmt.Println(err)
		return err
	}

	_, inputID, err := getIfaceAtIndex(ifaces, 0, "Input Flow", idsMap)
	if err != nil {
		return err
	}
	_, oneID, err := getIfaceAtIndex(ifaces, 1, "Output 1", idsMap)
	if err != nil {
		return err
	}
	_, twoID, err := getIfaceAtIndex(ifaces, 2, "Output 2", idsMap)
	if err != nil {
		return err
	}

	c.Nodes = append(c.Nodes, &NodeSplitFlow{
		CodeGraph:   c,
		InputFlowID: inputID,
		Flow1ID:     oneID,
		FLow2ID:     twoID,
	})
	return nil
}

func (c *CodeGraph) parseFillRect(bytes json.RawMessage, idsMap map[string]int, operation string) error {
	_, ifaces, err := getOptsIfaces(bytes)
	if err != nil {
		fmt.Println(err)
		return err
	}

	_, flowId, err := getIfaceAtIndex(ifaces, 0, "Input Flow", idsMap)
	if err != nil {
		return err
	}

	xValS, xID, err := getIfaceAtIndex(ifaces, 1, "X", idsMap)
	if err != nil {
		return err
	}
	xValF, err := strconv.ParseFloat(xValS, 32)
	if err != nil {
		xValF = 0.0
	}

	yValS, yID, err := getIfaceAtIndex(ifaces, 2, "Y", idsMap)
	if err != nil {
		return err
	}
	yValF, err := strconv.ParseFloat(yValS, 32)
	if err != nil {
		yValF = 0.0
	}

	wValS, wID, err := getIfaceAtIndex(ifaces, 3, "Width", idsMap)
	if err != nil {
		return err
	}
	wValF, err := strconv.ParseFloat(wValS, 32)
	if err != nil {
		wValF = 0.0
	}

	hValS, hID, err := getIfaceAtIndex(ifaces, 4, "Height", idsMap)
	if err != nil {
		return err
	}
	hValF, err := strconv.ParseFloat(hValS, 32)
	if err != nil {
		hValF = 0.0
	}

	c.Nodes = append(c.Nodes, &NodeDrawRectangle{
		CodeGraph: c,
		FlowInput: flowId,
		ValueX:    float32(xValF),
		ValueY:    float32(yValF),
		ValueW:    float32(wValF),
		ValueH:    float32(hValF),
		ConnX:     xID,
		ConnY:     yID,
		ConnW:     wID,
		ConnH:     hID,
		Operation: operation,
	})
	return nil
}

func (c *CodeGraph) parseDrawLine(bytes json.RawMessage, idsMap map[string]int) error {
	_, ifaces, err := getOptsIfaces(bytes)
	if err != nil {
		fmt.Println(err)
		return err
	}

	_, flowId, err := getIfaceAtIndex(ifaces, 0, "Input Flow", idsMap)
	if err != nil {
		return err
	}

	xValS, xID, err := getIfaceAtIndex(ifaces, 1, "From X", idsMap)
	if err != nil {
		return err
	}
	xValF, err := strconv.ParseFloat(xValS, 32)
	if err != nil {
		xValF = 0.0
	}

	yValS, yID, err := getIfaceAtIndex(ifaces, 2, "From Y", idsMap)
	if err != nil {
		return err
	}
	yValF, err := strconv.ParseFloat(yValS, 32)
	if err != nil {
		yValF = 0.0
	}

	wValS, wID, err := getIfaceAtIndex(ifaces, 3, "To X", idsMap)
	if err != nil {
		return err
	}
	wValF, err := strconv.ParseFloat(wValS, 32)
	if err != nil {
		wValF = 0.0
	}

	hValS, hID, err := getIfaceAtIndex(ifaces, 4, "To Y", idsMap)
	if err != nil {
		return err
	}
	hValF, err := strconv.ParseFloat(hValS, 32)
	if err != nil {
		hValF = 0.0
	}

	c.Nodes = append(c.Nodes, &NodeDrawLine{
		CodeGraph: c,
		FlowInput: flowId,
		ValueX:    float32(xValF),
		ValueY:    float32(yValF),
		ValueW:    float32(wValF),
		ValueH:    float32(hValF),
		ConnX:     xID,
		ConnY:     yID,
		ConnW:     wID,
		ConnH:     hID,
	})
	return nil
}

func (c *CodeGraph) parseDrawCircle(bytes json.RawMessage, idsMap map[string]int) error {
	_, ifaces, err := getOptsIfaces(bytes)
	if err != nil {
		fmt.Println(err)
		return err
	}

	_, flowId, err := getIfaceAtIndex(ifaces, 0, "Input Flow", idsMap)
	if err != nil {
		return err
	}

	xValS, xID, err := getIfaceAtIndex(ifaces, 1, "X", idsMap)
	if err != nil {
		return err
	}
	xValF, err := strconv.ParseFloat(xValS, 32)
	if err != nil {
		xValF = 0.0
	}

	yValS, yID, err := getIfaceAtIndex(ifaces, 2, "Y", idsMap)
	if err != nil {
		return err
	}
	yValF, err := strconv.ParseFloat(yValS, 32)
	if err != nil {
		yValF = 0.0
	}

	rValS, rID, err := getIfaceAtIndex(ifaces, 3, "Radius", idsMap)
	if err != nil {
		return err
	}
	rValF, err := strconv.ParseFloat(rValS, 32)
	if err != nil {
		rValF = 0.0
	}

	c.Nodes = append(c.Nodes, &NodeDrawCircle{
		CodeGraph: c,
		FlowInput: flowId,
		ValueX:    float32(xValF),
		ValueY:    float32(yValF),
		ValueR:    float32(rValF),
		ConnX:     xID,
		ConnY:     yID,
		ConnR:     rID,
	})
	return nil
}
