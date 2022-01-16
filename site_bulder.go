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
}

func (b *SiteBuilder) Init() {
}

func (b *SiteBuilder) ServeHTML(res http.ResponseWriter, req *http.Request) {
	header := `<!DOCTYPE html><html lang="en"><head><link rel="stylesheet" href="style.css"><script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script><title>Awesome website 2k22</title></head><body><div id="app">`
	body := `<h1>You can add items here! Can you?!</h1>`
	footer := `</div><script src="script.js"></script></body></html>`

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
	header := `*{box-sizing:border-box;margin:0;padding:0;font-family:Arial,Helvetica,sans-serif}#app{width:100vh;height:100vh;margin:auto;text-align:center;display:flex;flex-direction:column;justify-content:center;align-items:center}h1{margin:1rem;font-weight:400}button{margin:.1rem;cursor:pointer;display:inline-block;background:#333;color:#fff;font-size:18px;border:0;padding:1rem 1.5rem}button:hover{transform:scale(.98)}button:active{transform:scale(1)}`
	body := ``
	footer := ``

	fmt.Fprintf(res, "%s%s%s", header, body, footer)
}

func (b *SiteBuilder) ServeJS(res http.ResponseWriter, req *http.Request) {
	// var app=new Vue({el:"#app",data:{timer:0},created:function(){var e=this;setInterval(function(){e.timer++},1e3)},methods:{}});
	header := `var app=new Vue({el:"#app",data:{timer:0},created:function(){`
	callback := `var e=this;setInterval(function(){e.timer++},1e3)`
	mid := `},methods:{`
	methods := ``
	footer := `}});`

	fmt.Fprintf(res, "%s%s%s%s%s", header, callback, mid, methods, footer)
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
}
