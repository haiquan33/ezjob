import React, { Component } from 'react';
import background from '../Assets/bg-main.jpg';
import logo from '../Assets/logo.png';
import down from '../Assets/down.png';
import GGlogin from '../Assets/GGlogin.png';
import FBlogin from '../Assets/FBlogin.png';

import { Image, InputGroup, FormControl, Button } from 'react-bootstrap';
import { Modal as AntModal, Affix,Icon } from 'antd';
import Modal from 'react-modal'



//Custom Component 
import MainPageBody from './Components/MainPageBody.js';
import HeaderbarContainer from './Components/Header/HeaderbarContainer'


//API
import { loginGG,
     } from '../API/loginAPI';


//Redux component
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

import './MainPage.css';


var appElement = document.getElementById('root');

Modal.setAppElement(appElement);


class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = { backgroundOpacity: 1, showLoginModal: false, showSignUpModal: false, showSearchBox: 'visible' };

    this.handleScroll = this.handleScroll.bind(this);
   
    this.loginbyGoogle = this.loginbyGoogle.bind(this);
    this.loginbyFB = this.loginbyFB.bind(this);
  


  }

  loginbyGoogle() {
    this.props.loginGG();
    this.handleCloseLoginModal();
  }

  loginbyFB() {
    this.props.dispatch({ type: 'FBLogin' });
    this.handleCloseLoginModal();
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
         
          <Image className='logo' src={logo} style={{
            opacity: this.state.backgroundOpacity
          }} />
          <div style={{
            width: '100%',

            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}>

            <InputGroup >
              <Affix offsetTop={5} >
                <FormControl type="text" />
                <InputGroup.Button>

                  <Button><Icon type="search" /></Button>

                </InputGroup.Button>
              </Affix>
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
        <HeaderbarContainer/>
      </div>
    );
  }


}

function mapState2Props(state) {
  return { num: state.accountReducer.num, isEmployee: state.accountReducer.isEmployee, isEmployer: state.accountReducer.isEmployer };
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    loginGG,
    
  }, dispatch)

}

export default connect(mapState2Props, mapDispatchToProps)(MainPage);