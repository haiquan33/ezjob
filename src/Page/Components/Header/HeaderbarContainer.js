import React, { Component } from 'react';
import { Modal as AntModal, Affix,Icon } from 'antd';
import '../../CSS/HeaderBarContainer.css';

//custome component
import WrappedSignUpForm from '../SignUpForm';
import WrappedLogInForm from '../LogInForm';
import HeaderbarDefault from './HeaderbarDefault';
import HeaderBarEmployee from './headerBarEmployee';
//API
import {
    loginGG,
    SignUp_manually,
    SignIn_manually,
    SignUp_Status_Reset,
    Login_Status_Reset,
    SignOut
} from '../../../API/loginAPI';

//Redux component
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';





class HeaderbarContainer extends Component {

    constructor(props) {
        super(props);
        this.handleOpenLoginModal = this.handleOpenLoginModal.bind(this);
        this.handleCloseLoginModal = this.handleCloseLoginModal.bind(this);
        this.handleCloseSignUpModal = this.handleCloseSignUpModal.bind(this);
        this.handleOpenSignUpModal = this.handleOpenSignUpModal.bind(this);
        this.state = { showLoginModal: false, showSignUpModal: false };

    }

    handleOpenLoginModal() {
        this.setState({ showLoginModal: true });
    }

    handleCloseLoginModal() {
        this.setState({ showLoginModal: false });
    }

    handleOpenSignUpModal() {
        this.setState({ showSignUpModal: true });
    }


    handleCloseSignUpModal() {
        this.setState({ showSignUpModal: false });
    }
    render() {
        return (
            <div className="HeaderbarContainer">
                {this.props.isLoggedIn?
                 <HeaderBarEmployee SignOut={this.props.SignOut}/>:
                <HeaderbarDefault handleOpenSignUpModal={this.handleOpenSignUpModal} handleOpenLoginModal={this.handleOpenLoginModal}/>
               
                }
                <AntModal
                    visible={this.state.showLoginModal}
                    footer={null}
                    onCancel={() => { this.handleCloseLoginModal() }}
                    bodyStyle={{ width: "100%" }}
                    closable={false}
                    afterClose={this.props.Login_Status_Reset()}
                >
                    <WrappedLogInForm handleCloseLoginModal={this.handleCloseLoginModal} />
                </AntModal>
                <AntModal afterClose={this.props.SignUp_Status_Reset()} 
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
        isLoggedIn:state.accountReducer.isLoggedIn
    };
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        loginGG,
        SignUp_Status_Reset,
        Login_Status_Reset,
        SignOut
    }, dispatch)

}

export default connect(mapState2Props, mapDispatchToProps)(HeaderbarContainer);