import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MainPage from './Page/MainPage.js';
import UserCV from './Page/UserCV.js';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.getJobList = this.getJobList.bind(this);
  }

  componentWillMount() {
    this.getJobList();

  }
  getJobList() {

    axios.get('https://ezjob-server.herokuapp.com/api/jobs', { 'mode': 'no-cors' })
      .then(
      function (response) {
        console.log(response);
        if (response.code !== 200) {

          return;
        }

        // Examine the text in the response  
        response.json().then(function (data) {
          if (data.code !== 0) {
            console.log('Lỗi lấy dữ liệu ' +
              data.message);
          }


        });
      }
      )
      .catch(function (err) {
        console.log('Fetch Error :-S', err);
      });
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
