import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import { Menu, Dropdown, Icon,Avatar  } from 'antd';
import { Nav, NavItem } from 'react-bootstrap';
import default_avatar from '../../../Assets/default_avatar.png';
import { connect } from 'react-redux'

import { push } from 'react-router-redux'






  


class HeaderBarEmployee extends Component {

    constructor(props) {
        super(props);
        this.SignOut = this.SignOut.bind(this);
    }
    SignOut() {
        this.props.SignOut();
    }

    render() {
       let menu = (
            <Menu>
              <Menu.Item key="0">
                <a >Thông tin tài khoản</a>
              </Menu.Item>
              <Menu.Item key="1">
                <a >CV của tôi</a>
              </Menu.Item>
              <Menu.Divider />
              <Menu.Item key="3"> <a  onClick={this.SignOut} >Đăng thoát</a></Menu.Item>
            </Menu>
          );

        return (
            <div className="headerBarEmployee">
                <Dropdown overlay={menu} trigger={['click']}>
                         <Avatar size="large" src={default_avatar} />
                </Dropdown>
            </div>
        )
    }
}


export default connect()(HeaderBarEmployee);