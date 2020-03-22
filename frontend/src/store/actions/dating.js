import * as actionTypes from './actionTypes';
import axios from './../../axios';
import Alertify from './../../utilities/Aleretify/Alertify';

export const submitReport = report => {
    return dispatch => {

        dispatch({
            type: actionTypes.DATING_REQUEST_START
        });

        axios.post('/dating/report', report)
            .then(response => {
                dispatch({
                    type: actionTypes.SUBMIT_REPORT_SUCCESS
                });

                Alertify.success(response.data.message);
            })
            .catch(err => {
                console.log(err);
                dispatch({
                    type: actionTypes.DATING_REQUEST_FAILED
                });
            });
    }
}