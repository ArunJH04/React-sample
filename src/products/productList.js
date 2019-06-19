import React from 'react';
import { Product } from './product';
import axios from 'axios';

export class ProductList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedProducts: [],
      products: []
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    let promise = axios.get('https://my-json-server.typicode.com/ArunJH04/ecommerce/products');
    promise.then(response => {
      console.log(response.data);
      this.setState({
        selectedProducts: [],
        products: response.data
      });
    });
  }

  handleSubmit(product, count) {
    product.count = count;
    console.log(product);
    this.setState({
      products: this.state.products.filter(sp => sp.id !== product.id).concat([product]),
      selectedProducts: this.state.selectedProducts.concat([product]),
      products: this.state.products.filter(selectedProduct => product.id !== selectedProduct.id)
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          {this.state.selectedProducts.map(selectedProduct => (
            <Product key={selectedProduct.id} data={selectedProduct} click={this.handleSubmit} />
          ))}
        </div>

        <div className="row">
          {this.state.products.map(product => (
            <Product key={product.id} data={product} click={this.handleSubmit} />
          ))}
        </div>
      </div>
    );
  }
}
