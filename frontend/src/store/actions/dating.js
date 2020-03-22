import * as actionTypes from './actionTypes';
import axios from './../../axios';
import Alertify from './../../utilities/Aleretify/Alertify';

export const addTag = tag => {
    return (dispatch) => {
        dispatch({
            type: actionTypes.DATING_REQUEST_START
        });

           axios.post("/dating/usertag", tag)
               .then(response => {
                   dispatch({
                       type: actionTypes.ADD_TAG_SUCCESS,
                       tag: tag
                   })
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

export const deleteTag = tag => {
    return dispatch => {
        dispatch({
            type: actionTypes.DATING_REQUEST_START
        });
        axios.delete('/dating/usertag', {
            data: {
                tag: tag 
            }
        })
            .then(response => {
                dispatch({
                    type: actionTypes.DELETE_TAG_SUCCESS,
                    tag: tag 
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

export const addProfilePhoto = photo => {
    return dispatch => {
        dispatch({
            type: actionTypes.DATING_REQUEST_START
        });

        axios.post('/dating/profilephoto', photo)
            .then(response => {
                dispatch({
                    type: actionTypes.ADD_PROFILEPHOTO_SUCCESS,
                    photos: response.data.photos
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

export const deleteProfilePhoto = photo => {
    return dispatch => {
        dispatch({
            type: actionTypes.DATING_REQUEST_START
        });

        axios.delete('/dating/profilephoto', {
            data: {
                photo: photo 
            }
        })
            .then(response => {
                dispatch({
                    type: actionTypes.DELETE_PROFILEPHOTO_SUCCESS,
                    photo: photo
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

export const setMainProfilePhoto = photo => {
    return dispatch => {
        dispatch({
            type: actionTypes.DATING_REQUEST_START
        });


        axios.put('/dating/profilephoto', photo)
            .then(response => {
                dispatch({
                    type: actionTypes.SET_MAIN_PROFILEPHOTO_SUCCESS,
                    photo: photo
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


export const updateDatingProfile = datingProfile => {
    return dispatch => {
        dispatch({
            type: actionTypes.DATING_REQUEST_START
        });


        axios.put('/dating/datingprofile', datingProfile)
            .then(response => {
                dispatch({
                    type: actionTypes.UPDATE_DATINGPROFILE_SUCCESS,
                    datingProfile: datingProfile
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