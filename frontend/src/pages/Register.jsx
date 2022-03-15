import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

const Register = () => {

    const history = useNavigate()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()
    // const userRegister = useSelector((state) => state.userLogin)
    // const { loading, userData, error } = userRegister

    const handleSubmit = (e) => {
        e.preventDefault()
        // dispatch(userRegisterAction(name, email, password))
    }

    return (
        <div>
            <h1>register...</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    label='name'
                    id="name"
                    required placeholder='name'
                    value={name}
                    onChange={(e) => setName(e.target.value)} />
                <input
                    type="email"
                    name="email"
                    id="email"
                    label='email'
                    required placeholder='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} />
                <input
                    type="password"
                    name="password"
                    id="password"
                    label='password'
                    required placeholder='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} />
                <button type="submit">Register</button>
                <p>Already have an account? <Link to='/login'>Login</Link></p>
            </form>
        </div>
    )
}

export default Register