import React, { useEffect, useState } from "react";
import "./SearchBar.css";
import Home from "../home/Home";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cadenaConsulta: "",
      cosa: "perro"
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ cadenaConsulta: event.target.value });
  }

  handleSubmit(event) {
    console.log(this.state.cadenaConsulta);
    this.setState({ cosa: this.state.cadenaConsulta });
  }

  render() {
    return (
      <div>
        <form id="search-form_3">
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
            className="search_3"
          />
          <input
            onClick={this.handleSubmit}
            type="button"
            className="submit_3"
            value="Search"
          />
        </form>
        <Home consulta={this.state.cosa} />
      </div>
    );
  }
}

export default SearchBar;
