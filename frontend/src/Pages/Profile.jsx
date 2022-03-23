import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loggedUserPostsAction } from '../stateManagement/Actions/postActions'

const Profile = () => {

    const dispatch = useDispatch()

    const { loading, myPosts } = useSelector((state) => state.userPosts)


    useEffect(() => {
        dispatch(loggedUserPostsAction())
    }, [dispatch])

    return (
        <div>
            <h1>profile</h1>
            <div className="leftContainer">left side posts</div>
            <div className="rightContainer">right side</div>
        </div>
    )
}

export default Profile