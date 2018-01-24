//các API liên quan tới signIn, signUP đều để ở đây, cái tên loginAPI để đó làm màu thôi
import axios from 'axios';

import { loginGGsuccess,startCheckingLoginInfo,finishCheckingLoginInfo} from '../Redux/Actions/actions';

const SERVER_URL = "http://ezjob-node-server.herokuapp.com";

const SIGNUP_MANUALLY_API = SERVER_URL + "/api/user/signUp";
const SIGNIN_MANUALLY_API = SERVER_URL + "/api/user/signIn";


export function loginGG() {
    return (dispatch) => {
        dispatch(loginGGsuccess("name"));
    }
}


//đăng nhập bình thường, không thông qua GG hay FB
export function SignIn_manually(userInfo) {

    return (dispatch) => {

        dispatch(startCheckingLoginInfo());

        fetch(SIGNIN_MANUALLY_API, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userInfo)
        })
            .then((response) =>
                response.json()
            )
            .then((response) => {
              
                if (response.token!=null)
                    dispatch(finishCheckingLoginInfo(response.token));
            })
            .catch((error) => {
                console.log("error",error.json());
            })
    }
}



//đăng kí bình thường, không thông qua GG hay FB
export function SignUp_manually(userInfo) {

    // axios.post(SIGNUP_MANUALLY_API, userInfo,
    //     {
    //         headers: { 'Content-Type': 'application/json' }
    //     })
    //     .then((response) =>
    //         response.json()
    //     )
    //     .then((response) => {
    //         console.log(response);
    //     })
    //     .catch((error) => {
    //         console.log(error);
    //     })
    // console.log(userInfo);
    return (dispatch) => {
    fetch(SIGNUP_MANUALLY_API, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userInfo)
    })
        .then((response) =>
            response.json()
        )
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        })
    }
}

