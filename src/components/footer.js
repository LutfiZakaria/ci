import React, { Component } from 'react';
import './footer.css';
import facebook from '../img/facebook.png';
import gmail from '../img/gmail.png';
import twitter from '../img/twitter.png';
import whatsapp from '../img/whatsapp.png'
import instagram from '../img/instagram.png'
import map from '../img/map.png'

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div class="container footer bg-light">
            <div class="col-md-4">
                <h3 class="text-center">Follow us</h3>
                <div class="col-md-4 footer-pic">
                    <img src={facebook} alt="facebook"></img>
                </div>
                <div class="col-md-4 footer-pic">
                    <img src={instagram} alt="instagram"></img>
                </div>
                <div class="col-md-4 footer-pic"   >
                    <img src={twitter} alt="twitter"></img>
                </div>
            </div>
            <div class="col-md-8 text-left" >
                    <h3 class="text-center">Contact us</h3>
                    <div class="col-md-4 text-center" >
                        <img src={map} alt="map"></img>
                        <p>
                        Jalan Pratu Subari no 214 RT 09 / RW 03
                        Sedayu - Turen - Malang
                        </p>
                    </div>
                    <div class="col-md-4">
                        <div class="col-md-4 text-center">
                            <img src={gmail} alt="email"></img><br></br>
                            <img src={whatsapp} alt="whatsapp"></img>
                        </div>
                        <div class="col-md-8">
                            <span ><strong>Email : zakaria@alphatech.id</strong></span>
                            <p>Whatsapp : 0899-1234-5678</p>
                        </div>
                    </div>
                    <div class="col-md-4"   >
                        Info Lain
                        <p>Syarat dan Ketentuan</p>
                        <p>Kebijakan Privasi</p>
                        <p>FAQ</p>
                    </div>
            </div>
        </div>
      </div>
    );
  }
}

export default Footer
