import React, { Component } from 'react';
import './menu.css';
import logo from '../img/logo.png'
import list from '../img/list.png'

class Menu extends Component {
  render() {
    return (
      <div className="App">
        <div className="row">
            <div class = "topnav container">
                <a href="#logo"><img src= {logo} alt="" width="100%"></img></a>
                <input type="text" name="search" value="Search ....."></input>
                <a href="#sign in"><h3>Log in / Sign Up</h3></a>
                <a href="#list" ><img src= {list} alt=""></img></a>
            </div>
        </div>
        <div className="row">
            <div class = "container menu">
                <a href="#hot">Indonesia vs Jepang</a>
                <a href="#video">Video</a>
                <a href="#humor">Humor</a>
                <a href="#News">News</a>
                <a href="#sepak bola">Sepak Bola</a>
                <a href="#ekonomi">ekonomi</a>
                <a href="#politik">Politik</a>
                <a href="#Hiburan">Hiburan</a>
                <a href="#more">More </a>
            </div>
        </div>
      </div>
    );
  }
}

export default Menu;