import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Checkbox, FormControlLabel, TextField } from '@material-ui/core'
import { userLoginAction } from '../stateManagement/Actions/userActions'
import { Link, useNavigate } from 'react-router-dom'
import Error from "../Components/Error";
import './Page.css'

const Login = () => {

    const dispatch = useDispatch()
    const history = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { loading, token, error } = useSelector((state) => state.userInfo)

    useEffect(() => {
        if (token) {
            history('/')
        }
    }, [history, token])


    const submitHandle = async (e) => {
        e.preventDefault()
        await dispatch(userLoginAction(email, password))
    }

    return (
        <div className='registerContainer'>
            <div className="register">
                <div className="registerLeft">
                    <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta, dicta mollitia. Doloribus atque velit vero nesciunt, necessitatibus laudantium.</h1>
                    <br />
                    <h2 className='registerLink'>New Here ? <Link to="/register">Register</Link></h2>
                </div>
                <div className="registerRight">
                    <form onSubmit={submitHandle} className='loginForm'>
                        <h1 className='titleLogin'>LOGIN</h1>
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
                            disabled={loading}
                        >LOGIN</Button>
                    </form>
                    {error && <Error message={error} />
                    }
                </div>
            </div>

        </div>
    )
}

export default Login