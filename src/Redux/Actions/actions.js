export const LOGIN_GG_SUCCESS="LOGIN_GG_SUCCESS"
export const START_CHECKING_LOGIN_INFO="START_CHECKING_LOGIN_INFO";
export const FINISH_CHECKING_LOGIN_INFO="FINISH_CHECKING_LOGIN_INFO";


//bắt đầu kiểm tra xem thông tin login đúng ko
export function startCheckingLoginInfo() {
    return {
        type: START_CHECKING_LOGIN_INFO,
    };
} 


//kết thúc kiểm tra xem thông tin login đúng ko
export function finishCheckingLoginInfo() {
    return {
        type: FINISH_CHECKING_LOGIN_INFO,
    };
} 

export function loginGGsuccess(userInfo) {
    return {
        type: LOGIN_GG_SUCCESS,
        userInfo
    };
} 