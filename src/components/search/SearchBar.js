import React, { useEffect, useState } from "react";
import "./SearchBar.css";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cadenaConsulta: "" };

    this.handleChange = this.handleChange.bind(this);
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
            value={this.state.value}
            onChange={this.handleChange}
            className="search_3"
          />
          <input
            onClick={this.props.handleSubmit(this.state.cadenaConsulta)}
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
