import React, { Component } from 'react';
import './menu.css';
import logo from '../img/logo.png'
import list from '../img/list.png'

class Menu extends Component {
  render() {
    return (
      <div className="App">
        <div className="row">
            <div class = "container-fluid topmenu">
                <div className="col-md-3">
                  <a href="#home"><h1>ALPHAKABAR</h1></a>
                </div>
                <div className=" search col-md-5 p-3 text-left align-middle">
                  <input type="text" name="search" placeholder="Search"></input>
                  <button type="button" class="btn btn-dark">
                  Search
                  </button>
                </div>
                <div className=" item col-md-4 ">
                  <a className = "d-inline-flex align-middle mt-6" href="#sign in"><h4>Log in / Sign Up</h4></a>
                  <a className = "d-inline-flex align-middle ml-5" href="#list" ><img src= {list} alt=""></img></a>
                </div>
            </div>
        </div>
        <div className="row">
            <div class = "container-fluid menu">
                <a href="#hot">Indonesia vs Jepang</a>
                <a href="#video">Video</a>
                <a href="#humor">Humor</a>
                <a href="#News">News</a>
                <a href="#sepak bola">Sepak Bola</a>
                <a href="#ekonomi">Ekonomi</a>
                <a href="#politik">Politik</a>
                <a href="#Hiburan">Hiburan</a>
                <div class="dropdown">
                  <button class="btn btn-link dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    More
                  </button>
                  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a class="dropdown-item" href="#">Olahraga</a>
                    <a class="dropdown-item" href="#">Teknologi</a>
                    <a class="dropdown-item" href="#">Sosial</a>
                  </div>
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default Menu;