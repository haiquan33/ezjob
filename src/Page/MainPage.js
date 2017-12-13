import React, { Component } from 'react';
import background from '../Assets/bg-main.jpg';
import './MainPage.css';

class App extends Component {
  render() {
    return (
      <div className="MainPage">
          <div className="Background" style={{
                                      backgroundImage: "url(" + background + ")",
                                      backgroundSize: 'cover',
                                      }} 
          > 
          
          </div>
      </div>
    );
  }
}

export default App;