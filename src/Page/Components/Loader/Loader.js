import React, { Component } from 'react';
import PropTypes from 'prop-types'
import classNames from 'classnames'
import './Loader.css'

import {Spin} from 'antd'

export default class Loader extends Component {
  render() {

    return (

      <div style={this.props.Loading ? {} : { display: 'none' }} className="LoaderContainer">
          <Spin size="large" />
      </div>
    )
  }

}





