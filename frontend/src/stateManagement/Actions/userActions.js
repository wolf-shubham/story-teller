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
        dispatch({ type: 'USER_LOGIN_SUCCESS', payload: data.token })
        localStorage.setItem('token', JSON.stringify(data.token))
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
        dispatch({ type: 'USER_REGISTER_SUCCESS', payload: data.token })
        localStorage.setItem('token', JSON.stringify(data.token))
    } catch (error) {
        dispatch({ type: 'USER_REGISTER_FAILURE', payload: error })
    }
}


export const userDetailsAction = () => async (dispatch) => {
    try {
        dispatch({ type: 'USER_DETAILS_REQUEST' })
        const token = JSON.parse(localStorage.getItem('token'))
        const config = {
            headers: {
                'Content-type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        }
        const { data } = await axios.get('/user/myprofile', config)
        // console.log(data);
        dispatch({ type: 'USER_DETAILS_SUCCESS', payload: data })
    } catch (error) {
        dispatch({ type: 'USER_DETAILS_FAILURE', payload: error })
    }
}


export const getAllUsersAction = () => async (dispatch) => {
    try {
        dispatch({ type: 'GET_ALL_USER_REQUEST' })
        const token = JSON.parse(localStorage.getItem('token'))
        const config = {
            headers: {
                'Content-type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        }
        const { data } = await axios.get('/user/allusers', config)
        // console.log(data);
        dispatch({ type: 'GET_ALL_USER_SUCCESS', payload: data.users })
    } catch (error) {
        dispatch({ type: 'GET_ALL_USER_FAILURE', payload: error })
    }
}