import { TextField } from '@material-ui/core'
import { Avatar } from '@material-ui/core'
import { Button } from '@material-ui/core'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { userRegisterAction } from '../stateManagement/Actions/userActions'

const Register = () => {

    const dispatch = useDispatch()

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(userRegisterAction(name, email, password))
    }

    return (
        <div>
            {/* <img src={logo} alt="meeting" className='bgImage' /> */}
            <div className="register">
                <Avatar className='avatar'>
                </Avatar>
                <h1 className='titleRegister'>REGISTER</h1>
                <form onSubmit={submitHandler} className='registerForm'>
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
                    <h3 className='loginLink'>Already had an account ! <a href="/register">Login</a></h3>
                </form>
            </div>
        </div>
    )
}

export default Register