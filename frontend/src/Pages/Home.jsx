import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import CreatePost from '../Components/CreatePost'
import Post from '../Components/Post'
import User from '../Components/User'
import './Page.css'
import { followingUsersPostsAction } from '../stateManagement/Actions/postActions'
import { getAllUsersAction, userDetailsAction } from '../stateManagement/Actions/userActions'
import HomeIcon from '@mui/icons-material/Home';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import MoreOutlinedIcon from '@mui/icons-material/MoreOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const Home = () => {

    const dispatch = useDispatch()

    const { loading, posts, error } = useSelector(state => state.postsOfFollowingUsers)
    const { loading: userLoading, users, error: userError } = useSelector(state => state.allUsers)

    useEffect(() => {
        dispatch(userDetailsAction())
        dispatch(followingUsersPostsAction())
        dispatch(getAllUsersAction())
    }, [dispatch])

    return (
        <div className='homeContainer'>
            <div className="leftContainer">
                <ul className='homeLinks'>
                    <li className='activeLink'><HomeIcon fontSize="large" />
                        <span>Home</span></li>
                    <li><NotificationsNoneIcon fontSize="large" />
                        <span>Notifications</span></li>
                    <li><MessageOutlinedIcon fontSize="large" />
                        <span>Messages</span></li>
                    <Link to='/profile' className='linkTag'><li><PermIdentityOutlinedIcon fontSize="large" />
                        <span>Profile</span></li></Link>
                    <li><SearchOutlinedIcon fontSize="large" />
                        <span>Search</span></li>
                    <li><MenuBookOutlinedIcon fontSize="large" />
                        <span>Books</span></li>
                    <li><MoreOutlinedIcon fontSize="large" />
                        <span>More</span></li>
                </ul>
            </div>
            <div className="centerContainer" >
                <CreatePost />
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
                <h2>suggestions for you...</h2>
                <div className="rightUser">
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
        </div>
    )
}

export default Home