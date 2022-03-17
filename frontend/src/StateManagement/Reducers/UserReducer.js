import { createReducer } from '@reduxjs/toolkit'

const initialState = {}

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



    logout: (state, action) => {

    }
})

export const loadUserReducer = createReducer(initialState, {
    LoadUserRequest: (state) => {
        state.loading = true
    },
    LoadUserSuccess: (state, action) => {
        state.loading = false
        state.user = action.payload
    },
    LoadUserFailure: (state, action) => {
        state.loading = false
        state.error = action.payload
    },
})


export const getAllUsersReducer = createReducer(initialState, {
    GetAllUsersRequest: (state) => {
        state.loading = true
    },
    GetAllUsersSuccesss: (state, action) => {
        state.loading = false
        state.users = action.payload
        state.value = 20
    },
    GetAllUsersFailure: (state, action) => {
        state.loading = false
        state.error = action.payload
    }
})