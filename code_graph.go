package main

import (
	"encoding/json"
	"errors"
)

type GraphConnection struct {
	From string `json:"from"`
	To   string `json:"to"`
}
type CodeGraph struct {
	Nodes       []GraphNode
	Connections []GraphConnection
}

func (c *CodeGraph) UnmarshalJSON(bytes []byte) error {
	var data map[string]*json.RawMessage
	err := json.Unmarshal(bytes, &data)
	if err != nil {
		return err
	}

	err = c.unmarshalNodes(*data["nodes"])
	if err != nil {
		return err
	}

	err = json.Unmarshal(*data["connections"], &c.Connections)
	if err != nil {
		return err
	}

	return nil
}

func (c *CodeGraph) unmarshalNodes(bytes []byte) error {
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
			c.Nodes = append(c.Nodes, &NodeOnClick{MethodName: "asd"})
		case "Read number variable":
			c.Nodes = append(c.Nodes, &NodeReadNumber{VarName: "asd"})
		case "Write number variable":
			c.Nodes = append(c.Nodes, &NodeWriteNumber{VarName: "asd"})
		case "Add number":
			c.Nodes = append(c.Nodes, &NodeAddNumber{})
		case "Subtract number":
			c.Nodes = append(c.Nodes, &NodeSubtractNumber{})
		default:
			return errors.New("unknown node type while CodeGraph unmarshal")
		}
	}

	print(c.Nodes)

	return nil
}
