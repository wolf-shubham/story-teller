import { configureStore } from '@reduxjs/toolkit'
import { followingsPostsReducer } from './Reducers/PostReducers'
import { getAllUsersReducer, loadUserReducer, userReducer } from './Reducers/UserReducer'


const store = configureStore({
    reducer: {
        user: userReducer,
        loadUserData: loadUserReducer,
        postOfFollowing: followingsPostsReducer,
        allusers: getAllUsersReducer
    }
})

export default store