import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from "redux-thunk"
import { composeWithDevTools } from 'redux-devtools-extension'
import {
    deleteProfileReducer,
    followUnfollowUserReducer,
    getAllUsersReducer,
    otherusersProfileReducer,
    updateUserProfileReducer,
    userDetailsReducer,
    userLoginRegisterReducer
} from './Reducers/userReducers'
import {
    commentOnPostReducer,
    createPostReducer,
    deletePostReducer,
    followingUsersPostsReducer,
    likeUnlikePostReducer,
    loggedUserPostsReducer,
    otherUsersPostsReducer
} from './Reducers/postReducers'

const reducers = combineReducers({
    userInfo: userLoginRegisterReducer,
    userDetails: userDetailsReducer,
    postsOfFollowingUsers: followingUsersPostsReducer,
    allUsers: getAllUsersReducer,
    likes: likeUnlikePostReducer,
    addComment: commentOnPostReducer,
    userPosts: loggedUserPostsReducer,
    createPost: createPostReducer,
    deletePost: deletePostReducer,
    profileUpdate: updateUserProfileReducer,
    deleteAccount: deleteProfileReducer,
    otherUser: otherusersProfileReducer,
    otherUserPosts: otherUsersPostsReducer,
    followUnfollow: followUnfollowUserReducer,
})

const userAlreadyLoggedIn = localStorage.getItem('userData')
    ? JSON.parse(localStorage.getItem('userData'))
    : null

const userToken = localStorage.getItem('token')
    ? JSON.parse(localStorage.getItem('token'))
    : null

const isAuthenticated = userAlreadyLoggedIn ? true : false
const initialState = {
    userInfo: {
        token: userToken,
        isAuthenticated: isAuthenticated,
        user: userAlreadyLoggedIn
    }
}

const middleware = [thunk]

const store = createStore(
    reducers,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store
