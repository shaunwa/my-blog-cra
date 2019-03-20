import React, { Component } from 'react';
import NavBar from './NavBar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ArticlePage from './pages/ArticlePage';
import ArticlesListPage from './pages/ArticlesListPage';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Route path="/" exact component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/article/:name" component={ArticlePage} />
          <Route path="/articles-list" component={ArticlesListPage} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
