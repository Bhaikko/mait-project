import * as actionTypes from './actionTypes';
import axios from './../../axios';
import Alertify from './../../utilities/Aleretify/Alertify';
import UserDetail from './../../utilities/UserDetail';


const getUserId = () => {
    return UserDetail.get_userId();
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

                const defaultPhoto = {
                    id: 1,
                    imageUrl: "",
                    main: true
                }
                
                dispatch({
                    type: actionTypes.GET_PROFILEPHOTOS_SUCCESS,
                    photos: response.data,
                    mainProfilePhoto: response.data.find(photo => photo.main === true) || defaultPhoto
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

export const getDatingProfile = (userid = getUserId()) => {
    return dispatch => {
        dispatch({
            type: actionTypes.DATING_REQUEST_START
        });

        axios.get('/dating/datingprofile/' + userid)
            .then(response => {
                console.log(response);
                dispatch({
                    type: actionTypes.GET_DATINGPROFILE_SUCCESS,
                    profile: response.data
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