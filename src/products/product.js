import React from 'react';

export class Product extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0
    };
  }

  render() {
    return (
      <div className="col-md-4">
        <div className="card text-center">
          <div className="card-header">{this.props.data.id}</div>
          <div className="card-body">
            <h5 className="card-title">{this.props.data.name}</h5>
            <p className="card-text">
              With supporting text below as a natural lead-in to additional content.
            </p>
            <br />
            <div> Quantity : {this.props.data.count}</div>
            <input
              placeholder="enter number of items"
              onChange={event => {
                console.log(event.target.value);
                this.setState({
                  counter: +event.target.value
                });
              }}
            />
            <br />
            <button
              className="btn btn-primary"
              onClick={() => {
                this.props.click(this.props.data, this.state.counter);
              }}
            >
              Buy
            </button>
          </div>
          <div className="card-footer text-muted">Rs : {this.props.data.price}</div>
        </div>
      </div>
    );
  }
}
