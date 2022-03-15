import { createReducer } from '@reduxjs/toolkit'

const initialState = {
    isAuthenticated: false
}

export const userReducer = createReducer(initialState, {
    LoginRequest: (state) => {
        state.loading = true
        state.isAuthenticated = false
    },
    LoginSuccess: (state, action) => {
        state.loading = false
        state.user = action.payload
        state.isAuthenticated = true
    },
    LoginFailure: (state, action) => {
        state.loading = false
        state.error = action.payload
        state.isAuthenticated = false
    },

    RegisterRequest: (state) => {
        state.loading = true
        state.isAuthenticated = false
    },
    RegisterSuccess: (state, action) => {
        state.loading = false
        state.user = action.payload
        state.isAuthenticated = true
    },
    RegisterFailure: (state, action) => {
        state.loading = false
        state.error = action.payload
        state.isAuthenticated = false
    },

    LoadUserRequest: (state) => {
        state.loading = true
        state.isAuthenticated = false
    },
    LoadUserSuccess: (state, action) => {
        state.loading = false
        state.user = action.payload
        state.isAuthenticated = true
    },
    LoadUserFailure: (state, action) => {
        state.loading = false
        state.error = action.payload
        state.isAuthenticated = false
    },

    logout: (state, action) => {

    }
})
