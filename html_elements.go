package main

import (
	"encoding/json"
	"fmt"
	"strconv"
)

type HTMLElement interface {
	GetID() uint
	ToString() string
	MarshalJSON() ([]byte, error)
}

type HTMLButton struct {
	label     string
	blueprint string
	id        uint
}

func (h *HTMLButton) GetID() uint {
	return h.id
}

func (h *HTMLButton) ToString() string {
	return fmt.Sprintf(`<button onClick="%s()">%s</button>`, h.blueprint, h.label)
}

func (h *HTMLButton) MarshalJSON() ([]byte, error) {
	var element HTMLElementJSON
	element.ElementType = "Button"
	element.Label = h.label
	element.Blueprint = h.blueprint
	element.Id = strconv.FormatUint(uint64(h.id), 10)
	return json.Marshal(element)
}

type HTMLHeader struct {
	label string
	id    uint
}

func (h *HTMLHeader) GetID() uint {
	return h.id
}

func (h *HTMLHeader) ToString() string {
	return fmt.Sprintf(`<h1>%s</h1>`, h.label)
}

func (h *HTMLHeader) MarshalJSON() ([]byte, error) {
	var element HTMLElementJSON
	element.ElementType = "Header"
	element.Label = h.label
	element.Id = strconv.FormatUint(uint64(h.id), 10)
	return json.Marshal(element)
}
