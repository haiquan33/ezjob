import React, { Component } from 'react';
import JobItem from './JobItem.js';
import JobContainer from './JobContainer.js';
import { connect } from 'react-redux';


class UrgentList extends Component{
        render(){
            return(
                <div >
                        <JobContainer containerLabel={"Công việc gấp"} JobList={this.props.urgentJobList}/>
                        
                </div>
           
            )
        }
}

function mapState2Props(state) {
    return { urgentJobList: state.jobReducer.urgentJobList};
  }
  
export default connect(mapState2Props)(UrgentList);