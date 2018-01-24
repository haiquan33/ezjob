import { createStore,combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'

import {LOGIN_GG_SUCCESS,
    START_CHECKING_LOGIN_INFO,
    FINISH_CHECKING_LOGIN_INFO} from './Actions/actions' ;


export const accountDefaultState = {
    isCheckingLoginInfo:false,
    num: 1,
    totalQuantity:0,
    isEmployee:false,
    isEmployer:false,
    userInfo:{
            username:"Default user",
    },
   
}

export const jobDefaultState={
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
        case FINISH_CHECKING_LOGIN_INFO:return{...state,isCheckingLoginInfo:false};
        default: return state;
    }
}

export const jobReducer = (state = jobDefaultState , action) => {
    let count_temp=0;
    switch (action.type) {
       
        default: return state;
    }
}


export const rootReducer = combineReducers({
    accountReducer,
    jobReducer,
    router: routerReducer
})

