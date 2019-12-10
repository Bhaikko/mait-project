import * as actionTypes from './../actions/actionTypes';

const initialState = {
    loading: false,
    tags: [],
    profilePhotos: [],
    mainProfilePhoto: null,
    profile: {},
    datingProfile: {}
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
                profilePhotos: action.photos 
            }


        case actionTypes.DELETE_PROFILEPHOTO_SUCCESS:
            return {
                ...state,
                loading: false,
                profilePhotos: [...state.profilePhotos].filter(photo => photo.id !== action.photo.id),
                mainProfilePhoto: {}
            }

        case actionTypes.SET_MAIN_PROFILEPHOTO_SUCCESS:
            return {
                ...state,
                loading: false,
                mainProfilePhoto: action.photo
            }

        case actionTypes.GET_DATINGPROFILE_SUCCESS:
            return {
                ...state,
                loading: false,
                datingProfile: action.datingProfile,
                mainProfilePhoto: action.mainProfilePhoto,
                profile: action.profile,
                profilePhotos: action.profilePhotos,
                tags: action.tags 
            }

        case actionTypes.UPDATE_DATINGPROFILE_SUCCESS:
            return {
                ...state,
                loading: false,
                datingProfile: action.datingProfile
            }

        case actionTypes.SUBMIT_REPORT_SUCCESS:
            return {
                ...state,
                loading: false 
            }
       
        default:
            return state;
    }
}

export default reducer;