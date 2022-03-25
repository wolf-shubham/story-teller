import { Button, CircularProgress, TextField } from '@material-ui/core'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import User from '../Components/User'
import { getAllUsersAction } from '../stateManagement/Actions/userActions'

const Search = () => {

    const dispatch = useDispatch()
    const [name, setName] = useState('')
    const { loading, users, error } = useSelector(state => state.allUsers)
    console.log(error);

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(getAllUsersAction(name))
    }

    return (
        <div>
            <h2>search...</h2>
            {loading && <CircularProgress />}
            <form onSubmit={submitHandler} className='registerForm'>
                <TextField
                    margin="normal"
                    fullWidth
                    id="name"
                    label="search..."
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    disabled={loading}
                >Search
                </Button>
            </form>
            <div className="searchResults">
                {users && users.map((user) => (
                    <User
                        key={user._id}
                        userId={user._id}
                        avatar={user.displaypic}
                        name={user.name}
                    />
                ))}
            </div>
        </div>
    )
}

export default Search