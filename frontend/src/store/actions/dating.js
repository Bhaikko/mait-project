import * as actionTypes from './actionTypes';
import axios from './../../axios';
import Alertify from './../../utilities/Aleretify/Alertify';

const getUserId = () => {
    const token = JSON.parse(localStorage.getItem("userdata"));
    return token.userId;
}

export const getTags = (userid = getUserId()) => {
    return dispatch => {
        dispatch({
            type: actionTypes.DATING_REQUEST_START
        });

        axios.get('/dating/usertag/' + userid)
            .then(response => {
                // console.log(response);
                dispatch({
                    type: actionTypes.GET_TAGS_SUCCESS,
                    tags: response.data 
                });
            })
            .catch(err => {
                console.log(err);
                dispatch({
                    type: actionTypes.DATING_REQUEST_FAILED
                });
            });
    }
}

export const addTag = tag => {
    return (dispatch, getState) => {
        dispatch({
            type: actionTypes.DATING_REQUEST_START
        });

       const currentTags = getState().dating.tags;

       if (currentTags.find(tagEl => tagEl.id === tag.id)) {
           Alertify.error("Tag Already Exist");
            dispatch({
                type: actionTypes.DATING_REQUEST_FAILED
            });
       } else {
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
                console.log(response);
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

export const getProfilePhotos = (userid = getUserId()) => {
    return dispatch => {
        dispatch({
            type: actionTypes.DATING_REQUEST_START
        });

        axios.get('/dating/profilephoto/' + userid)
            .then(response => {

                dispatch({
                    type: actionTypes.GET_PROFILEPHOTOS_SUCCESS,
                    photos: response.data
                });
            })
            .catch(err => {
                console.log(err);
                dispatch({
                    type: actionTypes.DATING_REQUEST_FAILED
                });
            });
    }
}