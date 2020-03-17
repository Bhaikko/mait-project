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

        case actionTypes.LOGOUT:
            return initialState;

        case actionTypes.UPDATE_PASSWORD_START:
            return {
                ...state,
                loading: true,
            }

        case actionTypes.UPDATE_PASSWORD_END:
            return {
                ...state,
                loading: false
            }

        case actionTypes.FORGOT_PASSWORD_START:
            return {
                ...state,
                loading: true,
            }

        case actionTypes.FORGOT_PASSWORD_END:
            return {
                ...state,
                loading: false
            }

        default: 
            return state;
    }
}

export default reducer;