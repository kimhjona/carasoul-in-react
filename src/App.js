import React, { Component } from 'react';
import Carousel from './Carousel.js';
import urls from './urls.json';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Carousel 
          urls={urls.urls} 
          millisecondsToUpdate={5000}
        />
      </div>
    );
  }
}

export default App;
