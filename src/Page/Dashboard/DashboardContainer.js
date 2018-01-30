import React, { Component } from 'react';
import './DashboardContainer.css'

import UserCV from '../UserCV';

//Ant
import { Layout, Icon } from 'antd';


import { Route, Link } from 'react-router-dom'

//Redux component
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { push } from 'react-router-redux'

//Custom Component
import SideMenu from './SideMenu/SideMenu';
import logo_only from '../../Assets/logo_only.png'


const { Header, Footer, Sider, Content } = Layout;

class DashboardContainer extends Component {
    constructor(props){
        super(props);
        this.navigateTo=this.navigateTo.bind(this);
        this.state={siderFold:false}
    }

    navigateTo(path){
        this.props.push('/'+path);
    }

    render() {
        return (


            <Layout style={{ height: '100vh' }}>
                <Sider   width={300}>
                    <div className="SideMenuLogoContainer" onClick={()=>{this.navigateTo("")}}>
                        <img alt="logo" src={logo_only} className="SideMenuLogo"/>
                        {this.state.siderFold ? '' : <span>EJobs</span>}
                    </div>
                    <SideMenu {...this.props} className="SideMenu" />
                </Sider>
                <Layout >
                    <Header >Header</Header>
                    <Content> 
                        <Route exact path={`${this.props.match.url}/cv`} component={UserCV} />
                    </Content>
                    <Footer>Footer</Footer>
                   
                </Layout>
            </Layout>


        )
    }
}


function mapState2Props(state) {
    return {
        userInfo: state.accountReducer.userInfo,
        xAuthToken: state.accountReducer.xAuthToken
    };
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        push

    }, dispatch)

}


export default connect(mapState2Props, mapDispatchToProps)(DashboardContainer);
