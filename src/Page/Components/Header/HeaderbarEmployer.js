import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import { Menu, Dropdown, Icon,Avatar,Affix  } from 'antd';
import { Nav, NavItem } from 'react-bootstrap';
import default_avatar from '../../../Assets/default_avatar.png';
import { connect } from 'react-redux'

import { push } from 'react-router-redux'






  


class HeaderBarEmployer extends Component {

    constructor(props) {
        super(props);
        this.SignOut = this.SignOut.bind(this);
    }
    SignOut() {
        this.props.SignOut();
    }

    render() {
        let avatar=this.props.userInfo.pictureURL?  this.props.userInfo.pictureURL:default_avatar;
       let menu = (
            <Menu>
              <Menu.Item key="0">
                <a >Thông tin tài khoản</a>
              </Menu.Item>
              <Menu.Item key="1">
                <a onClick={()=>this.props.NavigateTo("dashboard")}>Bảng quản trị</a>
              </Menu.Item>
              <Menu.Divider />
              <Menu.Item key="3"> <a  onClick={this.SignOut} >Đăng thoát</a></Menu.Item>
            </Menu>
          );

        return (
            <Affix offsetTop={0} className="headerBarEmployer">
                <h1>EzJob</h1>
                <Dropdown overlay={menu} trigger={['click']}>
                         <Avatar size="large" src={avatar} />
                </Dropdown>
            </Affix>
        )
    }
}


export default connect()(HeaderBarEmployer);