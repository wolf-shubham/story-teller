import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { userLogin } from '../StateManagement/Actions/UserActions'

const Login = () => {

    const history = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()
    // const userLogin = useSelector((state) => state.userLogin)
    // const { loading, userData, error } = userLogin

    const handleSubmit = async (e) => {
        e.preventDefault()
        dispatch(userLogin(email, password))
        // console.log(email, password);
    }

    return (
        <div>
            <h1>Login...</h1>
            <form onSubmit={handleSubmit}>
                {/* <label htmlFor="name">name</label> */}
                <input
                    type="email"
                    id="email"
                    label='email' required
                    placeholder='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} />

                <input
                    type="password"
                    id="password"
                    label='password' required
                    placeholder='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} />

                <button type="submit">Login</button>

                <p>New here? <Link to='/register'>Register</Link></p>
            </form>
        </div>
    )
}

export default Login