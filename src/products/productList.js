import React from 'react';
import { Product } from './product';

export class ProductList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedProducts: [],
      products: [
        { id: 1, name: 'vivo', price: 12000, count: 0 },
        { id: 2, name: 'samsung', price: 20000, count: 0 },
        { id: 3, name: 'i-phone', price: 40000, count: 0 }
      ]
    };
    this.handleSubmit = this.handleSubmit.bind(this);
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
