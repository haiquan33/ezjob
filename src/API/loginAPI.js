import { loginGGsuccess } from '../Redux/Actions/actions';


export function loginGG(){
    return (dispatch)=>{
        dispatch(loginGGsuccess("name"));
    }
}