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
        localStorage.setItem('userInfo', JSON.stringify(data.token))
    } catch (error) {
        dispatch({
            type: 'LoginFailure',
            payload: error
        })
    }
}



export const loadUserAction = () => async (dispatch) => {
    if (localStorage.getItem('userInfo')) {
        try {
            const userData = JSON.parse(localStorage.getItem('userInfo'))
            console.log(userData);

            dispatch({
                type: 'LoadUserRequest'
            })

            const config = {
                headers: {
                    'Content-type': 'application/json',
                    'Authorization': `Bearer ${userData}`
                }
            }
            const { data } = await axios.get('/user/myprofile', config)

            dispatch({
                type: 'LoadUserSuccess',
                payload: data.users
            })
        } catch (error) {
            dispatch({
                type: 'LoadUserFailure',
                payload: error
            })
        }
    }

}



export const getAllUsersAction = () => async (dispatch) => {
    try {
        dispatch({
            type: 'GetAllUsersRequest'
        })
        const userData = JSON.parse(localStorage.getItem('userInfo'))

        const { data } = await axios.get('/user/allusers', {
            headers: {
                'Content-type': 'application/json',
                'Authorization': `Bearer ${userData.token}`
            }
        })
        console.log(data);
        dispatch({
            type: 'GetAllUsersSuccess',
            payload: data.users
        })
    } catch (error) {
        dispatch({
            type: 'GetAllUsersFailure',
            payload: error
        })
    }
}