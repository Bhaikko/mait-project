import * as actionTypes from './../actions/actionTypes';

const initialState = {
    loading: false,
    token: null,
    userId: null,
    username: null,
    error: null    
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.AUTH_START:
            return {
                ...initialState,
                loading: true
            }

        case actionTypes.AUTH_SUCCESS:
            return {
                loading: false,
                token: action.token,
                userId: action.userId,
                username: action.username,
                error: null
            }

        case actionTypes.AUTH_FAILED:
            return {
                ...initialState,
                error: action.error 
            }

        case actionTypes.SIGNUP_START:
            return {
                ...initialState,
                loading: true
            }

        case actionTypes.SIGNUP_FAILED:
            return {
                ...initialState,
                error: action.error
            }

        case actionTypes.LOGOUT:
            window.location = "/";
            return initialState;

        default: 
            return state;
    }
}

export default reducer;