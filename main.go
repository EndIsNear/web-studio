package main

import (
	"log"
	"net/http"
	"os"
)

func serveHomapage(res http.ResponseWriter, req *http.Request, homepage string) {
	if req.Method != http.MethodGet {
		http.Error(res, "Method not allowed", http.StatusMethodNotAllowed)
		return
	}

	if req.RequestURI != "/" {
		http.Error(res, "Not found", http.StatusNotFound)
		return
	}
	http.ServeFile(res, req, homepage)
}

func createNewServer(addr, dir string) http.Server {
	mux := http.NewServeMux()

	mux.HandleFunc("/", func(res http.ResponseWriter, req *http.Request) {
		serveHomapage(res, req, dir+"/index.html")
	})
	mux.Handle("/styles/", http.StripPrefix("/styles/", http.FileServer(http.Dir("./"+dir+"/styles"))))
	mux.Handle("/scripts/", http.StripPrefix("/scripts/", http.FileServer(http.Dir("./"+dir+"/scripts"))))

	return http.Server{Addr: addr, Handler: mux}
}

func main() {
	port := os.Getenv("PORT")

	if port == "" {
		port = "8080"
		// log.Fatal("$PORT must be set")
	}
	server := createNewServer(":"+port, "ui")
	log.Fatal(server.ListenAndServe())
}
