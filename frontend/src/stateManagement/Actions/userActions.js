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
        console.log(data);
        dispatch({ type: 'USER_LOGIN_SUCCESS', payload: data.user })
    } catch (error) {
        dispatch({ type: 'USER_LOGIN_FAILURE', payload: error })
    }
}


export const userRegisterAction = (name, email, password) => async (dispatch) => {
    try {
        dispatch({ type: 'USER_REGISTER_REQUEST' })
        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }
        const { data } = await axios.post('/user/register', { name, email, password }, config)
        console.log(data);
        dispatch({ type: 'USER_REGISTER_SUCCESS', payload: data.user })
    } catch (error) {
        dispatch({ type: 'USER_REGISTER_FAILURE', payload: error })
    }
}
