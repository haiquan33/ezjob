import React, { Component } from 'react';
import background from '../Assets/bg-main.jpg';
import logo from '../Assets/logo.png';
import down from '../Assets/down.png';
import GGlogin from '../Assets/GGlogin.png';
import FBlogin from '../Assets/FBlogin.png';

import { Image, InputGroup, FormControl, Button } from 'react-bootstrap';
import { Modal as AntModal } from 'antd';
import Modal from 'react-modal'

//Custom Component 
import MainPageBody from './Components/MainPageBody.js';
import HeaderBarEmployee from './Components/headerBarEmployee.js'
import WrappedSignUpForm from './Components/SignUpForm';
import  WrappedLogInForm from './Components/LogInForm';

//API
import { loginGG, SignUp_manually,SignIn_manually } from '../API/loginAPI';


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
    this.handleOpenLoginModal = this.handleOpenLoginModal.bind(this);
    this.handleCloseLoginModal = this.handleCloseLoginModal.bind(this);
    this.loginbyGoogle = this.loginbyGoogle.bind(this);
    this.loginbyFB = this.loginbyFB.bind(this);
    this.handleCloseSignUpModal=this.handleCloseSignUpModal.bind(this);
    this.handleOpenSignUpModal=this.handleOpenSignUpModal.bind(this);


  }

  loginbyGoogle() {
    this.props.loginGG();
    this.handleCloseLoginModal();
  }

  loginbyFB() {
    this.props.dispatch({ type: 'FBLogin' });
    this.handleCloseLoginModal();
  }
  handleOpenLoginModal() {
    this.setState({ showLoginModal: true });
  }

  handleCloseLoginModal() {
    this.setState({ showLoginModal: false });
  }

  handleOpenSignUpModal(){
    this.setState({showSignUpModal:true});
  }
  handleCloseSignUpModal(){
    this.setState({showSignUpModal:false});
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);

    let userInfo = {
      email: "nvdaua@gmail.com",
      password: '123456',
    }
    SignIn_manually(userInfo);



  }
  handleScroll() {

    var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    //Change the UI of headerBar when scroll
    var opacity = 1 - (Math.max(document.body.scrollTop, document.documentElement.scrollTop) / h);
    this.setState({ backgroundOpacity: opacity })

  }
  render() {
    var headerBar;


    if (!this.props.isEmployee && !this.props.isEmployer) {
      headerBar = <div className="logContainer">
        <div className='register-button' onClick={()=>{this.handleOpenSignUpModal()}}>Đăng kí</div>
        <div className='login-button' onClick={this.handleOpenLoginModal}>Đăng nhập</div>
      </div>;
    } else {
      if (this.props.isEmployee) {
        headerBar = <HeaderBarEmployee />
      } else {
        headerBar = <HeaderBarEmployee />;
      }

    }




    return (
      <div className="MainPage">

        <div className="Background" style={{
          backgroundImage: "url(" + background + ")",
          backgroundSize: 'cover',

        }}
        >
          {headerBar}
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
        <AntModal
          visible={this.state.showLoginModal}
          footer={null}
          onCancel={()=>{this.handleCloseLoginModal()}}
          bodyStyle={{width:"100%"}}
          closable={false}
        >
          <WrappedLogInForm/>
        </AntModal>
        <AntModal visible={this.state.showSignUpModal} footer={null} closable={false} onCancel={()=>{this.handleCloseSignUpModal()}}>{<WrappedSignUpForm />}</AntModal>

      </div>
    );
  }
}

function mapState2Props(state) {
  return { num: state.accountReducer.num, isEmployee: state.accountReducer.isEmployee, isEmployer: state.accountReducer.isEmployer };
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    loginGG
  }, dispatch)

}

export default connect(mapState2Props, mapDispatchToProps)(MainPage);