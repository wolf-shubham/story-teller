import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from "redux-thunk"
import { composeWithDevTools } from 'redux-devtools-extension'
import { userDetailsReducer, userLoginRegisterReducer } from './Reducers/userReducers'
import { followingUsersPostsReducer } from './Reducers/postReducers'

const reducers = combineReducers({
    userInfo: userLoginRegisterReducer,
    user: userDetailsReducer,
    postsOfFollowingUsers: followingUsersPostsReducer
})

const userAlreadyLoggedIn = localStorage.getItem('token')
    ? JSON.parse(localStorage.getItem('token'))
    : null

const isAuthenticated = userAlreadyLoggedIn ? true : false
const initialState = {
    userInfo: {
        token: userAlreadyLoggedIn,
        isAuthenticated: isAuthenticated
    }
}

const middleware = [thunk]

const store = createStore(
    reducers,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store
