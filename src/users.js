import React from 'react';
import { CardHeader } from './card-header';
import { CardBody } from './card-body';
import { CardFooter } from './card-footer';

export class User extends React.Component {
  render() {
    const user = this.props.data;
    return (
      <div className="col-3">
        <CardHeader user={user} />
        <CardBody user={user} />
        <CardFooter clicked={this.props.clickedFunc} />
      </div>
    );
  }
}
