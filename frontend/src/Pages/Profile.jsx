import { Button, CircularProgress, Dialog } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import './Page.css'
import CreatePost from '../Components/CreatePost'
import Post from '../Components/Post'
import User from '../Components/User'
import { loggedUserPostsAction } from '../stateManagement/Actions/postActions'
import { deleteProfileAction, userDetailsAction, userLogoutAction } from '../stateManagement/Actions/userActions'

function Profile() {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [showFollowers, setshowFollowers] = useState(false)
    const [showFollowing, setshowFollowing] = useState(false)

    const { loading, myPosts } = useSelector((state) => state.userPosts)
    const { user } = useSelector((state) => state.userInfo)
    const { loading: userLoading, user: userData } = useSelector((state) => state.userDetails)
    const { createPost } = useSelector((state) => state.createPost)
    const { deletePost } = useSelector((state) => state.deletePost)

    const deleteAccount = () => {
        dispatch(deleteProfileAction())
        dispatch(userLogoutAction())
        navigate('/')
    }

    const logoutHandler = () => {
        dispatch(userLogoutAction())
        navigate('/')
    }

    useEffect(() => {
        dispatch(userDetailsAction())
        dispatch(loggedUserPostsAction())
    }, [dispatch, createPost, deletePost])

    return (
        <div className='profileContainer'>
            <div className="leftProfileContainer">
                <h2>profile details</h2>
            </div>
            <div className="centerContainer">
                {loading && <CircularProgress />}
                <CreatePost />
                {
                    myPosts && myPosts.length > 0
                        ? myPosts.map((post) => (
                            <Post
                                key={post._id}
                                postId={post._id}
                                caption={post.body}
                                likes={post.likes}
                                comments={post.comments}
                                authorImage={post.author.displaypic}
                                authorName={post.author.name}
                                authorId={post.author._id}
                                isLogedIn={true}
                            />
                        ))
                        : <h2>No Posts Found.</h2>
                }
            </div>

            <div className="rightProfileContainer">
                <img src={userData?.displaypic} alt="author pic" style={{ width: '200px', borderRadius: '50%' }} />
                <p>{userData?.name}</p>

                <Button
                    style={{ border: 'none' }}
                    onClick={() => setshowFollowers(!showFollowers)}
                    disabled={userData?.followers.length === 0 ? true : false} >
                    <h3>{userData?.followers.length} followers</h3>
                </Button>
                <Button
                    style={{ border: 'none' }}
                    onClick={() => setshowFollowing(!showFollowing)}
                    disabled={userData?.following.length === 0 ? true : false} >
                    <h3>{userData?.following.length} following</h3>
                </Button>
                <Button
                    style={{ border: 'none' }}
                    disabled={userData?.userposts.length === 0 ? true : false} >
                    <h3>{userData?.userposts.length} posts</h3>
                </Button>
                <Dialog open={showFollowers} onClose={() => setshowFollowers(!showFollowers)}>
                    <div className="DialogBox">
                        <h4>followers...</h4>
                        {userData && userData?.followers.map((followers) => (
                            <User
                                key={followers._id}
                                userId={followers._id}
                                name={followers.name}
                                avatar={followers.displaypic}
                            />
                        ))}
                    </div>
                </Dialog>
                <Dialog open={showFollowing} onClose={() => setshowFollowing(!showFollowing)}>
                    <div className="DialogBox">
                        <h4>following...</h4>
                        {userData && userData?.following.map((following) => (
                            <User
                                key={following._id}
                                userId={following._id}
                                name={following.name}
                                avatar={following.displaypic}
                            />
                        ))}
                    </div>
                </Dialog>
                <div className='profileFunctionality'>
                    <Button
                        variant="contained"
                        style={{ background: '#26a69a' }}>
                        <Link to='/updateprofile' className='linkTag'>update profile</Link>
                    </Button>
                    <Button
                        variant="contained"
                        style={{ background: '#f44336' }}
                        onClick={deleteAccount}>
                        Delete Account
                    </Button>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={logoutHandler}>
                        LogOut
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Profile