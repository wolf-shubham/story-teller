import { Button, CircularProgress, TextField } from '@material-ui/core'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Navbar from '../Components/Navbar'
import User from '../Components/User'
import { getAllUsersAction } from '../stateManagement/Actions/userActions'
import './Page.css'

const Search = () => {

    const dispatch = useDispatch()
    const [name, setName] = useState('')
    const [show, setShow] = useState(false)
    const { loading, users, error } = useSelector(state => state.allUsers)
    console.log(error);

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(getAllUsersAction(name))
        setShow(true)
    }

    return (
        <div className='homeContainer'>
            <div className="leftContainer">
                <Navbar />
            </div>
            <div className="centerContainer">
                {loading && <CircularProgress />}
                <form onSubmit={submitHandler} className='searchForm'>
                    <TextField
                        margin="normal"
                        style={{ width: '50%', marginRight: '2rem' }}
                        fontSize='larger'
                        id="name"
                        label="search..."
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        style={{ width: '20%', height: '2.3rem' }}
                        disabled={loading}
                    >Search
                    </Button>
                </form>
                <div className="searchResults" style={{ display: `${show ? 'block' : 'none'}` }}>
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
            <div className="rightContainer"></div>
        </div >
    )
}

export default Search