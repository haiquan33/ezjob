import React, { Component } from 'react';
import background from '../Assets/bg-main.jpg';
import logo from '../Assets/logo.png';
import down from '../Assets/down.png';
import GGlogin from '../Assets/GGlogin.png';
import FBlogin from '../Assets/FBlogin.png';
import { Image, InputGroup, FormControl, Button } from 'react-bootstrap';
import MainPageBody from './Components/MainPageBody.js'
import Modal from 'react-modal'

import './MainPage.css';


var appElement = document.getElementById('root');

Modal.setAppElement(appElement);
export default class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = { backgroundOpacity: 1, showLoginModal: false, showSearchBox: 'visible' };

    this.handleScroll = this.handleScroll.bind(this);
    this.handleOpenLoginModal = this.handleOpenLoginModal.bind(this);
    this.handleCloseLoginModal = this.handleCloseLoginModal.bind(this);
  }

  handleOpenLoginModal() {
    this.setState({ showLoginModal: true, showSearchBox: 'hidden' });
  }

  handleCloseLoginModal() {
    this.setState({ showLoginModal: false, showSearchBox: 'visible' });
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
            <div className='login-button' onClick={this.handleOpenLoginModal}>Đăng nhập</div>

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
            <InputGroup style={{ visibility: this.state.showSearchBox }}>

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
        <MainPageBody />
        <Modal
          isOpen={this.state.showLoginModal}
          contentLabel="Đăng nhập"
          onRequestClose={this.handleCloseLoginModal}
          className="LoginModal"
          style={{
            
            content : {
              position: 'absolute',
              left: '50%',
              top:'50%',
              transform :'translate(-50%,-50%)',
              width:'400px',
              height:'260px',
              border                     : '1px solid #ccc',
              background                 : '#fff',
              overflow                   : 'auto',
              WebkitOverflowScrolling    : 'touch',
              borderRadius               : '4px',
              outline                    : 'none',
            
          
            }
          }}
        >
          <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
            <div className="commonText"> Bạn có thể </div>
            <Image className="socialLogin" src={GGlogin} />
            <div  className="commonText"> Hoặc </div>
            <Image className="socialLogin" src={FBlogin} />
          </div>
        </Modal>
      </div>
    );
  }
}

