export const SET_RESULT_JOBs_LIST="SET_REQUEST_JOBs_LIST";
export const START_REQUESTING_JOB_LIST="START_REQUESTING_JOB_LIST";

export const START_SUBMIT_JOB="START_SUBMIT_JOB";
export const COMPLETE_SUBMIT_JOB="COMPLETE_SUBMIT_JOB";
export const ERROR_SUBMIT_JOB="ERROR_SUBMIT_JOB";

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



//thoông báo bắt đầu submit job
export function startSubmitJob(){
    return{
        type: START_SUBMIT_JOB
    }
}


//thông báo đã submit xong 
export function completeSubmitJob(){
    return{
        type:COMPLETE_SUBMIT_JOB,
    }
}

//thông báo submit co lỗi
export function errorSubmitJob(error){
    return{
        type:ERROR_SUBMIT_JOB,
        error
    }
}