import axios from 'axios'

export const userLogin = (email, password) => async (dispatch) => {
    try {
        dispatch({
            type: 'LoginRequest'
        })
        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }
        const { data } = await axios.post('/user/login', { email, password }, config)
        dispatch({
            type: 'LoginSuccess',
            payload: data.user
        })
        localStorage.setItem('userInfo', JSON.stringify(data))
    } catch (error) {
        dispatch({
            type: 'LoginFailure',
            payload: error
        })
    }
}



export const loadUserAction = () => async (dispatch) => {
    try {
        dispatch({
            type: 'LoadUserRequest'
        })
        const userData = JSON.parse(localStorage.getItem('userInfo'))

        const config = {
            headers: {
                'Content-type': 'application/json',
                'Authorization': `Bearer ${userData.token}`
            }
        }
        const { data } = await axios.get('/user/myprofile', config)
        dispatch({
            type: 'LoadUserSuccess',
            payload: data.user
        })
    } catch (error) {
        dispatch({
            type: 'LoadUserFailure',
            payload: error
        })
    }
}