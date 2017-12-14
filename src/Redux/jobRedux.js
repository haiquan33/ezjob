import { createStore } from 'redux';

const defaultState = {
    num: 1,
    totalQuantity:0,
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
     
        default: return state;
    }
}

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store;
const myState = store.getState();