package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"strconv"
)

type HTMLElementJSON struct {
	ElementType string `json:"type"`
	Label       string `json:"label"`
	Id          string `json:"id"`
}

type SiteBuilder struct {
	lastUsedID   uint
	htmlElements []HTMLElement
	//TODO: temp for fun
	bgColor string
}

func (b *SiteBuilder) Init() {
	b.bgColor = ""
}

func (b *SiteBuilder) ServeHTML(res http.ResponseWriter, req *http.Request) {
	header := `<!DOCTYPE html><html lang="en"><head><script src="script.js"></script><link rel="stylesheet" href="style.css"><title>Idle game 2k22</title></head><body>`
	body := `<h1>You can add items here! Can you?!</h1>`
	footer := `</body></html>`

	if len(b.htmlElements) > 0 {
		body = ""
	}
	for _, elem := range b.htmlElements {
		body += elem.ToString()
	}

	fmt.Fprintf(res, "%s%s%s", header, body, footer)
}

func (b *SiteBuilder) ServeCSS(res http.ResponseWriter, req *http.Request) {
	res.Header().Set("Content-Type", "text/css")
	header := `body{ background-color: `
	body := b.bgColor
	footer := `; }`

	fmt.Fprintf(res, "%s%s%s", header, body, footer)
}

func (b *SiteBuilder) ServeJS(res http.ResponseWriter, req *http.Request) {
	// fmt.Fprintf(res, "You can add items here! Can you?!\n")
}

func (b *SiteBuilder) NewHTMLElement(jsonReq string) {
	var request HTMLElementJSON
	json.Unmarshal([]byte(jsonReq), &request)

	switch request.ElementType {
	case "Button":
		b.htmlElements = append(b.htmlElements, &HTMLButton{label: request.Label, id: b.lastUsedID})
		b.lastUsedID++
	case "Header":
		b.htmlElements = append(b.htmlElements, &HTMLHeader{label: request.Label, id: b.lastUsedID})
		b.lastUsedID++
	default:
		log.Printf("The given %s HTMLElementJSON type can't be found", request.ElementType)
	}
	// b.UpdateHTML()
}

func (b *SiteBuilder) DeleteHTMLElement(jsonReq string) {
	var request HTMLElementJSON
	json.Unmarshal([]byte(jsonReq), &request)

	id, err := strconv.ParseUint(request.Id, 10, 64)
	if err != nil {
		fmt.Errorf("Cant parse deleting item's id: %v", err)
		return
	}
	for idx, elem := range b.htmlElements {
		if elem.GetID() == uint(id) {
			b.htmlElements = append(b.htmlElements[:idx], b.htmlElements[idx+1:]...)
			break
		}
	}
	// b.UpdateHTML()
}

func (b *SiteBuilder) GetAllHTMLElementsAsJSON() ([]byte, error) {
	return json.Marshal(b.htmlElements)
}

func (b *SiteBuilder) OnBGColorChanged(jsonReq string) {
	type CSSColor struct {
		Color string `json:"color"`
	}
	var request CSSColor
	json.Unmarshal([]byte(jsonReq), &request)
	b.bgColor = request.Color
	// b.UpdateCSS()
}
