import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import Dropdown, { DropdownTrigger, DropdownContent } from 'react-simple-dropdown';
import {Nav, NavItem } from 'react-bootstrap';
import avatar from '../../Assets/avatar.jpg';
import { connect } from 'react-redux'
class HeaderBarEmployee extends Component {

    constructor(props){
        super(props);
        this.SignOut=this.SignOut.bind(this);
    }
    SignOut(){
        this.props.dispatch({ type: 'LogOut' });
    }

    render() {
        return (
            <div className="headerBar">
                <Dropdown className="account-dropdown" ref="dropdown">
                    <DropdownTrigger>
                        <Image className="avatar" src={avatar} circle/>
                    </DropdownTrigger>
                    <DropdownContent>
                        
                     
                            <Nav bsStyle="customDropdown"  >
                                <NavItem eventKey={1} href="/home">Tài khoản</NavItem>
                                <NavItem eventKey={2} title="Item" href="/userCV">CV của bạn</NavItem>
                                <NavItem eventKey={3} onClick={this.SignOut}>Đăng thoát</NavItem>
                            </Nav>
                        
                        
                    </DropdownContent>
                </Dropdown>
            </div>
        )
    }
}

function mapState2Props(state) {
    return { num: state.num,};
  }
  
  export default connect(mapState2Props)(HeaderBarEmployee);