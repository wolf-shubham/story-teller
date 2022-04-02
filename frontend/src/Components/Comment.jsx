import React from 'react'
import { Link } from 'react-router-dom'
import './Component.css'

const Comment = ({
    userId,
    name,
    avatar,
    comment,
    commentId,
    postId
}) => {
    return (
        <div className='commentContainer'>
            <span>
                <Link to={`user/${userId}`} style={{ color: 'black', fontFamily: "sans-serif", fontWeight: '600' }}>
                    {name}
                </Link>
            </span>
            {/* <img src={avatar} alt="author pic" style={{ width: '35px', borderRadius: '50%' }} /> */}
            <h2>{comment}</h2>
        </div>
    )
}

export default Comment