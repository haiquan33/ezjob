import { createStore,combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'



//ACtions Import
import {LOGIN_GG_SUCCESS,
    START_CHECKING_LOGIN_INFO,
    FINISH_CHECKING_LOGIN_INFO,
    FINISH_CHECKING_LOGIN_FAILED,
    LOGIN_REMEMBER,
    LOGIN_STATUS_RESET,
    START_GETTING_USER_INFO_AFTER_LOGIN,
    SET_USER_INFO_AFTER_LOGIN,
    START_CHECKING_SIGNUP_INFO,
    SIGN_UP_SUCCESS,
    SIGN_UP_FAILED,

    SIGN_UP_STATUS_RESET,

    SIGNOUT} from './Actions/actions' ;

import {SET_RESULT_JOBs_LIST,
        START_REQUESTING_JOB_LIST,
        START_SUBMIT_JOB,
        COMPLETE_SUBMIT_JOB,
        ERROR_SUBMIT_JOB} from'./Actions/jobActions';



export const accountDefaultState = {
    isCheckingLoginInfo:false,
    isCheckingSignUpInfo:false, 
    isCompleteSignUpSuccessfully:false,

    isGettingUserInfo:false,
    num: 1,
    totalQuantity:0,
    isLoggedIn:false,
    isEmployee:false,
    isEmployer:false,
    userInfo:{
            username:"Default user",
    },
   
}

export const jobDefaultState={
    isRequestingJobList:false,
    resultJobList:null,
    isSubmitingJob:false,
    submitError:null,
    urgentJobList:[
        {
            jobName:"Kĩ sư IT frontend",
            companyName:"Công ty cổ phần 1 thành viên ezJob",
            salary:"5000 USD",
            Deadline:'31/12/2017'

        },
        {
            jobName:"Nhân Viên Tư Vấn Thời Trang ",
            companyName:"CHUỒN CHUỒN ỚT AODAI BOUTIQUE",
            salary:"5000 USD",
            Deadline:'31/12/2017'

        },
        {
            jobName:"Nhân Viên Thị Trường ",
            companyName:"CÔNG TY TNHH CỬA ĐẠI PHÁT",
            salary:"10-15tr",
            Deadline:'31/12/2017'

        },
        {
            jobName:"Nhân Viên Lễ Tân Phòng Gym",
            companyName:"CÔNG TY TNHH SAIGON LIFESTYLE",
            salary:"10-15tr",
            Deadline:'31/12/2017'

        }

    ],
    newJobList:[
        {
            jobName:"Kĩ sư IT frontend",
            companyName:"Công ty cổ phần 1 thành viên ezJob",
            salary:"5000 USD",
            Deadline:'31/12/2017'

        },
        {
            jobName:"Nhân Viên Tư Vấn Thời Trang ",
            companyName:"CHUỒN CHUỒN ỚT AODAI BOUTIQUE",
            salary:"5000 USD",
            Deadline:'31/12/2017'

        },
        {
            jobName:"Nhân Viên Thị Trường ",
            companyName:"CÔNG TY TNHH CỬA ĐẠI PHÁT",
            salary:"10-15tr",
            Deadline:'31/12/2017'

        },
        {
            jobName:"Nhân Viên Lễ Tân Phòng Gym",
            companyName:"CÔNG TY TNHH SAIGON LIFESTYLE",
            salary:"10-15tr",
            Deadline:'31/12/2017'

        }

    ],
    recJobList:[
        {
            jobName:"Kĩ sư IT frontend",
            companyName:"Công ty cổ phần 1 thành viên ezJob",
            salary:"5000 USD",
            Deadline:'31/12/2017'

        },
        {
            jobName:"Nhân Viên Tư Vấn Thời Trang ",
            companyName:"CHUỒN CHUỒN ỚT AODAI BOUTIQUE",
            salary:"5000 USD",
            Deadline:'31/12/2017'

        },
        {
            jobName:"Nhân Viên Thị Trường ",
            companyName:"CÔNG TY TNHH CỬA ĐẠI PHÁT",
            salary:"10-15tr",
            Deadline:'31/12/2017'

        },
        {
            jobName:"Nhân Viên Lễ Tân Phòng Gym",
            companyName:"CÔNG TY TNHH SAIGON LIFESTYLE",
            salary:"10-15tr",
            Deadline:'31/12/2017'

        }

    ],
}

export const accountReducer = (state = accountDefaultState , action) => {
    let count_temp=0;
    switch (action.type) {
        case 'ADD': return { ...state, num: state.num + 1 };
        case 'FBLogin': return {...state,isEmployee:true};
        case LOGIN_GG_SUCCESS : return {...state,isEmployer:true};
        case 'LogOut': return {...state,isEmployer:false,isEmployee:false};

        case START_CHECKING_LOGIN_INFO:return{...state,isCheckingLoginInfo:true};
        case FINISH_CHECKING_LOGIN_INFO:return{...state,isCheckingLoginInfo:false,xAuthToken:action.xAuthToken,isLoggedIn:true};
        case FINISH_CHECKING_LOGIN_FAILED:return{...state,isCheckingLoginInfo:false,loginError:action.loginError};
  
        case LOGIN_STATUS_RESET:return{...state,isCheckingLoginInfo:false,loginError:null};

        case START_GETTING_USER_INFO_AFTER_LOGIN: return{...state,isGettingUserInfo:true};
        case SET_USER_INFO_AFTER_LOGIN:return{...state,userInfo:action.userInfo,isLoggedIn:true,xAuthToken:action.xAuthToken,isGettingUserInfo:false};
        case START_CHECKING_SIGNUP_INFO: return {...state,isCheckingSignUpInfo:true};

        case SIGN_UP_SUCCESS:return{...state,isCheckingSignUpInfo:false,xAuthToken:action.xAuthToken, isCompleteSignUpSuccessfully:true};
        case SIGN_UP_FAILED:return{...state,isCheckingSignUpInfo:false,signupError:action.signupError};
        case SIGN_UP_STATUS_RESET:return {...state,isCompleteSignUpSuccessfully:false,signupError:null};

        case SIGNOUT: return accountDefaultState;
        

        default: return state;
    }
}

export const jobReducer = (state = jobDefaultState , action) => {
    let count_temp=0;
    switch (action.type) {
        case START_REQUESTING_JOB_LIST: return {...state,isRequestingJobList:true};
        case SET_RESULT_JOBs_LIST:return{...state,resultJobList:action.resultJobList, isRequestingJobList:false};
        case START_SUBMIT_JOB:return {...state,isSubmitingJob:true,submitError:null};
        case COMPLETE_SUBMIT_JOB:return{...state,isSubmitingJob:false};
        case ERROR_SUBMIT_JOB:return{...state,isSubmitingJob:false,submitError:action.error};
        default: return state;
    }
}


export const rootReducer = combineReducers({
    accountReducer,
    jobReducer,
    router: routerReducer
})

