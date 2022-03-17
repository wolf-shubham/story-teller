import axios from "axios";


export const postOfFollowingAction = () => async (dispatch) => {
    try {
        dispatch({
            type: 'PostOfFollowingRequest'
        })
        const userData = JSON.parse(localStorage.getItem('userInfo'))
        const config = {
            headers: {
                'Content-type': 'application/json',
                'Authorization': `Bearer ${userData}`
            }
        }
        const { data } = await axios.get('/post/followingposts', config)
        dispatch({
            type: 'PostOfFollowingSuccess',
            payload: data.posts
        })
    } catch (error) {
        dispatch({
            type: 'PostOfFollowingFailure',
            payload: error
        })
    }
}