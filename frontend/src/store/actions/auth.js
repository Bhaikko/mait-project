import * as actionTypes from './actionTypes';
import Alertify from './../../utilities/Aleretify/Alertify';
import UserDetail from './../../utilities/UserDetail';

export const setToken = token => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        token: token
    }
}

export const autoLogin = (token) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        token:token
    }
}

export const logout = () => {
    localStorage.clear("userdata");
    UserDetail.clear_userdata();
    
    Alertify.success("Logged out succesfully");
    Alertify.success("Bye, Take Care :)");

    return {
        type: actionTypes.LOGOUT
    }
}