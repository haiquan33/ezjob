import React,{Component} from 'react'
//Redux component
import { connect } from 'react-redux'

import {  Route,Redirect } from 'react-router-dom'

class AuthorizedRoute extends React.Component {
   
  
    render() {
      const { component: Component, pending, isLoggedIn, ...rest } = this.props
      return (
        <Route {...rest} render={props => {
          if (pending) return <div>Loading...</div>
          return  isLoggedIn
            ? <Component {...this.props} />
            : <Redirect to="/404" />
        }} />
      )
    }
  }
  
  function mapState2Props(state) {
    return {
    isLoggedIn:state.accountReducer.isLoggedIn
    }
  }
  
  export default connect(mapState2Props)(AuthorizedRoute)