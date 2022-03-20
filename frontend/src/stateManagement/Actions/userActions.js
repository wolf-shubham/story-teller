import axios from "axios"

export const userLoginAction = (email, password) => async (dispatch) => {
    try {
        dispatch({ type: 'USER_LOGIN_REQUEST' })
        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }
        const { data } = await axios.post('/user/login', { email, password }, config)
        dispatch({ type: 'USER_LOGIN_SUCCESS', payload: data })
    } catch (error) {
        dispatch({ type: 'USER_LOGIN_FAILURE', payload: error })
    }
}