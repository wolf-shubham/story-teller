import React from 'react'
import { Link } from 'react-router-dom'

const Comment = ({
    userId,
    name,
    avatar,
    comment,
    commentId,
    postId
}) => {
    return (
        <div>
            <Link to={`user/${userId}`}>{name}</Link>
            <img src={avatar} alt="author pic" style={{ width: '35px', borderRadius: '50%' }} />
            <h4>{comment}</h4>
        </div>
    )
}

export default Comment