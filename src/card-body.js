import React from 'react';

export class CardBody extends React.Component {
  render() {
    const user = this.props.user;
    return (
      <div className="card-body">
        <h5 className="card-title">Name : {user.name}</h5>
        <p className="card-text">
          Email : {user.email} <br />
          Age : {user.age}
        </p>
        {/* <a
          href="#"
          className="btn btn-primary"
          onClick={function() {
            console.log('button clicked');
          }}
        >
          Details
        </a> */}
      </div>
    );
  }
}
