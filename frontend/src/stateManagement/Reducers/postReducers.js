import {
    FOLLOWING_USERS_POST_FAILURE,
    FOLLOWING_USERS_POST_REQUEST,
    FOLLOWING_USERS_POST_SUCCESS,
    LIKE_POST_FAILURE,
    LIKE_POST_REQUEST,
    LIKE_POST_SUCCESS,
    POST_COMMENT_FAILURE,
    POST_COMMENT_REQUEST,
    POST_COMMENT_SUCCESS
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


export const commentOnPostReducer = (state = {}, action) => {
    switch (action.type) {
        case POST_COMMENT_REQUEST:
            return {
                loading: true
            }
        case POST_COMMENT_SUCCESS:
            return {
                loading: false,
                message: action.payload
            }
        case POST_COMMENT_FAILURE:
            return {
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}