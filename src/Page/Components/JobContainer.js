import React, { Component } from 'react';
import JobItem from './JobItem.js';
import './JobContainer.css';
export default class JobContainer extends Component{




    render(){
        var jobs = this.props.urgentJobList.map(function (job) {
            var props = {
                Jobname: job.Jobname,
                Compname:job.Compname,
                Salary:job.Salary,
                Deadline:job.Deadline,
            }
            return (
                    <JobItem {...props} />
           
            )
        }, this);

        return(
            <div style={{display:'flex',flexDirection:'column',alignItems:'left'}}>
                    <div className='containerName'>{this.props.containerLabel}</div>
                    <div className="containerJob">
                        {jobs}
                    </div>
            </div>
        )

    
    }
}