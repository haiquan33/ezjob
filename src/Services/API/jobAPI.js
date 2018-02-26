import { } from '../../Redux/Actions/actions';
import {
    startRequestingJobList,
    setResultJobsList,
    startSubmitJob,
    completeSubmitJob,
    errorSubmitJob
} from '../../Redux/Actions/jobActions';


const SERVER_URL = "http://ezjob-node-server.herokuapp.com";

const GET_JOBs_API = SERVER_URL + '/api/jobs';
const SUBMIT_JOB_API = SERVER_URL + '/api/job';



export function get_jobs(CompanyID, submittedUser) {
    return (dispatch) => {
        dispatch(startRequestingJobList());
        fetch(GET_JOBs_API, {
            method: 'get',
            headers: {
                'Content-Type': 'application/json',

            },

        })
            .then((response) =>
                response.json()
            )
            .then((response) => {
                if (response.data != null) {
                    console.log(response)
                    dispatch(setResultJobsList(response.data));
                }

            })
            .catch((error) => {
                console.log("error", error);
            })
    }
}


//submit new job

export function submit_job(jobData,xAuthToken) {
    return (dispatch) => {
        dispatch(startSubmitJob());
        fetch(SUBMIT_JOB_API, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'x-auth-token': xAuthToken
            },
            jobData

        })
            .then((response) =>
                response.json()
            )
            .then((response) => {
                if (response.data != null) {
                    console.log(response);
                    dispatch(completeSubmitJob());
                }

            })
            .catch((error) => {
                dispatch(errorSubmitJob(error));
                console.log("error", error);
            })
    }
}