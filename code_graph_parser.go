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
	// println(string(bytes))
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
		case "Read num":
			c.parseReadNumVar(element, idsMap)
		case "Write num":
			c.parseWriteNumVar(element, idsMap)
		case "Add num":
			c.parseNumOperation(element, "+", idsMap)
		case "Subtract num":
			c.parseNumOperation(element, "-", idsMap)
		case "Multiply num":
			c.parseNumOperation(element, "*", idsMap)
		case "Devide num":
			c.parseNumOperation(element, "/", idsMap)
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

	var opt []string
	if err = json.Unmarshal(opts[index], &opt); err != nil {
		return
	}
	if opt[0] != expectedName {
		err = errors.New("first option of onClick is not " + expectedName)
		return
	}

	name = opt[0]
	val = opt[1]

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
		err = errors.New("first interface of onClick is not " + expectedName)
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
	c.StartingNodes = append(c.StartingNodes, &node)

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

	_, id, err := getIfaceAtIndex(ifaces, 1, "Input", idsMap)
	if err != nil {
		return err
	}

	c.NumVariables[val] = true
	c.Nodes = append(c.Nodes, &NodeWriteNumber{VarName: val, NumInputConn: id, FlowInput: flowId, CodeGraph: c})
	return nil
}

func (c *CodeGraph) parseNumOperation(bytes json.RawMessage, op string, idsMap map[string]int) error {
	_, ifaces, err := getOptsIfaces(bytes)
	if err != nil {
		fmt.Println(err)
		return err
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
