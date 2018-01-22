import React, { Component } from 'react';
import JobItem from './JobItem.js';
import JobContainer from './JobContainer.js';
import { connect } from 'react-redux';


class NewJobList extends Component{
        render(){
            return(
                <div >
                        <JobContainer containerLabel={"Công việc mới"} JobList={this.props.newJobList}/>
                        
                </div>
           
            )
        }
}

function mapState2Props(state) {
    return { newJobList: state.reducer.newJobList};
  }
  
export default connect(mapState2Props)(newList);