import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { userDetailsAction } from '../stateManagement/Actions/userActions'

const Home = () => {

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(userDetailsAction())
    }, [dispatch])

    return (
        <div>Home</div>
    )
}

export default Home