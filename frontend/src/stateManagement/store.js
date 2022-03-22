import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from "redux-thunk"
import { composeWithDevTools } from 'redux-devtools-extension'
import { getAllUsersReducer, userDetailsReducer, userLoginRegisterReducer } from './Reducers/userReducers'
import { commentOnPostReducer, followingUsersPostsReducer, likeUnlikePostReducer } from './Reducers/postReducers'

const reducers = combineReducers({
    userInfo: userLoginRegisterReducer,
    userDetails: userDetailsReducer,
    postsOfFollowingUsers: followingUsersPostsReducer,
    allUsers: getAllUsersReducer,
    likes: likeUnlikePostReducer,
    addComment: commentOnPostReducer,
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
