import React, { Component } from 'react';
import JobItem from './JobItem.js';
import './JobContainer.css';
export default class JobContainer extends Component{




    render(){
        var jobs = this.props.JobList.map(function (job) {
            var props = {
                Jobname: job.jobName,
                Compname:job.companyName,
                Salary:job.salary,
                Deadline:job.Deadline,
            }
            return (
                    <JobItem {...props} />
           
            )
        }, this);

        return(
            <div style={{display:'flex',flexDirection:'column',alignItems:'left',margin:'20px'}}>
                    <div className='containerName'>{this.props.containerLabel}</div>
                    <div className="containerJob">
                        {jobs}
                    </div>
            </div>
        )

    
    }
}