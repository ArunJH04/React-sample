import React from 'react';
import './Main.css';
import { Sidebar } from './sideBar';
import { Footer } from './Footer';
import { Header } from './Header';

export class Main extends React.Component {
  render() {
    return (
      <div className="main-component">
        <Header />
        <Sidebar />
        main contents !!
        <Footer />
      </div>
    );
  }
}
