import * as actionTypes from './../actions/actionTypes';

const initialState = {
    loading: false,
    tags: [],
    photos: [],
    mainProfilePhoto: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {

        case actionTypes.DATING_REQUEST_START:
            return {
                ...state,
                loading: true 
            }

        case actionTypes.DATING_REQUEST_FAILED:
            return {
                ...state,
                loading: false
            }

        case actionTypes.GET_TAGS_SUCCESS:
            return {
                ...state,
                loading: false,
                tags: action.tags
            }

        case actionTypes.ADD_TAG_SUCCESS:
            return {
                ...state,
                loading: false,
                tags: [...state.tags, action.tag]
            }
        
        case actionTypes.DELETE_TAG_SUCCESS:
            return {
                ...state,
                loading: false,
                tags: [...state.tags].filter(tag => tag.id !== action.tag.id)
            }
       
        case actionTypes.ADD_PROFILEPHOTO_SUCCESS:
            return {
                ...state,
                loading: false,
                photos: action.photos 
            }

        case actionTypes.GET_PROFILEPHOTOS_SUCCESS:
            return {
                ...state,
                loading: false,
                photos: action.photos,
                mainProfilePhoto: action.mainProfilePhoto
            }

        case actionTypes.DELETE_PROFILEPHOTO_SUCCESS:
            return {
                ...state,
                loading: false,
                photos: [...state.photos].filter(photo => photo.id !== action.photo.id),
                mainProfilePhoto: {}
            }

        case actionTypes.SET_MAIN_PROFILEPHOTO_SUCCESS:
            return {
                ...state,
                loading: false,
                mainProfilePhoto: action.photo
            }
       
        default:
            return state;
    }
}

export default reducer;