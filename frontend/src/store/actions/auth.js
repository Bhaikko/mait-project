import * as actionTypes from './actionTypes';
import axios from './../../axios';
import Alertify from './../../utilities/Aleretify/Alertify';

export const login = (formdata) => {
    return dispatch => {
        dispatch({
            type: actionTypes.AUTH_START
        });

        const object = {};
        formdata.forEach((value, key) => {object[key] = value});

        axios.post("/auth/login", object)
            .then(response => {
                const userdata = {
                    token: response.data.token,
                    userId: response.data.userId,
                    username: response.data.username 
                }
                localStorage.setItem("userdata", JSON.stringify(userdata));

                dispatch({
                    type: actionTypes.AUTH_SUCCESS,
                    token: response.data.token,
                    userId: response.data.userId,
                    username: response.data.username
                });

                Alertify.success("Login Successful.");
            })
            .catch(err => {
                dispatch({
                    type: actionTypes.AUTH_FAILED,
                    // error: err.response.data.message
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
                axios.post("/auth/login", object)
                    .then(response => {
                        
                        const userdata = {
                            token: response.data.token,
                            userId: response.data.userId,
                            username: response.data.username 
                        }
                        localStorage.setItem("userdata", JSON.stringify(userdata));

                        dispatch({
                            type: actionTypes.AUTH_SUCCESS,
                            token: response.data.token,
                            userId: response.data.userId,
                            username: response.data.username
                        });
                        Alertify.success("Login Successful.");
                    });
            })
            .catch(err => {
                console.log(err.response.data.message);
                dispatch({
                    type: actionTypes.SIGNUP_FAILED,
                    // error: err.response.data.message
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