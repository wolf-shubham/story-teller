import React from 'react'
import Post from '../components/Post'
import User from '../components/User'

const Home = () => {

    return (
        <div>
            <h1>Home</h1>
            <Post authorName={'shubham'} postBody={'post body of post'} authorDP={'https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg'} />
            <User userId={"user._id"} name={"user.name"} displayPic={"user.displayPic"} />
        </div>
    )
}

export default Home