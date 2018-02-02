import {} from '../../Redux/Actions/actions';
import {
    startRequestingJobList,
    setResultJobsList
} from '../../Redux/Actions/jobActions';


const SERVER_URL = "http://ezjob-node-server.herokuapp.com";

const GET_JOBs_API=SERVER_URL+'/api/jobs';




export function get_jobs(CompanyID,submittedUser){
        return (dispatch)=>{
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