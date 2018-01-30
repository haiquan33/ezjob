import React, { Component } from 'react';
import checked from '../../../../../Assets/checked.png';
import like from '../../../../../Assets/like.png';
import likechecked from '../../../../../Assets/likechecked.png';
import clock from '../../../../../Assets/clock.png';
import coin from '../../../../../Assets/coin.png';
import './JobItem.css';
export default class JobItem extends Component {
    constructor(props){
        super(props);
        this.state={liked:false};
        this.toogleLikeBtn=this.toogleLikeBtn.bind(this);
    }
    toogleLikeBtn(){
            this.setState({liked:!this.state.liked});
    }
    render() {
        var likeIco=this.state.liked? likechecked:like;
        return (
            <div className='jobItemContainer'>
                <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                    <img className="likeBtn" src={likeIco} onClick={this.toogleLikeBtn}/>
                    <div  style={{marginLeft:'10px',display:'flex',flexDirection:'column', alignItems:'left',  flexGrow:3}}>
                        <div className="jobName">{this.props.Jobname}</div>
                        <div style={{display:'flex',flexDirection:'row'}}>
                            <div className="compName">{this.props.Compname}</div>
                            <img src={checked}  style={{width:'20px',height:'20px',marginTop:'5px'}}/>
                        </div>
                    </div>
                    <div className="shortDes">
                        <div style={{display:'flex',flexDirection:'row',padding:'5px'}}>
                            <img src={coin} className="desImg"/>
                            <div className="desText">{this.props.Salary}</div>  
                        </div>
                        <div style={{display:'flex',flexDirection:'row',padding:'5px'}}>
                            <img src={clock} className="desImg"/>
                            <div className="desText">{this.props.Deadline}</div>  
                        </div>
                    </div>
                    <div className="apply-button">ỨNG TUYỂN!</div>
                </div>

            </div>
        )
    }
}