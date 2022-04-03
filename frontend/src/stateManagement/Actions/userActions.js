import axios from "axios"
import {
    FOLLOW_USER_FAILURE,
    FOLLOW_USER_REQUEST,
    FOLLOW_USER_SUCCESS
} from "../Constants/userConstants"

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
        localStorage.setItem('userData', JSON.stringify(data.user))
        localStorage.setItem('token', JSON.stringify(data.token))
    } catch (error) {
        dispatch({ type: 'USER_LOGIN_FAILURE', payload: error.response.data.message })
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
        dispatch({ type: 'USER_REGISTER_SUCCESS', payload: data })
        localStorage.setItem('userData', JSON.stringify(data.newUser))
        localStorage.setItem('token', JSON.stringify(data.token))
    } catch (error) {
        dispatch({ type: 'USER_REGISTER_FAILURE', payload: error.response.data.message })
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
        dispatch({ type: 'USER_DETAILS_SUCCESS', payload: data.user })
    } catch (error) {
        dispatch({
            type: 'USER_DETAILS_FAILURE', payload: error.response.data.message
        })
    }
}


export const getAllUsersAction = (name = "") => async (dispatch) => {
    try {
        dispatch({ type: 'GET_ALL_USER_REQUEST' })
        const token = JSON.parse(localStorage.getItem('token'))
        const config = {
            headers: {
                'Content-type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        }
        const { data } = await axios.get(`/user/allusers/?name=${name}`, config)
        // console.log(data);
        dispatch({ type: 'GET_ALL_USER_SUCCESS', payload: data.users })
    } catch (error) {
        dispatch({ type: 'GET_ALL_USER_FAILURE', payload: error.response.data.message })
    }
}


export const updateUserProfileAction = (displaypic) => async (dispatch) => {
    try {
        dispatch({ type: 'UPDATE_USER_PROFILE_REQUEST' })
        // console.log(displaypic);
        const token = JSON.parse(localStorage.getItem('token'))
        const config = {
            headers: {
                'Content-type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        }
        const { data } = await axios.put('/user/updateprofile', {
            displaypic
        }, config)
        dispatch({ type: 'UPDATE_USER_PROFILE_SUCCESS', payload: data.message })
        dispatch({ type: 'USER_DETAILS_SUCCESS', payload: data.user })
    } catch (error) {
        dispatch({ type: 'UPDATE_USER_PROFILE_FAILURE', payload: error.response.data.message })
    }
}


export const deleteProfileAction = (displaypic) => async (dispatch) => {
    try {
        dispatch({ type: 'DELETE_PROFILE_REQUEST' })
        const token = JSON.parse(localStorage.getItem('token'))
        const config = {
            headers: {
                'Content-type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        }
        const { data } = await axios.delete('/user/deleteprofile', config)
        // localStorage.removeItem('userData')
        // localStorage.removeItem('token')
        dispatch({ type: 'DELETE_PROFILE_SUCCESS', payload: data.message })
    } catch (error) {
        dispatch({ type: 'DELETE_PROFILE_FAILURE', payload: error.response.data.message })
    }
}


export const otherUsersProfileAction = (id) => async (dispatch) => {
    try {
        dispatch({ type: 'OTHER_USERS_PROFILE_REQUEST' })
        const token = JSON.parse(localStorage.getItem('token'))
        const config = {
            headers: {
                'Content-type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        }
        const { data } = await axios.get(`/user/userprofile/${id}`, config)
        dispatch({ type: 'OTHER_USERS_PROFILE_SUCCESS', payload: data.user })
    } catch (error) {
        dispatch({ type: 'OTHER_USERs_PROFILE_FAILURE', payload: error.response.data.message })
    }
}


export const followUnfollowUsersAction = (id) => async (dispatch) => {
    try {
        dispatch({ type: FOLLOW_USER_REQUEST })
        const token = JSON.parse(localStorage.getItem('token'))
        const config = {
            headers: {
                'Content-type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        }
        const { data } = await axios.get(`/user/followuser/${id}`, config)
        dispatch({ type: FOLLOW_USER_SUCCESS, payload: data.message })
    } catch (error) {
        dispatch({ type: FOLLOW_USER_FAILURE, payload: error.response.data.message })
    }
}


export const userLogoutAction = () => async (dispatch) => {
    localStorage.removeItem('userData')
    localStorage.removeItem('token')
    dispatch({ type: 'USER_LOGOUT' })
}