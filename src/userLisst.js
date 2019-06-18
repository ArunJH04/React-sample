import React from 'react';
import { User } from './users';

// export class UserList extends React.Component {
//   render() {
//     const users = this.props.users;
//     return (
//       <div className="container-fluid">
//         <div className="row">
//           {this.props.users.map(users => {
//             return <User key={users.id} data={users} />;
//           })}
//         </div>
//       </div>
//     );
//   }

// **************functional component********

let clickFunction = function() {
  alert('clicked');
};

export function UserList(props) {
  const users = props.users;
  let UserList = (
    <div className="container-fluid">
      <div className="row">
        {props.users.map(users => {
          return <User key={users.id} data={users} clickedFunc={clickFunction} />;
        })}
      </div>
    </div>
  );
  return UserList;
}
