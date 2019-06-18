import React from 'react';

export class CardHeader extends React.Component {
  render() {
    const user = this.props.user;
    return (
      <div className="card" style={{ width: 18 + 'rem' }}>
        <img src={user.imgUrl} style={{ height: 15 + 'rem' }} className="card-img-top" alt="..." />
      </div>
    );
  }
}
