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
            <span>
                <Link to={`user/${userId}`} className="commentLinkTag">
                    {name}
                </Link>
            </span>
            {/* <img src={avatar} alt="author pic" style={{ width: '35px', borderRadius: '50%' }} /> */}
            <h4>{comment}</h4>
        </div >
    )
}

export default Comment