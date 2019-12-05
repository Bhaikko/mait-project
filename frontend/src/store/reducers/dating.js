import * as actionTypes from './../actions/actionTypes';

const initialState = {
    loading: false,
    tags: [],
    photos: [] 
}

const reducer = (state = initialState, action) => {
    switch (action.type) {

        case actionTypes.GET_TAGS_START:
            return {
                ...state,
                loading: true 
            }

        case actionTypes.GET_TAGS_SUCCESS:
            return {
                ...state,
                loading: false,
                tags: action.tags
            }

        case actionTypes.GET_TAGS_FAILED:
            return {
                ...state,
                loading: false
            }

        case actionTypes.ADD_TAG_START:
            return {
                ...state, 
                loading: true,
            }

        case actionTypes.ADD_TAG_SUCCESS:
            return {
                ...state,
                loading: false,
                tags: [...state.tags, action.tag]
            }

        case actionTypes.ADD_TAG_FAILED:
            return {
                ...state,
                loading: false
            }

        case actionTypes.DELETE_TAG_START:
            return {
                ...state,
                loading: true  
            }
        
        case actionTypes.DELETE_TAG_SUCCESS:
            return {
                ...state,
                loading: false,
                tags: [...state.tags].filter(tag => tag.id !== action.tag.id)
            }

        case actionTypes.DELETE_TAG_FAILED:
            return {
                ...state,
                loading: false 
            }

        case actionTypes.ADD_PROFILEPHOTO_START:
            return {
                ...state,
                loading: true 
            }

        case actionTypes.ADD_PROFILEPHOTO_SUCCESS:
            return {
                ...state,
                loading: false,
                photos: action.photos 
            }

        case actionTypes.ADD_PROFILEPHOTO_FAILED:
            return {
                ...state,
                loading: false
            }

        default:
            return state;
    }
}

export default reducer;