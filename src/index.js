import React from 'react';
import ReactDOM from 'react-dom';
import { ProductList } from './products/productList';
import 'bootstrap/dist/css/bootstrap.min.css';

const users = [
  {
    id: 1,
    name: 'arun',
    email: 'arun.cs04@gmail.com',
    age: 28,
    imgUrl:
      'https://i0.wp.com/profilepicturess.com/wp-content/uploads/2017/03/23.png?resize=752%2C602'
  },
  {
    id: 2,
    name: 'raj',
    email: 'raj.cs04@gmail.com',
    age: 27,
    imgUrl:
      'https://www.whatsappprofiledpimages.com/wp-content/uploads/2018/07/cute-boy-profile-images81-286x300.jpg'
  },
  {
    id: 3,
    name: 'anil',
    email: 'anil.cs04@gmail.com',
    age: 26,
    imgUrl:
      'https://static1.squarespace.com/static/56c346b607eaa09d9189a870/t/58a5e48a5149bf6f114186c9/1487267452180/FLAUNT_ZAC_EFRON_SHOT_09_018.jpg?format=1000w'
  },
  {
    id: 4,
    name: 'krishna',
    email: 'krishna.cs04@gmail.com',
    age: 29,
    imgUrl:
      'https://profilepicturesdp.com/wp-content/uploads/2018/06/handsome-dp-for-whatsapp-11.jpg'
  }
];

ReactDOM.render(
  <div>
    <ProductList />
  </div>,
  document.getElementById('root')
);
