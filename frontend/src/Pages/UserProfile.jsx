import { Button, CircularProgress, Dialog } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'
import CreatePost from '../Components/CreatePost'
import Post from '../Components/Post'
import User from '../Components/User'
import { otherUserPostsAction } from '../stateManagement/Actions/postActions'
import { otherUsersProfileAction, userDetailsAction } from '../stateManagement/Actions/userActions'


const UserProfile = () => {

    const dispatch = useDispatch()
    const params = useParams()
    const navigate = useNavigate()

    const [showFollowers, setshowFollowers] = useState(false)
    const [showFollowing, setshowFollowing] = useState(false)
    const [following, setFollowing] = useState(false)

    const { loading, posts } = useSelector((state) => state.otherUserPosts)
    const { loading: otherUserLoading, user } = useSelector((state) => state.otherUser)
    // const { loading: userLoading, user: userData } = useSelector((state) => state.userDetails)
    const { message: likeMessage } = useSelector((state) => state.likes)
    const { message: commentAdded } = useSelector((state) => state.addComment)

    console.log(posts)
    const followHandle = () => {
        setFollowing(!following)
    }


    useEffect(() => {
        dispatch(userDetailsAction())
        dispatch(otherUsersProfileAction(params.id))
        dispatch(otherUserPostsAction(params.id))
    }, [dispatch, params.id, commentAdded])

    return (
        <div>
            <h2>user profile...</h2>
            {loading && <CircularProgress />}
            <h1>profile</h1>
            <br />
            <div className="leftContainer">
                <h2>posts</h2>
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
                            />
                        ))
                        : <h2>No Posts Found of User.</h2>
                }
            </div>
            <div className="rightContainer">
                {
                    user && (
                        <>
                            <h2>user profile</h2>
                            <img src={user?.displaypic} alt="author pic" style={{ width: '50px', borderRadius: '50%' }} />
                            <h3>{user?.name}</h3>
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
                                <div className="DialogBox">
                                    <h4>followers...</h4>
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
                                <div className="DialogBox">
                                    <h4>following...</h4>
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

                                <Button style={{ background: following ? 'pink' : 'lightblue' }} onClick={followHandle}>
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