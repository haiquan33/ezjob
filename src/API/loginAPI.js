//các API liên quan tới signIn, signUP đều để ở đây, cái tên loginAPI để đó làm màu thôi
import axios from 'axios';

import {
    loginGGsuccess,
    startCheckingLoginInfo,
    finishCheckingLoginInfo,
    finishCheckingLoginInfo_failed,
    resetLoginStatus,
    setUserInfoAfterLogin,
    rememberLogin,

    startCheckingSignUpInfo,
    successSignUp,
    failedSignUp,
    resetSignUpStatus,

    signout
} from '../Redux/Actions/actions';

const SERVER_URL = "http://ezjob-node-server.herokuapp.com";

const SIGNUP_MANUALLY_API = SERVER_URL + "/api/user/signUp";
const SIGNIN_MANUALLY_API = SERVER_URL + "/api/user/signIn";
const GET_USERINFO_AFTER_LOGIN_API = SERVER_URL + "/api/user/info";


const USER_SIGNOUT = SERVER_URL + "/api/user/signOut";

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

                if (response.token != null)
                    dispatch(finishCheckingLoginInfo(response.token));
                else dispatch(finishCheckingLoginInfo_failed(response.message));

            })
            .catch((error) => {
                console.log("error", error.json());
            })
    }
}







//sau khi đăng nhập thì lấy user info chung về
export function get_userInfoAterLogin(xAuthToken) {

    return (dispatch) => {

      

        fetch(GET_USERINFO_AFTER_LOGIN_API, {
            method: 'get',
            headers: {
                'Content-Type': 'application/json',
                'x-auth-token': xAuthToken
            },
           
        })
            .then((response) =>
                response.json()
            )
            .then((response) => {
                if (response.data!=null)
                dispatch(setUserInfoAfterLogin(response.data,xAuthToken));

            })
            .catch((error) => {
                console.log("error",error);
            })
    }
}







// reset lại login error
export function Login_Status_Reset() {

    return (dispatch) => {
        dispatch(resetLoginStatus())

    }
}


//ssignout user
export function SignOut(xAuthToken) {

    return (dispatch) => {


        dispatch(signout());
        fetch(USER_SIGNOUT, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'x-auth-token': xAuthToken
            },

        })

            .catch((error) => {
                console.log("error", error.json());
            })
    }
}




//đăng kí bình thường, không thông qua GG hay FB
export function SignUp_manually(userInfo) {


    return (dispatch) => {
        dispatch(startCheckingSignUpInfo())
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
                //if sign up success => data tra về khác null
                if (response.data != null) {
                    dispatch(successSignUp(response.token));
                }
                else {
                    dispatch(failedSignUp(response.message))
                }

            })
            .catch((error) => {
                console.log(error);
            })
    }
}


// reset lại signup error
export function SignUp_Status_Reset() {

    return (dispatch) => {
        dispatch(resetSignUpStatus())

    }
}