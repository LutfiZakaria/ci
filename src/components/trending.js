import React, { Component } from 'react';
import './trending.css';

class Trending extends Component {
  render() {
    return (
      <div className="trending">
        <div className="trending-title">
          <div class="d-inline-flex p-2 bd-highlight">
          <strong>Trending Stories</strong>
          </div>
          <div class="d-inline-flex flex-row-reverse bd-highlight">
            <a href="#views_all">views all</a>
          </div>
        </div>
         <ul class="list-group">
            <li class="list-group-item d-flex justify-content-between align-items-center">
              <span class="badge badge-primary badge-pill">1</span>
              Pengibaran Bendera HTI terjadi di Kaltim
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
              <span class="badge badge-primary badge-pill">2</span>
              Zulhas: Negara kita Beringas kalau mau gabung prabowo
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
              <span class="badge badge-primary badge-pill">3</span>
              KPK cegah wakil ketua DPR Taufik Kurniawan ke luar negeri
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
              <span class="badge badge-primary badge-pill">4</span>
              Jokowi Kecam serangan roket Israel ke RSI Indonesia di Gaza
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
              <span class="badge badge-primary badge-pill">5</span>
              Bos Berlian India hadiahi 600 karyawannya Mobil baru 
            </li> 
          </ul>
      </div>
    );
  }
}

export default Trending;
