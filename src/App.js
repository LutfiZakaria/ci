import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Menu from './components/menu.js';
import ListNews from './components/listNews';
import Trending from './components/trending';
import Footer from './components/footer';
import cmsoon from './img/cmsoon.jpg'
// import Header from './components/header'
// https://newsapi.org/v2/everything?q=bitcoin&apiKey=85a012cbed284cc1afbdca12f1925df7
//NEWS API
const apiKey = "85a012cbed284cc1afbdca12f1925df7";
const baseUrl = "https://newsapi.org/v2/";
const urlHeadline = baseUrl + "top-headlines?" + "country=id&" + "apiKey="+ apiKey;
const urlNews = baseUrl + "top-headlines?" + "country=id&" + "apiKey="+ apiKey;
class App extends Component {
  state = {
    listNews: [],
    listTrending:[],
    username: "",
    isLogin:false
  };
  componentDidMount = () =>{
    const self = this;
    axios
      .get(urlHeadline)
      .then(function(response){
        self.setState({listTrending: response.data.articles})
        //Handling Succes
        console.log(response.data)
      })
      .catch(function(error){
        //handling error
        console.log(error)
      });
      axios
      .get(urlNews)
      .then(function(response){
        self.setState({listNews: response.data.articles})
        //Handling Succes
        console.log(response.data)
      })
      .catch(function(error){
        //handling error
        console.log(error)
      })
    
  }
  render() {
    const {listNews,username,isLogin} = this.state;
    const {listTrending} = this.state;
    return (
      <div className="App">
        {/* <Header/> */}

        <Menu />
        <div className="container border">
          <div className="col-md-4">
            <div className="trending-title">
              <div class="d-inline-flex p-2 bd-highlight">
                <strong>Trending Stories</strong>
              </div>
              <div class="d-inline-flex flex-row-reverse bd-highlight">
                <a href="#views_all">views all</a>
              </div>
            </div>
            {listTrending.slice(0,5).map((item,key )=> {
              return <Trending key={key} title={item.title} url={item.url} index={key}/>
            })}
          </div>
          <div className="col-md-8">
          {listNews.map((item, key) => {
          const src_img = item.urlToImage === null ? cmsoon : item.urlToImage;
          const content = item.urlToImage !== null ? item.content : cmsoon;
          return <ListNews key={key} publisher = {item.source.name} title={item.title} img={src_img} content={content} publishedAt={item.publishedAt} url={item.url}/>;
        })}
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
