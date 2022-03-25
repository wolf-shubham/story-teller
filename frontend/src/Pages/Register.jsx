import './Page.css'
import { TextField } from '@material-ui/core'
import { Button } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { userRegisterAction } from '../stateManagement/Actions/userActions'

const Register = () => {

    const dispatch = useDispatch()
    const history = useNavigate()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { token } = useSelector((state) => state.userInfo)

    useEffect(() => {
        if (token) {
            history('/')
        }
    }, [history, token])

    const submitHandler = async (e) => {
        e.preventDefault()
        await dispatch(userRegisterAction(name, email, password))
        history('/')
    }

    return (
        <div className='registerContainer'>
            {/* <img src={logo} alt="meeting" className='bgImage' /> */}
            <div className="register">
                <div className="registerRight">
                    <form onSubmit={submitHandler} className='registerForm'>
                        <h1 className='titleRegister'>REGISTER</h1>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="name"
                            label="Name"
                            name="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <TextField
                            margin="normal"
                            fullWidth
                            required
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        {/* <TextField
                        margin="normal"
                        fullWidth
                        name="pic"
                        label="Profile Pic"
                        type="file"
                        id="pic"
                        onChange={(e) => postDetails(e.target.files[0])}
                    /> */}
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                        >REGISTER
                        </Button>

                    </form>
                </div>
                <div className="registerLeft">
                    <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta, dicta mollitia. Doloribus atque velit vero nesciunt, necessitatibus laudantium.</h1>
                    <br />
                    <h2 className='loginLink'>Already had an account ! <Link to="/login">Login</Link></h2>
                </div>

            </div>
        </div>
    )
}

export default Register