import React, { Component } from 'react';
import './App.css';
import Menu from './components/menu.js';
import ListNews from './components/listNews';
import Trending from './components/trending';
import Footer from './components/footer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu />
        <div className="container border">
          <div className="col-md-4">
          <Trending />
          </div>
          <div className="col-md-8">
          <ListNews />
          </div>
        </div>
        <footer>
        <Footer />
        </footer>
      </div>
    );
  }
}

export default App;
