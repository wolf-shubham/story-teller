import { Button } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { likeUnlikePostAction } from '../stateManagement/Actions/postActions'

const Post = ({
    postId,
    caption,
    likes = [],
    comments = [],
    authorImage,
    authorName,
    authorId
}) => {

    const dispatch = useDispatch()
    const [liked, setLiked] = useState(false)
    const [likesUser, setLikesUser] = useState(false)
    // const [addComment, setAddComment] = useState('')
    const [allComments, setAllComments] = useState(false)

    const { user } = useSelector((state) => state.userDetails)

    const handleLike = async () => {
        setLiked(!liked)
        dispatch(likeUnlikePostAction(postId))
        // dispatch(userPostsAction());
    }

    useEffect(() => {
        likes.forEach((item) => {
            if (item._id === user._id) {
                setLiked(true)
            }
        })
    }, [likes, user._id])


    return (
        <div>
            <Link to={`/post/${postId}`}>
                <h3>{caption}</h3>
            </Link>
            <img src={authorImage} alt="author pic" style={{ width: '35px', borderRadius: '50%' }} />
            <Link to={`/user/${authorId}`}><h4>{authorName}</h4></Link>

            <Button onClick={handleLike} style={{ border: 'none' }}>
                {liked
                    ? <span className='material-icons' style={{ color: 'red' }}>favorite</span>
                    : <i className='material-icons' >favorite_border</i>
                }
            </Button>
            <br />
            <Button style={{ border: 'none' }} onClick={() => setLikesUser(!likesUser)} >
                <h3>{likes.length} likes</h3>
            </Button>
            <Button style={{ border: 'none' }} onClick={() => setAllComments(!allComments)} disabled={comments.length === 0 ? true : false}>
                <h3>{comments.length} comments</h3>
            </Button>
        </div>
    )
}

export default Post