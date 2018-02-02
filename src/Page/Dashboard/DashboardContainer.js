import React, { Component } from 'react';
import './DashboardContainer.css'

import UserCV from '../UserCV';

//Ant
import { Layout, Icon } from 'antd';


import { Route, Link,Switch } from 'react-router-dom'

//Redux component
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { push } from 'react-router-redux'

//Custom Component
import SideMenu from './SideMenu/SideMenu';
import MyHeader from './Header/MyHeader';
import JobListContainer from './Content/Job/JobListContainer';


//Assets
import logo_only from '../../Assets/logo_only.png'


const { Header, Footer, Sider, Content } = Layout;

class DashboardContainer extends Component {
    constructor(props){
        super(props);
        this.navigateTo=this.navigateTo.bind(this);
        this.toggleSiderCollapsed=this.toggleSiderCollapsed.bind(this);
        this.state={siderFold:false,siderCollapsed:false }
    }

    navigateTo(path){
        this.props.push('/'+path);
    }

    toggleSiderCollapsed(){
        this.setState({siderCollapsed:!this.state.siderCollapsed});
    }

    render() {
       // console.log(this.props.match.path);
        return (


            <Layout style={{ height: '100vh' }}>
                <Sider  collapsed={this.state.siderCollapsed} width={300}>
                    <div className="SideMenuLogoContainer" onClick={()=>{this.navigateTo("")}}>
                        <img alt="logo" src={logo_only} className="SideMenuLogo"/>
                        {this.state.siderCollapsed? '' : <span>EJobs</span>}
                    </div>
                    <SideMenu navigateTo={this.navigateTo} {...this.props} className="SideMenu" />
                </Sider>
                <Layout >
                    <Header ><MyHeader siderCollapsed={this.state.siderCollapsed} toggleSiderCollapsed={this.toggleSiderCollapsed} /></Header>
                    <Content> 
                        <Switch>
                            <Route exact path={`${this.props.match.url}/cv`} component={UserCV}  />
                            <Route exact path={`${this.props.match.url}/postedjobs/:postedType`} component={JobListContainer} />
                        </Switch>
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
