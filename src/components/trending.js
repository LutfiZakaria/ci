import React, { Component } from 'react';
import PropTypes from "prop-types";
import './trending.css';

const Trending = props => {
    return (
      <div className="trending">
         <ul class="list-group">
            <li class="list-group-item d-flex justify-content-between align-items-center">
              <span class="badge badge-primary badge-pill">{props.index+1}</span>
              <a href={props.url}>{props.title}</a>
            </li> 
          </ul>
      </div>
    );
}

Trending.propTypes = {
  index:PropTypes.number,
  title: PropTypes.string.isRequired,
  publishedAt:PropTypes.string,
  url:PropTypes.string 
}

export default Trending;
