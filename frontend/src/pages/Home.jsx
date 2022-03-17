import React, { useEffect } from 'react'
import Post from '../components/Post'
import User from '../components/User'
import { useDispatch, useSelector } from 'react-redux';
import { postOfFollowingAction } from '../StateManagement/Actions/PostActions';
import { getAllUsersAction, loadUserAction } from '../StateManagement/Actions/UserActions';
import { CircularProgress } from '@mui/material';


const Home = () => {
    const dispatch = useDispatch()

    const { loading, posts, error } = useSelector(state => state.postOfFollowing)

    useEffect(() => {
        // dispatch(getAllUsersAction())
        dispatch(postOfFollowingAction())
    }, [dispatch])

    return (
        <div>
            <h1>Home</h1><br />
            <h2>posts</h2>

            {loading && <CircularProgress />}
            {
                posts && posts.length > 0
                    ? posts.map((post) => (
                        <Post
                            key={post._id}
                            postId={post._id}
                            authorName={post.author.name}
                            postBody={post.body}
                            authorDP={post.author.displaypic}
                            likes={post.likes}
                        />
                    ))
                    : <h2>No post by followings</h2>
            }
            <User userId={"user._id"} name={"user.name"} displayPic={"user.displayPic"} />
        </div>
    )
}

export default Home