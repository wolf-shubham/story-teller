import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Post from '../Components/Post'
import User from '../Components/User'
import { followingUsersPostsAction } from '../stateManagement/Actions/postActions'
import { getAllUsersAction, userDetailsAction } from '../stateManagement/Actions/userActions'

const Home = () => {

    const dispatch = useDispatch()

    const { loading, posts, error } = useSelector(state => state.postsOfFollowingUsers)
    const { loading: userLoading, users, error: userError } = useSelector(state => state.allUsers)
    // console.log(posts);

    useEffect(() => {
        dispatch(userDetailsAction())
        dispatch(followingUsersPostsAction())
        dispatch(getAllUsersAction())
    }, [dispatch])

    return (
        <div>
            <h1>Home</h1>
            <br />
            <div className="leftContainer">left container</div>
            <br />
            <div className="centreContainer" >
                <h2 >posts...</h2>
                <br />
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

                            />
                        ))
                        : <h2>No Posts Found.</h2>
                }


            </div>
            <br />
            <div className="rightContainer">
                <h2>users</h2>
                <br />
                {
                    users && users.length > 0
                        ? users.map((user) => (
                            <User
                                key={user._id}
                                userId={user._id}
                                avatar={user.displaypic}
                                name={user.name}
                            />
                        ))
                        : <h2>No Users Available.</h2>
                }

            </div>
        </div>
    )
}

export default Home