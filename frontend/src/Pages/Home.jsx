import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Post from '../Components/Post'
import User from '../Components/User'
import { followingUsersPostsAction } from '../stateManagement/Actions/postActions'
import { userDetailsAction } from '../stateManagement/Actions/userActions'

const Home = () => {

    const dispatch = useDispatch()

    const { loading, posts, error } = useSelector(state => state.postsOfFollowingUsers)
    console.log(posts);

    useEffect(() => {
        dispatch(userDetailsAction())
        dispatch(followingUsersPostsAction())
    }, [dispatch])

    return (
        <div>
            <h1>Home</h1>
            <br />
            <div className="leftContainer">left container</div>
            <br />
            <div className="centreContainer">
                <h2>posts...</h2>
                <br />
                {
                    posts && posts.length > 0
                        ? posts.map((post) => (
                            <Post
                                postId={'1234'}
                                caption={'post caption'}
                                likes
                                comments
                                authorImage={''}
                                authorName={'shubham'}
                                authorId={'12345'}

                            />
                        ))
                        : <h2>No Posts Found.</h2>
                }

            </div>
            <br />
            <div className="rightContainer">
                <User
                    userId={'1234'}
                    avatar={'https'}
                    name={'shubham'}
                />
            </div>
        </div>
    )
}

export default Home