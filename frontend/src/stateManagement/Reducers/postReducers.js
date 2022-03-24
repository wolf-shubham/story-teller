import {
    CREATE_POST_FAILURE,
    CREATE_POST_REQUEST,
    CREATE_POST_SUCCESS,
    DELETE_POST_FAILURE,
    DELETE_POST_REQUEST,
    DELETE_POST_SUCCESS,
    FOLLOWING_USERS_POST_FAILURE,
    FOLLOWING_USERS_POST_REQUEST,
    FOLLOWING_USERS_POST_SUCCESS,
    LIKE_POST_FAILURE,
    LIKE_POST_REQUEST,
    LIKE_POST_SUCCESS,
    MY_POST_FAILURE,
    MY_POST_REQUEST,
    MY_POST_SUCCESS,
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


export const loggedUserPostsReducer = (state = {}, action) => {
    switch (action.type) {
        case MY_POST_REQUEST:
            return {
                loading: true
            }
        case MY_POST_SUCCESS:
            return {
                loading: false,
                myPosts: action.payload
            }
        case MY_POST_FAILURE:
            return {
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}


export const createPostReducer = (state = {}, action) => {
    switch (action.type) {
        case CREATE_POST_REQUEST:
            return {
                loading: true
            }
        case CREATE_POST_SUCCESS:
            return {
                loading: false,
                createPost: action.payload
            }
        case CREATE_POST_FAILURE:
            return {
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}


export const deletePostReducer = (state = {}, action) => {
    switch (action.type) {
        case DELETE_POST_REQUEST:
            return {
                loading: true
            }
        case DELETE_POST_SUCCESS:
            return {
                loading: false,
                deletePost: action.payload
            }
        case DELETE_POST_FAILURE:
            return {
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}
