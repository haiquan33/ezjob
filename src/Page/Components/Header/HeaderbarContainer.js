import React, { Component } from 'react';
import { Modal as AntModal, Affix, Icon } from 'antd';
import '../../CSS/HeaderBarContainer.css';


//Other lib
import { withCookies, Cookies } from 'react-cookie';
import { instanceOf } from 'prop-types';

//custome component
import WrappedSignUpForm from '../SignUpForm';
import WrappedLogInForm from '../LogInForm';
import HeaderbarDefault from './HeaderbarDefault';
import HeaderBarEmployee from './headerBarEmployee';
import HeaderBarEmployer from './HeaderbarEmployer';
//API
import {
    loginGG,
    SignUp_manually,
    SignIn_manually,
    SignUp_Status_Reset,
    Login_Status_Reset,
    SignOut
} from '../../../Services/API/loginAPI';

//Redux component
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { push } from 'react-router-redux'


const EmployeeType = 0;
const EmployerType = 1;


class HeaderbarContainer extends Component {


    static propTypes = {
        cookies: instanceOf(Cookies).isRequired
    };

    constructor(props) {
        super(props);
        this.handleOpenLoginModal = this.handleOpenLoginModal.bind(this);
        this.handleCloseLoginModal = this.handleCloseLoginModal.bind(this);
        this.afterLoginModalClose = this.afterLoginModalClose.bind(this);
        this.handleCloseSignUpModal = this.handleCloseSignUpModal.bind(this);
        this.handleOpenSignUpModal = this.handleOpenSignUpModal.bind(this);
        this.RememberThisUser=this.RememberThisUser.bind(this);
        this.NavigateTo=this.NavigateTo.bind(this);
        this.SignOut = this.SignOut.bind(this);
        this.state = { showLoginModal: false, showSignUpModal: false };

    }

    handleOpenLoginModal() {
        this.setState({ showLoginModal: true });
    }

    //neu user dong login modal
    handleCloseLoginModal() {
        this.setState({ showLoginModal: false });
    }

    //sau khi login modal đóng
    afterLoginModalClose() {
        this.props.Login_Status_Reset();
    }


    handleOpenSignUpModal() {
        this.setState({ showSignUpModal: true });
    }


    handleCloseSignUpModal() {
        this.setState({ showSignUpModal: false });
    }


    SignOut() {

        const { cookies } = this.props;

        cookies.remove('xAuthToken', { path: '/' });
        this.props.SignOut();

    }


    RememberThisUser(xAuthToken) {
        

        const { cookies } = this.props;

        if (this.props.isLoggedIn) {


            cookies.set('xAuthToken', this.props.xAuthToken, { path: '/' });
        }
    }


    // route to this path
    NavigateTo(path){
            this.props.push('/'+path);
    }

    render() {
        return (
            <div className="HeaderbarContainer">
                {this.props.isLoggedIn ?
                    this.props.userInfo.userType == EmployeeType ?
                        <HeaderBarEmployee NavigateTo={this.NavigateTo} SignOut={this.SignOut} userInfo={this.props.userInfo} /> :
                        <HeaderBarEmployer NavigateTo={this.NavigateTo} SignOut={this.SignOut} userInfo={this.props.userInfo} /> :
                    <HeaderbarDefault handleOpenSignUpModal={this.handleOpenSignUpModal} handleOpenLoginModal={this.handleOpenLoginModal} />

                }
                <AntModal
                    visible={this.state.showLoginModal}
                    footer={null}
                    onCancel={() => { this.handleCloseLoginModal() }}
                    bodyStyle={{ width: "100%" }}
                    closable={false}
                    afterClose={()=>this.afterLoginModalClose()}
                >
                    <WrappedLogInForm RememberThisUser={this.RememberThisUser} handleCloseLoginModal={this.handleCloseLoginModal} />
                </AntModal>
                <AntModal afterClose={()=>this.props.SignUp_Status_Reset()}
                    visible={this.state.showSignUpModal}
                    footer={null} closable={false}
                    onCancel={() => { this.handleCloseSignUpModal() }}>{<WrappedSignUpForm />}</AntModal>

            </div>
        )
    }

}

function mapState2Props(state) {
    return {
        num: state.accountReducer.num,
        userInfo: state.accountReducer.userInfo,
        isLoggedIn: state.accountReducer.isLoggedIn,
        xAuthToken: state.accountReducer.xAuthToken
    };
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        loginGG,
        SignUp_Status_Reset,
        Login_Status_Reset,
        SignOut,
        push
    }, dispatch)

}

export default connect(mapState2Props, mapDispatchToProps)(withCookies(HeaderbarContainer));