package main

import (
	"encoding/json"
	"log"
	"net/http"

	"github.com/gorilla/websocket"
)

type SocketHander struct {
	siteBuilder *SiteBuilder
	upgrader    websocket.Upgrader
	conn        *websocket.Conn
}

func (s *SocketHander) Init(siteBuilder *SiteBuilder) {
	s.siteBuilder = siteBuilder
	s.upgrader = websocket.Upgrader{}
	s.conn = nil
}

func (s *SocketHander) Listen(w http.ResponseWriter, r *http.Request) {
	// Upgrade our raw HTTP connection to a websocket based one
	var err error
	s.conn, err = s.upgrader.Upgrade(w, r, nil)
	if err != nil {
		log.Print("Error during connection upgradation:", err)
		return
	}
	defer s.conn.Close()

	s.SendHTMLElements()
	// The event loop
	for {
		messageType, message, err := s.conn.ReadMessage()
		if err != nil {
			log.Println("Error during message reading:", err)
			break
		}

		if messageType == websocket.TextMessage {
			s.HandleReadTextMessage(message)
		}
	}
}

func (s *SocketHander) HandleReadTextMessage(message []byte) {
	var result map[string]interface{}
	json.Unmarshal([]byte(message), &result)

	val, ok := result["messageType"]
	if !ok {
		log.Println("Error while parsing message: can't find propery messageType")
	}

	switch val {
	case "newHTMLElement":
		s.siteBuilder.NewHTMLElement(string(message))
		s.SendHTMLElements()
	case "deleteHTMLElement":
		s.siteBuilder.DeleteHTMLElement(string(message))
		s.SendHTMLElements()
	case "loadExample":
		s.siteBuilder.LoadExample(string(message))
		s.SendHTMLElements()
	case "updateBluprint":
		s.siteBuilder.BlueprintUpdate(string(message))
	case "requestGraphSave":
		s.SendSavedCodeGraphJSON()
	case "requestExamples":
		s.SendAvailableExamplesNames()
	default:
		log.Printf("The given %s messageType can't be found", val)
	}
}

func (s *SocketHander) SendHTMLElements() {
	type HTMLElementsMessage struct {
		Type     string        `json:"messageType"`
		Elements []HTMLElement `json:"elements"`
	}
	message := HTMLElementsMessage{
		Elements: s.siteBuilder.GetAllHTMLElements(),
		Type:     "updateHTMLElements",
	}

	json, err := json.Marshal(message)
	if err != nil {
		log.Printf("While marshling all html elements: %v", err)
	}

	err = s.conn.WriteMessage(websocket.TextMessage, json)
	if err != nil {
		log.Println("Error during message writing:", err)
	}
}

func (s *SocketHander) SendSavedCodeGraphJSON() {
	err := s.conn.WriteMessage(websocket.TextMessage, []byte(s.siteBuilder.savedGraph))
	if err != nil {
		log.Println("Error during sending saved graph:", err)
	}
}

func (s *SocketHander) SendAvailableExamplesNames() {
	type ExamplesMessage struct {
		Type     string   `json:"messageType"`
		Examples []string `json:"examples"`
	}

	//build the list
	keys := make([]string, len(SiteExamplesList))
	i := 0
	for k := range SiteExamplesList {
		keys[i] = k
		i++
	}

	message := ExamplesMessage{
		Type:     "examplesList",
		Examples: keys,
	}

	json, err := json.Marshal(message)
	if err != nil {
		log.Printf("While marshling all html elements: %v", err)
	}

	err = s.conn.WriteMessage(websocket.TextMessage, json)
	if err != nil {
		log.Println("Error during sending examples list:", err)
	}
}
