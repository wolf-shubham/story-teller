import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CreatePost from '../Components/CreatePost'
import Post from '../Components/Post'
import './Page.css'
import { followingUsersPostsAction } from '../stateManagement/Actions/postActions'
import { getAllUsersAction, userDetailsAction } from '../stateManagement/Actions/userActions'
import Navbar from '../Components/Navbar'
import UserList from '../Components/UserList'
import { CircularProgress } from '@material-ui/core'
import Error from './Error'

const Home = () => {

    const dispatch = useDispatch()

    const { loading, posts, error } = useSelector(state => state.postsOfFollowingUsers)
    const { loading: userLoading, users, error: userError } = useSelector(state => state.allUsers)
    const { createPost: postofUser } = useSelector(state => state.createPost)
    // console.log(posts)

    useEffect(() => {
        dispatch(userDetailsAction())
        dispatch(followingUsersPostsAction())
        dispatch(getAllUsersAction())
    }, [dispatch])

    useEffect(() => {

    }, [postofUser])

    return (
        <div className='homeContainer'>
            <div className="leftContainer">
                <Navbar />
            </div>
            <div className="centerContainer" >
                <CreatePost />
                {loading && <CircularProgress />}
                {
                    posts && posts.length > 0
                        ? posts.map((post) => (
                            <Post
                                key={post._id}
                                postId={post._id}
                                caption={post.body}
                                likes={post.likes}
                                comments={post.comments}
                                authorImage={post.author.displaypic}
                                authorName={post.author.name}
                                authorId={post.author._id}
                                createdAt={post.createdAt}
                            />
                        ))
                        : <h2>{error && <Error message={error} />} </h2>
                }
            </div>
            <div className="rightContainer">
                <h2>suggestions for you...</h2>
                <div className="rightUser">
                    {userLoading && <CircularProgress />}
                    {
                        users && users.length > 0
                            ? users.map((user) => (
                                <UserList
                                    key={user._id}
                                    userId={user._id}
                                    avatar={user.displaypic}
                                    name={user.name}
                                />
                            ))
                            : <h2>{userError && <Error message={userError} />} </h2>
                    }
                </div>
            </div>
        </div>
    )
}

export default Home