import React, { Component } from 'react';
import './header.css';
import logo from '../img/logo.png'
import list from '../img/list.png'


class Header extends Component {
  render() {
    return (
      <div className="App">
        <div className="row container-fluid bg-warning  ">
        <nav class="nav">
            <a class="nav-link active" href="#">Active</a>
            <a class="nav-link" href="#">Link</a>
            <a class="nav-link" href="#">Link</a>
            <a class="nav-link disabled" href="#">Disabled</a>
        </nav>
        </div>
      </div>
    );
  }
}

export default Header;
