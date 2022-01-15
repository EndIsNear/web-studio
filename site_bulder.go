package main

import (
	"encoding/json"
	"fmt"
	"log"
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
	// b.outputDir = outputDir

	// b.outputHtml = filepath.Join(b.outputDir, "/index.html")
	// b.outputCSS = filepath.Join(b.outputDir, "/styles/main.css")
	// b.outputJS = filepath.Join(b.outputDir, "/scripts/script.js")
	// b.saveFile = filepath.Join(b.outputDir, "save.tmp")
	// fmt.Println("Output HTML file:", b.outputHtml)
	// fmt.Println("Output CSS file:", b.outputCSS)
	// fmt.Println("Output JS file:", b.outputJS)
	// fmt.Println("Save file::", b.saveFile)
}

func (b *SiteBuilder) UpdateHTML() {
	// file, err := os.Create(b.outputHtml)
	// if err != nil {
	// 	panic(err)
	// }
	// defer file.Close()

	// file.WriteString(`<!DOCTYPE html><html lang="en"><head><script src="scripts/script.js"></script><link rel="stylesheet" href="styles/main.css"><title>Idle game 2k22</title></head><body>`)
	// for _, elem := range b.htmlElements {
	// 	file.WriteString(elem.ToString())
	// }
	// file.WriteString(`</body></html>`)
}

func (b *SiteBuilder) UpdateCSS() {
	// file, err := os.Create(b.outputCSS)
	// if err != nil {
	// 	panic(err)
	// }
	// defer file.Close()

	// file.WriteString(`body{background-color:`)
	// file.WriteString(b.bgColor)
	// file.WriteString(`;}`)
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
	b.UpdateHTML()
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
	b.UpdateHTML()
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
	b.UpdateCSS()
}
