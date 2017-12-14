import { createStore } from 'redux';

const defaultState = {
    num: 1,
    totalQuantity:0,
    urgentJobList:[
        {
            Jobname:"Kĩ sư IT frontend",
            Compname:"Công ty cổ phần 1 thành viên ezJob",
            Salary:"5000 USD",
            Deadline:'31/12/2017'

        },
        {
            Jobname:"Nhân Viên Tư Vấn Thời Trang ",
            Compname:"CHUỒN CHUỒN ỚT AODAI BOUTIQUE",
            Salary:"5000 USD",
            Deadline:'31/12/2017'

        },
        {
            Jobname:"Nhân Viên Thị Trường ",
            Compname:"CÔNG TY TNHH CỬA ĐẠI PHÁT",
            Salary:"10-15tr",
            Deadline:'31/12/2017'

        },
        {
            Jobname:"Nhân Viên Lễ Tân Phòng Gym",
            Compname:"CÔNG TY TNHH SAIGON LIFESTYLE",
            Salary:"10-15tr",
            Deadline:'31/12/2017'

        }

    ],
    newJobList:[
        {
            Jobname:"Kĩ sư IT frontend",
            Compname:"Công ty cổ phần 1 thành viên ezJob",
            Salary:"5000 USD",
            Deadline:'31/12/2017'

        },
        {
            Jobname:"Nhân Viên Tư Vấn Thời Trang ",
            Compname:"CHUỒN CHUỒN ỚT AODAI BOUTIQUE",
            Salary:"5000 USD",
            Deadline:'31/12/2017'

        },
        {
            Jobname:"Nhân Viên Thị Trường ",
            Compname:"CÔNG TY TNHH CỬA ĐẠI PHÁT",
            Salary:"10-15tr",
            Deadline:'31/12/2017'

        },
        {
            Jobname:"Nhân Viên Lễ Tân Phòng Gym",
            Compname:"CÔNG TY TNHH SAIGON LIFESTYLE",
            Salary:"10-15tr",
            Deadline:'31/12/2017'

        }

    ]
}

const reducer = (state = defaultState, action) => {
    let count_temp=0;
    switch (action.type) {
        case 'ADD': return { ...state, num: state.num + 1 };
     
        default: return state;
    }
}

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store;
const myState = store.getState();