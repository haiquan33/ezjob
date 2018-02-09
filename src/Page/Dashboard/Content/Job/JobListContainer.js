import React, { Component } from 'react';
import './JobListContainer.css';

//Custom Component 
import JobList from './JobList';
import WrappedCreateJobForm from './Form/CreateJobForm';
//Ant
import { Affix,Button,Modal } from 'antd';

//API
import { get_jobs } from '../../../../Services/API/jobAPI';

//Redux component
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';





class JobListContainer extends Component {

    constructor(props){
        super(props);
        this.state = { showCreateJobModal: false};
        this.openCreateJobModal=this.openCreateJobModal.bind(this);
        this.handleCloseCreateJobModal=this.handleCloseCreateJobModal.bind(this);

    }
    componentDidMount() {
        //nếu user yêu cầu list tất cả các công viêc đã đăng thì thực hiện lấy các công việc
        if (this.props.match.params.postedType == 'all') {
            this.props.get_jobs();
        }
    }

    openCreateJobModal(){
        this.setState({showCreateJobModal:true});
    }

      //sau khi create job modal đóng
      afterCreateJobModalClose() {
       
    }


    handleCloseCreateJobModal() {
        this.setState({ showCreateJobModal: false });
    }


    render() {

        return (
            <div>
                <JobList data={this.props.resultJobList} />        
                <Button onClick={this.openCreateJobModal} type="primary" shape="circle" icon="plus" size={"large"} />
                <Modal
                    visible={this.state.showCreateJobModal}
                    footer={null}
                    onCancel={() => { this.handleCloseCreateJobModal() }}
                    bodyStyle={{ width: "100%" }}
                    closable={false}
                    afterClose={()=>this.afterCreateJobModalClose()}
                >
                    <WrappedCreateJobForm  />
                </Modal>
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
