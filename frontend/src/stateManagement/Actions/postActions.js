import axios from "axios"
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
    OTHER_USERS_POST_FAILURE,
    OTHER_USERS_POST_REQUEST,
    OTHER_USERS_POST_SUCCESS,
    POST_COMMENT_FAILURE,
    POST_COMMENT_REQUEST,
    POST_COMMENT_SUCCESS
} from "../Constants/postConstants"

export const followingUsersPostsAction = () => async (dispatch) => {
    try {
        dispatch({ type: FOLLOWING_USERS_POST_REQUEST })
        const token = JSON.parse(localStorage.getItem('token'))
        const config = {
            headers: {
                'Content-type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        }
        const { data } = await axios.get('/post/followingposts', config)
        const postData = await data.posts.sort((p1, p2) => {
            return new Date(p2.createdAt) - new Date(p1.createdAt)
        })
        dispatch({ type: FOLLOWING_USERS_POST_SUCCESS, payload: postData })

    } catch (error) {
        dispatch({ type: FOLLOWING_USERS_POST_FAILURE, payload: error.response.data.message })
    }
}


export const likeUnlikePostAction = (id) => async (dispatch) => {
    try {
        dispatch({ type: LIKE_POST_REQUEST })
        const token = JSON.parse(localStorage.getItem('token'))
        const config = {
            headers: {
                'Content-type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        }
        const { data } = await axios.get(`/post/like/${id}`, config)
        dispatch({ type: LIKE_POST_SUCCESS, payload: data.message })

    } catch (error) {
        dispatch({ type: LIKE_POST_FAILURE, payload: error.response.data.message })
    }
}


export const commentOnPostAction = (id, comment) => async (dispatch) => {
    try {
        dispatch({ type: POST_COMMENT_REQUEST })
        const token = JSON.parse(localStorage.getItem('token'))
        const config = {
            headers: {
                'Content-type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        }
        const { data } = await axios.post(`/post/addcomment/${id}`, { comment }, config)
        dispatch({ type: POST_COMMENT_SUCCESS, payload: data.message })

    } catch (error) {
        dispatch({ type: POST_COMMENT_FAILURE, payload: error.response.data.message })
    }
}


export const loggedUserPostsAction = () => async (dispatch) => {
    try {
        dispatch({ type: MY_POST_REQUEST })
        const token = JSON.parse(localStorage.getItem('token'))
        const config = {
            headers: {
                'Content-type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        }
        const { data } = await axios.get('/post/myposts', config)
        dispatch({ type: MY_POST_SUCCESS, payload: data.posts })

    } catch (error) {
        dispatch({ type: MY_POST_FAILURE, payload: error.response.data.message })
    }
}


export const createPostAction = (text, dateAt) => async (dispatch) => {
    try {
        dispatch({ type: CREATE_POST_REQUEST })
        const token = JSON.parse(localStorage.getItem('token'))
        const config = {
            headers: {
                'Content-type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        }
        const { data } = await axios.post('/post/createpost', { text, dateAt }, config)
        dispatch({ type: CREATE_POST_SUCCESS, payload: data.post })

    } catch (error) {
        dispatch({ type: CREATE_POST_FAILURE, payload: error.response.data.message })
    }
}


export const deletePostAction = (id) => async (dispatch) => {
    try {
        dispatch({ type: DELETE_POST_REQUEST })
        const token = JSON.parse(localStorage.getItem('token'))
        const config = {
            headers: {
                'Content-type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        }
        const { data } = await axios.delete(`/post/deletepost/${id}`, config)
        dispatch({ type: DELETE_POST_SUCCESS, payload: data.message })

    } catch (error) {
        dispatch({ type: DELETE_POST_FAILURE, payload: error.response.data.message })
    }
}


export const otherUserPostsAction = (id) => async (dispatch) => {
    try {
        dispatch({ type: OTHER_USERS_POST_REQUEST })
        const token = JSON.parse(localStorage.getItem('token'))
        const config = {
            headers: {
                'Content-type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        }
        const { data } = await axios.get(`/post/userposts/${id}`, config)
        dispatch({ type: OTHER_USERS_POST_SUCCESS, payload: data.posts })

    } catch (error) {
        dispatch({ type: OTHER_USERS_POST_FAILURE, payload: error.response.data.message })
    }
}