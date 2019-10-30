import * as actionTypes from './../actions/actionTypes';

const initialState = {
    loading: false,
    token: null,
    userId: null,
    error: null    
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.AUTH_START:
            return {
                loading: true,
                token: null,
                userId: null,
                error: null 
            }

        case actionTypes.AUTH_SUCCESS:
            return {
                loading: false,
                token: action.token,
                userId: action.userId,
                error: null
            }

        case actionTypes.AUTH_FAILED:
            return {
                loading: false,
                token: null,
                userId: null,
                error: action.error 
            }

        case actionTypes.SIGNUP_START:
            return {
                loading: true,
                error: null 
            }
        
        case actionTypes.SIGNUP_SUCCESS:
            return {
                loading: false,
                error: null,
            }

        case actionTypes.SIGNUP_FAILED:
            return {
                loading: false,
                error: action.error
            }

        default: 
            return state;
    }
}

export default reducer;