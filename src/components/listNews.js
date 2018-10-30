import React, { Component } from 'react';
import './listNews.css';
import PropTypes from "prop-types";
import headlogo from '../img/headlogo.png'

//Date Format
var dateFormat = require('dateformat');


const ListNews = props => {
  const url_publisher = "https://" + props.publisher
  const datePublish =  dateFormat(props.publishedAt, "dddd, mmmm dS, yyyy, h:MM:ss TT")
  return (
    <div className="ListNews p-2">
      <div className="container list-news">
        <div class="card text-left m-2">
          <div class="card-header text-left">
            <img src={headlogo} alt=""></img>
            <a href={url_publisher}><strong className="d-inline-flex p-2">{props.publisher}</strong></a>
            <p className="d-flex p-2">{datePublish}</p>
          </div>
          <div class="card-body">
            <img src={props.img} alt="" width="100%"></img>
            <a href={props.url}><h3 class="card-title">{props.title}</h3></a>
            <p class="card-text">{props.content}</p>
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

ListNews.propTypes = {
  publisher:PropTypes.string,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  img:PropTypes.string,
  publishedAt:PropTypes.string,
  url:PropTypes.string 
}

export default ListNews;
