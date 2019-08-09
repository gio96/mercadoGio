import React, { useEffect, useState } from "react";
import "./SearchBar.css";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cadenaConsulta: "",
      datoAEnviar: "perro"
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleSubmit() {
    this.props.getProductsList(this.state.cadenaConsulta);
  }

  handleChange(event) {
    this.setState({ cadenaConsulta: event.target.value });
  }

  render() {
    return (
      <div>
        <form id="search-form_3">
          <input
            type="text"
            onChange={this.handleChange}
            value={this.state.value}
            className="search_3"
          />
          <input
            onClick={this.handleSubmit}
            type="button"
            className="submit_3"
            value="Search"
          />
        </form>
      </div>
    );
  }
}

export default SearchBar;
