import { Button, CircularProgress, Dialog } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import Post from '../Components/Post'
import User from '../Components/User'
import { otherUserPostsAction } from '../stateManagement/Actions/postActions'
import { followUnfollowUsersAction, otherUsersProfileAction, userDetailsAction } from '../stateManagement/Actions/userActions'


const UserProfile = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const params = useParams()

    const [showFollowers, setshowFollowers] = useState(false)
    const [showFollowing, setshowFollowing] = useState(false)
    const [following, setFollowing] = useState()

    const { loading, posts } = useSelector((state) => state.otherUserPosts)
    const { loading: otherUserLoading, user } = useSelector((state) => state.otherUser)
    const { user: userData } = useSelector((state) => state.userDetails)
    // const { message: likeMessage } = useSelector((state) => state.likes)
    const { message: commentAdded } = useSelector((state) => state.addComment)
    const { message: follow } = useSelector((state) => state.followUnfollow)

    const followHandle = async () => {
        await dispatch(followUnfollowUsersAction(user._id))
        await dispatch(otherUsersProfileAction(user._id))
        setFollowing(!following)
    }

    if (params.id === userData?._id) {
        navigate('/profile')
    }

    useEffect(() => {
        dispatch(userDetailsAction())
        dispatch(otherUsersProfileAction(params.id))
        dispatch(otherUserPostsAction(params.id))

    }, [dispatch, params.id, commentAdded])

    useEffect(() => {
        if (user) {
            user.followers.forEach((item) => {
                if (item._id === userData?._id) {
                    setFollowing(true)
                } else {
                    setFollowing(false)
                }
            })
        }
    }, [userData?._id, user, follow])


    return (
        <div className='homeContainer'>

            <div className="leftContainer">
                <Navbar />
            </div>

            <div className="centerContainer">
                {loading && <CircularProgress />}
                {
                    posts && posts.length > 0
                        ? posts.map((post) => (
                            <Post
                                key={post._id}
                                postId={post._id}
                                caption={post.body}
                                likes={post?.likes}
                                comments={post?.comments}
                                authorImage={post.author.displaypic}
                                authorName={post.author.name}
                                authorId={post.author._id}
                                createdAt={post.createdAt}
                                isUser={true}
                            />
                        ))
                        : <h2>No Posts Found of User.</h2>
                }
            </div>
            <div className="rightProfileContainer">
                {otherUserLoading && <CircularProgress />}
                {
                    user && (
                        <>
                            <img src={user?.displaypic} alt="author pic" style={{ width: '200px', borderRadius: '50%' }} />
                            <p>{user?.name}</p>
                            <Button
                                style={{ border: 'none' }}
                                onClick={() => setshowFollowers(!showFollowers)}
                                disabled={user?.followers.length === 0 ? true : false} >
                                <h3>{user?.followers.length} followers</h3>
                            </Button>
                            <Button
                                style={{ border: 'none' }}
                                onClick={() => setshowFollowing(!showFollowing)}
                                disabled={user?.following.length === 0 ? true : false} >
                                <h3>{user?.following.length} following</h3>
                            </Button>
                            <Button
                                style={{ border: 'none' }}
                                disabled={user?.userposts.length === 0 ? true : false} >
                                <h3>{user?.userposts.length} posts</h3>
                            </Button>
                            <Dialog open={showFollowers} onClose={() => setshowFollowers(!showFollowers)}>
                                <div className="likesDialogBox">
                                    <h2>followers...</h2>
                                    {user && user?.followers.map((followers) => (
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
                                <div className="likesDialogBox">
                                    <h2>following...</h2>
                                    {user && user?.following.map((following) => (
                                        <User
                                            key={following._id}
                                            userId={following._id}
                                            name={following.name}
                                            avatar={following.displaypic}
                                        />
                                    ))}
                                </div>
                            </Dialog>
                            <div>

                                <Button style={{ background: following ? '#C74B50' : 'lightblue' }} onClick={followHandle}>
                                    {following ? "unfollow" : "follow"}
                                </Button>
                            </div>
                        </>
                    )
                }

            </div>

        </div>
    )
}

export default UserProfile