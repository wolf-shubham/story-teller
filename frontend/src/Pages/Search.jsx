import { Button, CircularProgress, TextField } from '@material-ui/core'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import User from '../Components/User'
import { getAllUsersAction } from '../stateManagement/Actions/userActions'
import './Page.css'

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
        <div className='searchContainer'>
            {loading && <CircularProgress />}
            <form onSubmit={submitHandler} className='searchForm'>
                <TextField
                    margin="normal"
                    style={{ width: '50%', marginRight: '2rem' }}
                    id="name"
                    label="search..."
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    style={{ width: '10%', height: '2.5rem' }}
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