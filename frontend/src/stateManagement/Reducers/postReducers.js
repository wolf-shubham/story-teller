import {
    FOLLOWING_USERS_POST_FAILURE,
    FOLLOWING_USERS_POST_REQUEST,
    FOLLOWING_USERS_POST_SUCCESS,
    LIKE_POST_FAILURE,
    LIKE_POST_REQUEST,
    LIKE_POST_SUCCESS
} from "../Constants/postConstants";

export const followingUsersPostsReducer = (state = {}, action) => {
    switch (action.type) {
        case FOLLOWING_USERS_POST_REQUEST:
            return {
                loading: true
            }
        case FOLLOWING_USERS_POST_SUCCESS:
            return {
                loading: false,
                posts: action.payload
            }
        case FOLLOWING_USERS_POST_FAILURE:
            return {
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}


export const likeUnlikePostReducer = (state = {}, action) => {
    switch (action.type) {
        case LIKE_POST_REQUEST:
            return {
                loading: true
            }
        case LIKE_POST_SUCCESS:
            return {
                loading: false,
                message: action.payload
            }
        case LIKE_POST_FAILURE:
            return {
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}