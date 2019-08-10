import React, { useEffect, useState } from "react";
import "./Home.css";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import SearchBar from "../search/SearchBar";

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
        <p className="body-content">Vendedor: {this.props.seller}</p>
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
      listSeller: []
    };
  }

  getProductsList = dato => {
    var listaEnvio = [];
    axios
      .get(`https://api.mercadolibre.com/sites/MCO/search?q=${dato}`)
      .then(res => {
        this.setState({ listProducts: res.data.results });
      })
      .then(buscar => {
        this.state.listProducts.map(product => {
          axios
            .get(`https://api.mercadolibre.com/users/${product.seller.id}`)
            .then(seller => {
              listaEnvio.push(seller.data.nickname);
            });
        });
      })
      .then(console.log(listaEnvio))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <SearchBar getProductsList={this.getProductsList} />
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
                    //seller={products.seller.id}
                    seller={this.state.listSeller}
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
