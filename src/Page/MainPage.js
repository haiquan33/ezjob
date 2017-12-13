import React, { Component } from 'react';
import background from '../Assets/bg-main.jpg';
import logo from '../Assets/logo.png';
import down from '../Assets/down.png';
import { Image, InputGroup, FormControl,Button } from 'react-bootstrap';

import UrgentList from './Components/UrgentList.js';

import './MainPage.css';

export default class MainPage extends Component {
  render() {
    return (
      <div className="MainPage">
        <div className="Background" style={{
          backgroundImage: "url(" + background + ")",
          backgroundSize: 'cover',
        }}
        >
           <div className="logContainer">
              <div className='register-button'>Register</div>
              <div className='login-button'>Login</div>

          </div>
           <Image className='logo' src={logo} />
            <InputGroup>
              
              <FormControl type="text" />
              <InputGroup.Button>
                <Button>Search</Button>
              </InputGroup.Button>
            </InputGroup>
            <div className='filter-button'>Search result filter</div>
            <div className='down-button'>
                      <div>Explore more</div>
                       <Image  src={down} style={{width:'80px',height:'60px'}}/>   
            </div>
        </div>
        <UrgentList/>
      </div>
    );
  }
}

