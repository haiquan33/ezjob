import React, { Component } from 'react';
import UrgentList from './UrgentList.js';
import NewJobList from './UrgentList.js';

export default class MainPageBody extends Component{
    render(){
        return(
            <div>
                <UrgentList/>
                <NewJobList/>
            </div>
        )
    }
}