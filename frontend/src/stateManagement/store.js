import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from "redux-thunk"
import { composeWithDevTools } from 'redux-devtools-extension'
import { userDetailsReducer, userLoginReducer } from './Reducers/userReducers'

const reducers = combineReducers({
    userInfo: userLoginReducer,
    user: userDetailsReducer,
})

const userAlreadyLoggedIn = localStorage.getItem('token')
    ? JSON.parse(localStorage.getItem('token'))
    : null

const initialState = {
    userInfo: {
        token: userAlreadyLoggedIn,
        isAuthenticated: true
    }
}

const middleware = [thunk]

const store = createStore(
    reducers,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store
