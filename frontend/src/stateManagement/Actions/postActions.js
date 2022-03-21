import axios from "axios"
import { FOLLOWING_USERS_POST_FAILURE, FOLLOWING_USERS_POST_REQUEST, FOLLOWING_USERS_POST_SUCCESS } from "../Constants/postConstants"

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