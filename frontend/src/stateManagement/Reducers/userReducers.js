import {
    DELETE_PROFILE_FAILURE,
    DELETE_PROFILE_REQUEST,
    DELETE_PROFILE_SUCCESS,
    GET_ALL_USER_FAILURE,
    GET_ALL_USER_REQUEST,
    GET_ALL_USER_SUCCESS,
    UPDATE_USER_PROFILE_FAILURE,
    UPDATE_USER_PROFILE_REQUEST,
    UPDATE_USER_PROFILE_SUCCESS,
    USER_DETAILS_FAILURE,
    USER_DETAILS_REQUEST,
    USER_DETAILS_SUCCESS,
    USER_LOGIN_FAILURE,
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGOUT,
    USER_REGISTER_FAILURE,
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS
} from "../Constants/userConstants"

export const userLoginRegisterReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_LOGIN_REQUEST:
        case USER_REGISTER_REQUEST:
            return {
                loading: true,
                isAuthenticated: false
            }
        case USER_LOGIN_SUCCESS:
        case USER_REGISTER_SUCCESS:
            return {
                loading: false,
                userData: action.payload,
                isAuthenticated: true
            }
        case USER_LOGIN_FAILURE:
        case USER_REGISTER_FAILURE:
            return {
                loading: false,
                error: action.payload,
                isAuthenticated: false
            }
        case USER_LOGOUT:
            return {}
        default:
            return state
    }
}

// export const userRegisterReducer = (state = {}, action) => {
//     switch (action.type) {
//         case USER_REGISTER_REQUEST:
//             return {
//                 loading: true,
//                 isAuthenticated: false
//             }
//         case USER_REGISTER_SUCCESS:
//             return {
//                 loading: false,
//                 isAuthenticated: true,
//                 token: action.payload
//             }
//         case USER_REGISTER_FAILURE:
//             return {
//                 loading: false,
//                 isAuthenticated: false,
//                 error: action.payload
//             }
//         default:
//             return state
//     }
// }


export const userDetailsReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_DETAILS_REQUEST:
            return {
                loading: true,
            }
        case USER_DETAILS_SUCCESS:
            return {
                loading: false,
                user: action.payload
            }
        case USER_DETAILS_FAILURE:
            return {
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}


export const getAllUsersReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_ALL_USER_REQUEST:
            return {
                loading: true,
            }
        case GET_ALL_USER_SUCCESS:
            return {
                loading: false,
                users: action.payload
            }
        case GET_ALL_USER_FAILURE:
            return {
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}


export const updateUserProfileReducer = (state = {}, action) => {
    switch (action.type) {
        case UPDATE_USER_PROFILE_REQUEST:
            return {
                loading: true,
            }
        case UPDATE_USER_PROFILE_SUCCESS:
            return {
                loading: false,
                message: action.payload
            }
        case UPDATE_USER_PROFILE_FAILURE:
            return {
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}


export const deleteProfileReducer = (state = {}, action) => {
    switch (action.type) {
        case DELETE_PROFILE_REQUEST:
            return {
                loading: true,
            }
        case DELETE_PROFILE_SUCCESS:
            return {
                loading: false,
                message: action.payload
            }
        case DELETE_PROFILE_FAILURE:
            return {
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}