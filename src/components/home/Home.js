import React, { useEffect, useState } from "react";
import "./Home.css";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";

class CardHeader extends React.Component {
  render() {
    const { image } = this.props;
    var style = {
      backgroundImage: "url(" + image + ")"
    };
    return (
      <header style={style} id={image} className="card-header">
        <h4 className="card-header--title">News</h4>
      </header>
    );
  }
}

class Button extends React.Component {
  render() {
    return (
      <button className="button button-primary">
        <i className="fa fa-chevron-right" /> Find out more
      </button>
    );
  }
}

class CardBody extends React.Component {
  render() {
    return (
      <div className="card-body">
        <h2>${this.props.title}</h2>
        <p className="body-content">{this.props.text}</p>
        <Button />
      </div>
    );
  }
}

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listProducts: [],
      valorConsulta: ""
    };
    this.getProductsList = this.getProductsList.bind(this);
    this.getProductsList();
  }

  getProductsList(event) {
    axios
      .get(
        `https://api.mercadolibre.com/sites/MCO/search?q=${this.props.consulta}`
      )
      .then(res => {
        this.setState({ listProducts: res.data.results });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            {this.state.listProducts.map(products => (
              <div className="col-md-4">
                <article className="card">
                  <CardHeader image={products.thumbnail} />
                  <CardBody
                    key={products.id}
                    title={products.price.toLocaleString()}
                    text={products.title}
                  />
                </article>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
