import React, { Component } from 'react';
import background from '../Assets/bg-main.jpg';
import logo from '../Assets/logo.png';
import down from '../Assets/down.png';
import { Image, InputGroup, FormControl, Button } from 'react-bootstrap';
import MainPageBody from './Components/MainPageBody.js'


import './MainPage.css';

export default class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = { backgroundOpacity: 1 };
    this.handleScroll = this.handleScroll.bind(this);
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }
  handleScroll() {

    var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    //Change the UI of headerBar when scroll
    var opacity = 1 - (Math.max(document.body.scrollTop, document.documentElement.scrollTop) / h);
    this.setState({ backgroundOpacity: opacity })

  }
  render() {

    return (
      <div className="MainPage">
        <div className="Background" style={{
          backgroundImage: "url(" + background + ")",
          backgroundSize: 'cover',

        }}
        >
          <div className="logContainer">
            <div className='register-button'>Đăng kí</div>
            <div className='login-button'>Đăng nhập</div>

          </div>
          <Image className='logo' src={logo} style={{
            opacity: this.state.backgroundOpacity
          }} />
          <div style={{
            width: '100%',
            opacity: this.state.backgroundOpacity,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}>
            <InputGroup>

              <FormControl type="text" />
              <InputGroup.Button>
                <Button>Search</Button>
              </InputGroup.Button>
            </InputGroup>
            <div className='filter-button'>Lọc kết quả tìm kiếm</div>
          </div>
          <div className='down-button' style={{
            opacity: this.state.backgroundOpacity
          }}>
            <div>KHÁM PHÁ NGAY !</div>
            <Image src={down} style={{ width: '130px', height: '55px' }} />
          </div>
        </div>
        <MainPageBody/>
      </div>
    );
  }
}

