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
            type: actionTypes.GET_TAGS_START
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
                    type: actionTypes.GET_TAGS_FAILED
                });
            });
    }
}

export const addTag = tag => {
    return (dispatch, getState) => {
        dispatch({
            type: actionTypes.ADD_TAG_START
        });

       const currentTags = getState().dating.tags;

       if (currentTags.find(tagEl => tagEl.id === tag.id)) {
           Alertify.error("Tag Already Exist");
            dispatch({
                type: actionTypes.ADD_TAG_FAILED
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
                       type: actionTypes.ADD_TAG_FAILED
                   });
               });
       }

    }
}

export const deleteTag = tag => {
    return dispatch => {
        dispatch({
            type: actionTypes.DELETE_TAG_START
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

                Alertify.success("Tag Deleted Succesfully");
            })
            .catch(err => {
                console.log(err);
                dispatch({
                    type: actionTypes.DELETE_TAG_FAILED
                });
            });
    }
}