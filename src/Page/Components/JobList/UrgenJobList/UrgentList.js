import React, { Component } from 'react';

import JobContainer from '../JobListContainer/JobContainer';
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