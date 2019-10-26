import * as actionTypes from './actionTypes';

const changeApp = app => {
    return {
        type: actionTypes.CHANGE_APP,
        app: app
    }
}

