import React, { Component } from 'react';
//Ant
import { Menu, Icon } from 'antd';


import { Route, Link } from 'react-router-dom'


import './SideMenu.css'

const SubMenu = Menu.SubMenu;


export default class SideMenu extends Component {
    
    render() {
        console.log(this.props)
        return (
            <Menu mode="inline" defaultSelectedKeys={['postedJob']} >
                <SubMenu  key="postedJob" title={<Link to={`${this.props.match.url}/postedjobs/all`}><Icon type="form" /><span className="nav-text">Các công việc đã đăng</span></Link>}>
                    <Menu.Item key="recruitingJob" >
                        <span className="nav-text"><Link to={`${this.props.match.url}/cv`}>Công việc đang tuyển</Link></span>
                    </Menu.Item>
                    <Menu.Item key="finishRecruitedJob">
                        <span className="nav-text"><Link to={`${this.props.match.url}/cv`}>Công việc đã tuyển xong</Link></span>

                    </Menu.Item>
                </SubMenu>
                <SubMenu key="manageCV" title={<Link to={`${this.props.match.url}/cv`}><Icon  type="solution" /><span className="nav-text">Quản lý CV</span></Link>}>
                    <Menu.Item key="manageCVbyJob">
                        <span className="nav-text"><Link to={`${this.props.match.url}/cv`}>Các CV đang xét</Link></span>
                    </Menu.Item>
                    <Menu.Item key="acceptedCV">
                        <span className="nav-text"><Link to={`${this.props.match.url}/cv`}> Các CV đã nhận</Link></span>
                    </Menu.Item>
                    <Menu.Item key="favoritedCV">
                        <span className="nav-text"><Link to={`${this.props.match.url}/cv`}>Các CV đã thích</Link></span>
                    </Menu.Item>
                </SubMenu>
                <Menu.Item key="employeeProfile">
                    <Icon type="idcard" />
                    <span className="nav-text"><Link  action="replace" to={`${this.props.match.url}/cv`}>Hồ sơ nhà tuyển dụng</Link></span>
                </Menu.Item>
                <Menu.Item key="companyProfile">
                    <Icon type="home" />
                    <span className="nav-text"><Link to={`${this.props.match.url}/cv`}>Thông tin công ty</Link></span>
                </Menu.Item>

            </Menu>
        )
    }
}