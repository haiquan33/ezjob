//if user not logged in, use this headerbar

import React, { Component } from 'react';
import {Affix,Icon } from 'antd';

export default class HeaderbarDefault extends Component{
  

    render() {
        return (

            <Affix offsetTop={0} className="HeaderbarDefault">
                <h1>EzJob</h1>
                <div className='register-button' onClick={() => { this.props.handleOpenSignUpModal() }}>Đăng kí</div>
                <div className='login-button' onClick={this.props.handleOpenLoginModal}>Đăng nhập</div>
              

            </Affix>
        )
    }
}