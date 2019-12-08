import * as actionTypes from './../actions/actionTypes';

const initialState = {
    loading: false,
    token: null
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
            }

        case actionTypes.AUTH_FAILED:
            return {
                ...initialState,
                loading: false
            }

        case actionTypes.SIGNUP_START:
            return {
                ...initialState,
                loading: true
            }

        case actionTypes.SIGNUP_FAILED:
            return {
                ...initialState,
                loading: false
            }

        case actionTypes.LOGOUT:
            return initialState;

        default: 
            return state;
    }
}

export default reducer;