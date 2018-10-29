import React, { Component } from 'react';
import './listNews.css';
import headlogo from '../img/headlogo.png'
import image1 from '../img/image1.jpg'
import image2 from '../img/image2.jpg'

class ListNews extends Component {
  render() {
    return (
      <div className="ListNews p-2">
        <div className="container list-news">
          <div class="card text-left m-2  ">
            <div class="card-header text-left">
              <img src={headlogo} alt=""></img>
              <strong className="d-inline-flex p-2">kumparanNEWS</strong>
              <p className="d-flex p-2">Senin, 29 Oktober 2018 - 15:20</p>
            </div>
            <div class="card-body">
              <img src={image1} alt="" width="100%"></img>
              <h3 class="card-title">6 Kantong Jenazah Korban Lion Air Tiba di Pelabuhan JICT Tanjung Priok</h3>
              <p class="card-text">Keenam kantong jenazah langsung dibawa ke RS Polri Kramat Jati</p>
              <a href="#" class="btn btn-outline-primary">News</a><hr/>
              <div className="row text-center">
                <div className="col-4">
                  <a href="#sukai"> Sukai </a>
                </div>
                <div className="col-4">
                  <a href="">Komentar</a>
                </div>
                <div className="col-4">
                  <a href=""> Bagikan</a>
                </div>
              </div>
            </div>
          </div>
          <div class="card text-left m-2">
            <div class="card-header text-left">
              <img src={headlogo} alt=""></img>
              <strong className="d-inline-flex p-2">kumparanNEWS</strong>
              <p className="d-flex p-2">Senin, 29 Oktober 2018 - 16:49</p>
            </div>
            <div class="card-body">
              <img src={image2} alt="" width="100%"></img>
              <h3 class="card-title">Pintu Pesawat Mengambang di lokasi Jatuhnya Lion Air</h3>
              <p class="card-text">Selain pintu pesawat, berbagai barang penumpang Lion Air yang jatuh masih berserakan di laut</p>
              <a href="#" class="btn btn-outline-primary">News</a><hr/>
              <div className="row text-center">
                <div className="col-4">
                  <a href="#sukai"> Sukai </a>
                </div>
                <div className="col-4">
                  <a href="">Komentar</a>
                </div>
                <div className="col-4">
                  <a href=""> Bagikan</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ListNews;
