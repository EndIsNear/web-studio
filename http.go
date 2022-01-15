package main

import (
	"log"
	"net/http"
)

type HTTPServer struct {
	socketHander *SocketHander
	siteBuilder  *SiteBuilder
	server       *http.Server
}

func (h *HTTPServer) Init(port string, siteBuilder *SiteBuilder, socketHander *SocketHander) {
	h.siteBuilder = siteBuilder
	h.socketHander = socketHander
	h.createNewServer(port)
}

func (h *HTTPServer) run() {
	log.Fatal(h.server.ListenAndServe())
}

func (h *HTTPServer) serveHomapage(res http.ResponseWriter, req *http.Request, homepage string) {
	if req.Method != http.MethodGet {
		http.Error(res, "Method not allowed", http.StatusMethodNotAllowed)
		return
	}

	if req.RequestURI != "/" {
		http.Error(res, "Not found", http.StatusNotFound)
		return
	}
	// prevent caching
	res.Header().Set("Cache-Control", "no-cache, no-store, must-revalidate") // HTTP 1.1.
	res.Header().Set("Pragma", "no-cache")                                   // HTTP 1.0.
	res.Header().Set("Expires", "0")                                         // Proxies.
	http.ServeFile(res, req, homepage)
}

func (h *HTTPServer) createNewServer(addr string) {
	mux := http.NewServeMux()

	mux.HandleFunc("/", func(res http.ResponseWriter, req *http.Request) {
		h.serveHomapage(res, req, "ui/index.html")
	})
	mux.HandleFunc("/result/index.html", func(res http.ResponseWriter, req *http.Request) {
		h.siteBuilder.ServeHTML(res, req)
	})
	mux.HandleFunc("/result/style.css", func(res http.ResponseWriter, req *http.Request) {
		h.siteBuilder.ServeCSS(res, req)
	})
	mux.HandleFunc("/result/script.js", func(res http.ResponseWriter, req *http.Request) {
		h.siteBuilder.ServeJS(res, req)
	})

	mux.Handle("/styles/", http.StripPrefix("/styles/", http.FileServer(http.Dir("./ui/styles"))))
	mux.Handle("/scripts/", http.StripPrefix("/scripts/", http.FileServer(http.Dir("./ui/scripts"))))
	mux.HandleFunc("/coding.html", func(res http.ResponseWriter, req *http.Request) {
		http.ServeFile(res, req, "ui/coding.html")
	})
	if h.socketHander != nil {
		mux.HandleFunc("/ws", h.socketHander.Listen)
	}

	h.server = &http.Server{Addr: addr, Handler: mux}
}
