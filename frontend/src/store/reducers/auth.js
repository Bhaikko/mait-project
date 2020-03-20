import * as actionTypes from './../actions/actionTypes';

const initialState = {
    token: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.AUTH_SUCCESS:
            return {
                token: action.token
            }

        case actionTypes.LOGOUT:
            return initialState;

        default: 
            return state;
    }
}

export default reducer;