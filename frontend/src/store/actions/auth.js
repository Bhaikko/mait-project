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
                localStorage.setItem("username", response.data.username);

                dispatch({
                    type: actionTypes.AUTH_SUCCESS,
                    token: response.data.token,
                    userId: response.data.userId,
                    username: response.data.username
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
                axios.post("/auth/login", object)
                    .then(response => {
                        
                        localStorage.setItem("token", response.data.token);
                        localStorage.setItem("userId", response.data.userId);
                        localStorage.setItem("username", response.data.username);

                        dispatch({
                            type: actionTypes.AUTH_SUCCESS,
                            token: response.data.token,
                            userId: response.data.userId,
                            username: response.data.username
                        });
                    });
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

export const autoLogin = (token, userId, username) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        token:token,
        userId: userId,
        username: username
    }
}

export const logout = () => {
    localStorage.clear("token");
    localStorage.clear("username");
    localStorage.clear("userId");
    return {
        type: actionTypes.LOGOUT
    }
}