import { CircularProgress } from '@material-ui/core'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Post from '../Components/Post'
import { loggedUserPostsAction } from '../stateManagement/Actions/postActions'
import { userDetailsAction } from '../stateManagement/Actions/userActions'

function Profile() {

    const dispatch = useDispatch()

    const { loading, myPosts } = useSelector((state) => state.userPosts)
    const { user } = useSelector((state) => state.userInfo)
    const { loading: userLoading, user: userData } = useSelector((state) => state.userDetails)
    // console.log(userData?.displaypic);

    useEffect(() => {
        dispatch(userDetailsAction())
        dispatch(loggedUserPostsAction())
    }, [dispatch])

    return (
        <div>
            {loading && <CircularProgress />}
            <h1>profile</h1>
            <div className="leftContainer">
                <h2>posts</h2>
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

                            />
                        ))
                        : <h2>No Posts Found.</h2>
                }
            </div>
            <div className="rightContainer">
                <h2>user profile</h2>
                <img src={user.displaypic} alt="author pic" style={{ width: '50px', borderRadius: '50%' }} />
                <h3>{user.name}</h3>
                <h3>following : {user.following.length}</h3>
                <h3>followers : {user.followers.length}</h3>
                <h3>post : {user.userposts.length}</h3>
            </div>
        </div>
    )
}

export default Profile