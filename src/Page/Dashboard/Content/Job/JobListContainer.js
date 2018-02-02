import React, { Component } from 'react';
import './JobListContainer.css';

//Custom Component 
import JobList from './JobList';

//Ant
import { Affix,Button } from 'antd';

//API
import { get_jobs } from '../../../../Services/API/jobAPI';

//Redux component
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';





class JobListContainer extends Component {


    componentDidMount() {
        //nếu user yêu cầu list tất cả các công viêc đã đăng
        if (this.props.match.params.postedType == 'all') {
            this.props.get_jobs();
        }
    }


    render() {

        return (
            <div>
                <JobList data={this.props.resultJobList} />        
                <Button type="primary" shape="circle" icon="plus" size={"large"} />
            </div>
        )
    }



}



function mapState2Props(state) {
    return {
        resultJobList: state.jobReducer.resultJobList
    };
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        get_jobs

    }, dispatch)

}


export default connect(mapState2Props, mapDispatchToProps)(JobListContainer);
