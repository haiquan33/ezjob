export const LOGIN_GG_SUCCESS="LOGIN_GG_SUCCESS"
export const START_CHECKING_LOGIN_INFO="START_CHECKING_LOGIN_INFO";
export const FINISH_CHECKING_LOGIN_INFO="FINISH_CHECKING_LOGIN_INFO";


export const SET_USER_INFO_AFTER_LOGIN="SET_USER_INFO_AFTER_LOGIN";


//bắt đầu kiểm tra xem thông tin login đúng ko
export function startCheckingLoginInfo() {
    return {
        type: START_CHECKING_LOGIN_INFO,
    };
} 


//kết thúc kiểm tra xem thông tin login đúng ko, tham số truyển vào là xAuthToken
export function finishCheckingLoginInfo(xAuthToken) {
    return {
        type: FINISH_CHECKING_LOGIN_INFO,
        xAuthToken
    };
} 

export function loginGGsuccess(userInfo) {
    return {
        type: LOGIN_GG_SUCCESS,
        userInfo
    };
} 




/////////////// Account Action///////////////

export function setUserInfoAfterLogin(userInfo) {
    return {
        type: SET_USER_INFO_AFTER_LOGIN,
        userInfo
    };
} 