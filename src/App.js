import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MainPage from './Page/MainPage.js';
import UserCV from './Page/UserCV.js';
import axios from 'axios';



import { Route } from 'react-router'

class App extends Component {
  constructor(props) {
    super(props);
    this.getJobList = this.getJobList.bind(this);
  }

  componentWillMount() {
    this.getJobList();

  }
  getJobList() {

  
  }
  render() {
    return (
      <div className="App">

            
            <Route exact path="/" component={MainPage} />
            <Route exact path="/home" component={MainPage} />
            <Route exact path="/userCV" component={UserCV} />
          
       
      </div>
    );
  }
}

export default App;
