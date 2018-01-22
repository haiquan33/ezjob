//Recomended Job list

import React, { Component } from 'react';
import { connect } from 'react-redux';
import checked from '../../Assets/checked.png';
import coin from '../../Assets/coin.png';
class RecJobItem extends Component {
    render() {
        return (
            <div style={{display:'flex',flexDirection:'column', alignContent:'center',border:'1px solid #00EDFF',padding:'5px'}}>
                <div className="jobName">{this.props.Jobname}</div>
                <div>
                    <div className="compName">{this.props.Compname}</div>
                    <img src={checked}  style={{width:'20px',height:'20px'}}/>
                </div>
                <div style={{display:'flex',flexDirection:'row',justifyContent:'center',marginTop:'10px',marginBottom:'10px'}}>
                    <img src={coin}  style={{width:'20px',height:'20px',marginRight:'5px'}}/>   
                     <div className="desText">{this.props.Salary}</div>
                </div>
            </div>
        )
    }
}

class RecJobList extends Component {

    
    render() {
        var jobs = this.props.recJobList.map(function (job) {
            var props = {
                Jobname: job.jobName,
                Compname:job.companyName,
                Salary:job.salary,
                Deadline:job.Deadline,
            }
            return (
                    <RecJobItem {...props} />
           
            )
        }, this);
        return (
            <div style={{display:'flex',flexDirection:'column', alignContent:'center',border:'1px solid #00EDFF',width:'15vw'}}>
                <div  style={{background:'#00EDFF',fontFamily: 'SegoeUI-Bold',fontSize: '20px',color: 'white',height:'40px' }} > Công việc phù hợp</div>
                {jobs}
            </div>
        )


    }
}

function mapState2Props(state) {
    return { recJobList: state.reducer.recJobList};
  }
  
export default connect(mapState2Props)(RecJobList);