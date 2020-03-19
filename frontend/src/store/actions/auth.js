import * as actionTypes from './actionTypes';
import axios from './../../axios';
import Alertify from './../../utilities/Aleretify/Alertify';
import UserDetails from './../../utilities/UserDetail';


export const setToken = token => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        token: token
    }
}

export const updatePassword = (formdata) => {
    return dispatch => {
        dispatch({
            type: actionTypes.UPDATE_PASSWORD_START
        });

        formdata = {
            ...formdata,
            id: UserDetails.get_userId()
        }

        axios.put('/auth/updatePassword', formdata)
            .then(response => {
                dispatch({
                    type: actionTypes.UPDATE_PASSWORD_END
                });

                Alertify.success(response.data.message);
            })
            .catch(err => {
                console.log(err);
                dispatch({
                    type: actionTypes.UPDATE_PASSWORD_END
                });
            });
    }
}

export const autoLogin = (token, userId, username) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        token:token,
        userId: userId,
        username: username
    }
}


export const logout = () => {
    localStorage.clear("userdata");
    
    Alertify.success("Logged out succesfully");
    Alertify.success("Bye, Take Care :)");

    return {
        type: actionTypes.LOGOUT
    }
}