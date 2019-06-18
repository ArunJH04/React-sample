import React from 'react';

export class CardFooter extends React.Component {
  render() {
    return (
      <a
        href="#"
        className="btn btn-primary"
        onClick={() => {
          this.props.clicked;
        }}
      >
        Details
      </a>
    );
  }
}
