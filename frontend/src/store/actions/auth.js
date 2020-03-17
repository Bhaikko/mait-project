import * as actionTypes from './actionTypes';
import axios from './../../axios';
import Alertify from './../../utilities/Aleretify/Alertify';
import UserDetails from './../../utilities/UserDetail';

const _login = (response, dispatch) => {
    const userdata = {
        token: response.data.token,
        userId: response.data.userId,
        username: response.data.username,
        email: response.data.email,
        isVerified: response.data.isVerified
    }
    localStorage.setItem("userdata", JSON.stringify(userdata));

    dispatch({
        type: actionTypes.AUTH_SUCCESS,
        token: response.data.token
    });

    Alertify.success("Login Successful.");
}

export const login = (formdata) => {
    return dispatch => {
        dispatch({
            type: actionTypes.AUTH_START
        });

        axios.post("/auth/login", formdata)
            .then(response => {
                _login(response, dispatch);
            })
            .catch(err => {
                dispatch({
                    type: actionTypes.AUTH_FAILED,
                });
            });

    }
}

export const signup = (formdata) => {
    return dispatch => {
        dispatch({
            type: actionTypes.AUTH_START
        });

        axios.post("/auth/signup", formdata)
            .then(response => {
                if (response.status === 201) {
                    axios.post("/auth/login", formdata)
                        .then(response => {
                            _login(response, dispatch);
                        });
                } else {
                    dispatch({
                        type: actionTypes.AUTH_FAILED,
                    });
                }
            })
            .catch(err => {
                console.log(err);
                dispatch({
                    type: actionTypes.AUTH_FAILED,
                });
            });

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

export const forgotPassword = formdata => {
    return dispatch => {
        dispatch({
            type: actionTypes.FORGOT_PASSWORD_START
        });

        formdata.username = formdata.username.toLowerCase();

        axios.post('/auth/forgotPassword', formdata)
            .then(response => {
                console.log(response);
                dispatch({
                    type: actionTypes.UPDATE_PASSWORD_END
                });

                Alertify.success(response.data.message);
            })
            .catch(response => {
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