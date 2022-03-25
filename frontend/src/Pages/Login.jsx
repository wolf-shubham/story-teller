import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Avatar, Button, Checkbox, FormControlLabel, TextField } from '@material-ui/core'
import { userLoginAction } from '../stateManagement/Actions/userActions'
import { Link, useNavigate } from 'react-router-dom'
import Error from "../Components/Error";

const Login = () => {

    const dispatch = useDispatch()
    const history = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { token, error } = useSelector((state) => state.userInfo)

    // useEffect(() => {
    //     if (token) {
    //         history('/')
    //     }
    // }, [history, token])


    const submitHandle = async (e) => {
        e.preventDefault()
        // console.log(email, password);
        dispatch(userLoginAction(email, password))
        // history('/')
    }

    // useEffect(() => {
    //     if (error) {
    //         console.log(error);
    //     }
    // }, [error])
    return (
        <div>
            <div className="login">
                <Avatar className='avatar'>
                </Avatar>
                <h1 className='titleLogin'>LOGIN</h1>
                <form onSubmit={submitHandle} className='loginForm'>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        value={email}
                        autoFocus
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                    >LOGIN
                    </Button>
                    <h3 className='registerLink'>New Here ? <Link to="/register">Register</Link></h3>
                </form>
                {error &&
                    <>
                        {/* <h2>{error}</h2> */}
                        <Error
                            message={error}
                        />
                    </>
                }
            </div>
        </div>
    )
}

export default Login