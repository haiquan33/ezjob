import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MainPage from './Page/MainPage/MainPage.js';
import DashboardContainer from './Page/Dashboard/DashboardContainer';
import UserCV from './Page/UserCV.js';
import Loader from './Page/Components/Loader/Loader'


//Other lib
import { withCookies, Cookies } from 'react-cookie';
import { instanceOf } from 'prop-types';





import { withRouter,Route } from 'react-router-dom'

//Redux component
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';


//API
import { get_userInfoAterLogin } from './Services/API/loginAPI';





class App extends Component {

  static propTypes = {
    cookies: instanceOf(Cookies).isRequired
  };

  constructor(props) {
    super(props);

  }

  componentWillMount() {
    //  get user cookie
    const { cookies } = this.props;
    let xAuthToken = cookies.get('xAuthToken') || null;
    console.log("get cookie", xAuthToken);
    if (xAuthToken != null) this.props.get_userInfoAterLogin(xAuthToken);

  }


  render() {

    return (
      <div className="App">

        <Loader Loading={this.props.isGettingUserInfo}/>

        <Route exact path="/" component={MainPage} />
        <Route  path="/dashboard" component={DashboardContainer} />
        
      
        <Route exact path="/userCV" component={UserCV} />


      </div>
    );
  }
}

function mapState2Props(state) {
  return {
    userInfo: state.accountReducer.userInfo,
    isLoggedIn: state.accountReducer.isLoggedIn,
    xAuthToken: state.accountReducer.xAuthToken,
    isGettingUserInfo:state.accountReducer.isGettingUserInfo
  };
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    get_userInfoAterLogin

  }, dispatch)

}

export default withRouter(connect(mapState2Props, mapDispatchToProps)(withCookies(App)));
