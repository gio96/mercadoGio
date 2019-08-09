import React from "react";
import "./App.css";
import SearchBar from "../src/components/search/SearchBar";
import Home from "../src/components/home/Home";

const handleSubmitPruea = event => {
  console.log(event);
};
function App() {
  return (
    <div className="App">
      <link
        href="https://fonts.googleapis.com/css?family=Lobster&display=swap"
        rel="stylesheet"
      />
      <h1>Giovanny MercadoLibre</h1>
      <SearchBar handleSubmit={handleSubmitPruea} />
      <Home consulta="{}" />
    </div>
  );
}

export default App;
