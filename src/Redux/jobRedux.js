import { createStore,combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'

const defaultState = {
    num: 1,
    totalQuantity:0,
    isEmployee:false,
    isEmployer:false,
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

const reducer = (state = defaultState, action) => {
    let count_temp=0;
    switch (action.type) {
        case 'ADD': return { ...state, num: state.num + 1 };
        case 'FBLogin': return {...state,isEmployee:true};
        case 'GGLogin': return {...state,isEmployer:true};
        case 'LogOut': return {...state,isEmployer:false,isEmployee:false};
        default: return state;
    }
}

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store;
const myState = store.getState();