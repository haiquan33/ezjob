export const SET_RESULT_JOBs_LIST="SET_REQUEST_JOBs_LIST";
export const START_REQUESTING_JOB_LIST="START_REQUESTING_JOB_LIST";


//thông báo bắt đầu request joblist
export function startRequestingJobList() {
    return {
        type: START_REQUESTING_JOB_LIST,
       
    };
} 


//lưu jobs list user đã request về trong store
export function setResultJobsList(resultJobList) {
    return {
        type: SET_RESULT_JOBs_LIST,
        resultJobList
    };
} 