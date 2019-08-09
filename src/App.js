import React from "react";
import "./App.css";
import SearchBar from "../src/components/search/SearchBar";

function App() {
  return (
    <div className="App">
      <link
        href="https://fonts.googleapis.com/css?family=Lobster&display=swap"
        rel="stylesheet"
      />
      <h1>Giovanny MercadoLibre</h1>
      <SearchBar />
    </div>
  );
}

export default App;
