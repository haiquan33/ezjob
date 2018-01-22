export const LOGIN_GG_SUCCESS="LOGIN_GG_SUCCESS"


export function loginGGsuccess(userInfo) {
    return {
        type: LOGIN_GG_SUCCESS,
        userInfo
    };
} 