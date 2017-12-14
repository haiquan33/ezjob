import React, { Component } from 'react';
import UrgentList from './UrgentList.js';
import NewJobList from './UrgentList.js';
import RecJobList from './RecJobList.js';
export default class MainPageBody extends Component {
    render() {
        return (
            <div style={{ display: 'flex', flexDirection: 'row', margin: '20px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', margin: '20px', flexShrink: 2 }}>
                    <UrgentList />
                    <NewJobList />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', marginTop: '40px', flexShrink: 1}}>
                    <RecJobList />
                </div>
            </div>
        )
    }
}