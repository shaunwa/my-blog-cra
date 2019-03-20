import React, { Component } from 'react';
import HomePage from './pages/HomePage';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route path="/" exact component={HomePage} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
