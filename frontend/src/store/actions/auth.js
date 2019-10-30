import * as actionTypes from './actionTypes';
import axios from './../../axios';


export const login = (formdata) => {
    return dispatch => {
        dispatch({
            type: actionTypes.AUTH_START
        });

        const object = {};
        formdata.forEach((value, key) => {object[key] = value});

        axios.post("/auth/login", object)
            .then(response => {
                localStorage.setItem("token", response.data.token);
                localStorage.setItem("userId", response.data.userId);

                dispatch({
                    type: actionTypes.AUTH_SUCCESS,
                    token: response.data.token,
                    userId: response.data.userId
                });
            })
            .catch(err => {
                dispatch({
                    type: actionTypes.AUTH_FAILED,
                    error: err.response.data.message
                });
            });

    }
}

export const signup = (formdata) => {
    return dispatch => {
        dispatch({
            type: actionTypes.SIGNUP_START
        });

        const object = {};
        formdata.forEach((value, key) => {object[key] = value});

        axios.post("/auth/signup", object)
            .then(response => {

                dispatch({
                    type: actionTypes.SIGNUP_SUCCESS,
                });
                dispatch(login(object));
            })
            .catch(err => {
                console.log(err);
                dispatch({
                    type: actionTypes.SIGNUP_FAILED,
                    error: err.response.data.message
                });
            });

    }
}

