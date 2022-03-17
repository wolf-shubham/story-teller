import { createReducer } from '@reduxjs/toolkit'

const initialState = {}


export const followingsPostsReducer = createReducer(initialState, {
    PostOfFollowingRequest: (state) => {
        state.loading = true
    },
    PostOfFollowingSuccess: (state, action) => {
        state.loading = false
        state.posts = action.payload
    },
    PostOfFollowingFailure: (state, action) => {
        state.loading = false
        state.error = action.payload
    },
})