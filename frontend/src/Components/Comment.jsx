import React from 'react'
import { Link } from 'react-router-dom'
import './Component.css'

const Comment = ({
    userId,
    name,
    comment,
    commentId,
    postId
}) => {
    return (
        <div className='commentContainer'>
            <Link to={`/user/${userId}`} className="commentLinkTag">
                {name}
            </Link>
            <h4>{comment}</h4>
        </div >
    )
}

export default Comment