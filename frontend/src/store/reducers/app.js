import * as actionTypes from './../actions/actionTypes';

const initialState = {
    app: "home"
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_APP:
            return {
                app: action.app 
            }

        default:
            return state;
    }
}

export default reducer;