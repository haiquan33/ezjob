import {setUserInfoAfterLogin} from '../Redux/Actions/actions';
const SERVER_URL = "http://ezjob-node-server.herokuapp.com";




const GET_USERINFO_AFTER_LOGIN_API = SERVER_URL + "/api/user/info";



//sau khi đăng nhập thì lấy user info chung về
export function get_userInfoAterLogin(xAuthToken) {

    return (dispatch) => {

      

        fetch(GET_USERINFO_AFTER_LOGIN_API, {
            method: 'get',
            headers: {
                'Content-Type': 'application/json',
                'x-auth-token': xAuthToken
            },
           
        })
            .then((response) =>
                response.json()
            )
            .then((response) => {
              
                dispatch(setUserInfoAfterLogin(response.data));
            })
            .catch((error) => {
                console.log("error",error.json());
            })
    }
}
