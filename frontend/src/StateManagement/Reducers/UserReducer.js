import { createReducer } from '@reduxjs/toolkit'

const initialState = {}

export const userReducer = createReducer(initialState, {
    LoginRequest: (state) => {
        state.loading = true
    },
    LoginSuccess: (state, action) => {
        state.loading = false
        state.user = action.payload
    },
    LoginFailure: (state, action) => {
        state.loading = false
        state.error = action.payload
    },

    RegisterRequest: (state) => {
        state.loading = true
    },
    RegisterSuccess: (state, action) => {
        state.loading = false
        state.user = action.payload
    },
    RegisterFailure: (state, action) => {
        state.loading = false
        state.error = action.payload
    },

    logout: (state, action) => {

    }
})
