package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"strconv"
	"strings"
)

type HTMLElementJSON struct {
	ElementType string `json:"type"`
	Label       string `json:"label"`
	Blueprint   string `json:"blueprint"`
	Id          string `json:"id"`
}

type SwitchValueJSON struct {
	Enabled bool `json:"enabled"`
}

type BluprintUpdateMessage struct {
	Name  string    `json:"blueprintName"`
	Graph CodeGraph `json:"graph"`
}

type SiteBuilder struct {
	lastUsedID    uint
	htmlElements  []HTMLElement
	CSSEnabled    bool
	CanvasEnabled bool

	Graph      CodeGraph
	savedGraph string
}

func (b *SiteBuilder) Init() {
	b.CSSEnabled = true
	b.Graph.Init()
	b.savedGraph = ""
}

func (b *SiteBuilder) ServeHTML(res http.ResponseWriter, req *http.Request) {
	header := `<!DOCTYPE html><html lang="en"><head><link rel="stylesheet" href="style.css"><script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script><title>Awesome website 2k22</title></head><body>`
	body := `<div id="app"><h1>You can add items here!</h1></div>`
	footer := `<script src="script.js"></script></body></html>`

	if len(b.htmlElements) > 0 || b.CanvasEnabled {
		body = `<div id="app">`

		for _, elem := range b.htmlElements {
			body += elem.ToString()
		}
		body += `</div>`
		if b.CanvasEnabled {
			body += `<canvas id="myCanvas" width="200px" height="200px" style="border:3px solid black;"></canvas>`
		}
	}
	fmt.Fprintf(res, "%s%s%s", header, body, footer)
}

func (b *SiteBuilder) ServeCSS(res http.ResponseWriter, req *http.Request) {
	if !b.CSSEnabled {
		fmt.Fprint(res, "")
	}
	res.Header().Set("Content-Type", "text/css")
	mainCss := `*{box-sizing:border-box;margin:0;padding:0;font-family:Arial,Helvetica,sans-serif}#app{width:100vw;height:100vh;text-align:center;display:flex;flex-direction:column;justify-content:center;align-items:center}h1{margin:1rem;font-weight:400}button{margin:.1rem;cursor:pointer;display:inline-block;background:#333;color:#fff;font-size:18px;border:0;padding:1rem 1.5rem}button:hover{transform:scale(.98)}button:active{transform:scale(1)}`
	canvasCSS := ``
	if b.CanvasEnabled {
		mainCss = strings.Replace(mainCss, `width:100vw`, `width:20vw`, 1)
		canvasCSS = `body { display: flex; }`
	}

	fmt.Fprintf(res, "%s%s", mainCss, canvasCSS)
}

func (b *SiteBuilder) ServeJS(res http.ResponseWriter, req *http.Request) {
	code := b.Graph.Build(b.CanvasEnabled)
	fmt.Fprintf(res, "%s", code)
}

func (b *SiteBuilder) NewHTMLElement(jsonReq string) {
	var request HTMLElementJSON
	println(string(jsonReq))
	err := json.Unmarshal([]byte(jsonReq), &request)
	if err != nil {
		log.Printf("Erron NewHTMLElement json unmarshal: %v", err)
	}

	switch request.ElementType {
	case "Button":
		b.htmlElements = append(b.htmlElements, &HTMLButton{label: request.Label, blueprint: request.Blueprint, id: b.lastUsedID})
		b.lastUsedID++
	case "Header":
		b.htmlElements = append(b.htmlElements, &HTMLHeader{label: request.Label, id: b.lastUsedID})
		b.lastUsedID++
	default:
		log.Printf("The given %s HTMLElementJSON type can't be found", request.ElementType)
	}
}

func (b *SiteBuilder) DeleteHTMLElement(jsonReq string) {
	var request HTMLElementJSON
	err := json.Unmarshal([]byte(jsonReq), &request)
	if err != nil {
		log.Printf("Erron DeleteHTMLElement json unmarshal: %v", err)
	}

	id, err := strconv.ParseUint(request.Id, 10, 64)
	if err != nil {
		log.Printf("Cant parse deleting item's id: %v", err)
		return
	}
	for idx, elem := range b.htmlElements {
		if elem.GetID() == uint(id) {
			b.htmlElements = append(b.htmlElements[:idx], b.htmlElements[idx+1:]...)
			break
		}
	}
}

func (b *SiteBuilder) UpdateCSSEnabled(jsonReq string) {
	var request SwitchValueJSON
	err := json.Unmarshal([]byte(jsonReq), &request)
	if err != nil {
		log.Printf("Erron DeleteHTMLElement json unmarshal: %v", err)
	}
	b.CSSEnabled = request.Enabled
}

func (b *SiteBuilder) UpdateCanvasEnabled(jsonReq string) {
	var request SwitchValueJSON
	err := json.Unmarshal([]byte(jsonReq), &request)
	if err != nil {
		log.Printf("Erron DeleteHTMLElement json unmarshal: %v", err)
	}
	b.CanvasEnabled = request.Enabled
}

func (b *SiteBuilder) LoadExample(jsonReq string) {
	type LoadExampleMessage struct {
		Name string `json:"name"`
	}

	var request LoadExampleMessage
	err := json.Unmarshal([]byte(jsonReq), &request)
	if err != nil {
		log.Printf("Erron LoadExample json unmarshal: %v", err)
	}

	site, ok := SiteExamplesList[request.Name]
	if ok {
		b.htmlElements = make([]HTMLElement, 0)

		for _, et := range site.HTMLElements {
			b.NewHTMLElement(et)
		}

		b.BlueprintUpdate(site.CodeGraph)
	}

}

func (b *SiteBuilder) BlueprintUpdate(jsonReq string) {
	println(string(jsonReq))
	b.savedGraph = string(jsonReq)

	var request BluprintUpdateMessage
	request.Graph.Init()
	err := json.Unmarshal([]byte(jsonReq), &request)
	if err != nil {
		log.Printf("Erron BlueprintUpdate json unmarshal: %v", err)
	}

	b.Graph = request.Graph
}

func (b *SiteBuilder) GetAllHTMLElements() []HTMLElement {
	return b.htmlElements
}
