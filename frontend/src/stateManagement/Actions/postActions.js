import axios from "axios"
import { FOLLOWING_USERS_POST_FAILURE, FOLLOWING_USERS_POST_REQUEST, FOLLOWING_USERS_POST_SUCCESS, LIKE_POST_FAILURE, LIKE_POST_REQUEST, LIKE_POST_SUCCESS, POST_COMMENT_FAILURE, POST_COMMENT_REQUEST, POST_COMMENT_SUCCESS } from "../Constants/postConstants"

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
        dispatch({ type: FOLLOWING_USERS_POST_SUCCESS, payload: data.posts })

    } catch (error) {
        dispatch({ type: FOLLOWING_USERS_POST_FAILURE, payload: error })
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
        dispatch({ type: LIKE_POST_FAILURE, payload: error })
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
        dispatch({ type: POST_COMMENT_FAILURE, payload: error })
    }
}