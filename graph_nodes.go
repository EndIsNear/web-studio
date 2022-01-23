package main

type GraphNode interface {
}

// Flow starts

type NodeOnClick struct {
	MethodName string
}

type NodeReadNumber struct {
	VarName string
}

type NodeWriteNumber struct {
	VarName string
}

type NodeAddNumber struct {
}

type NodeSubtractNumber struct {
}
