package main

import (
	"encoding/json"
	"net/http"
)

func computeHandler(w http.ResponseWriter, r *http.Request) {
	response := map[string]int{"result": 42}
	json.NewEncoder(w).Encode(response)
}

func main() {
	http.HandleFunc("/compute", computeHandler)
	http.ListenAndServe(":3000", nil)
}
