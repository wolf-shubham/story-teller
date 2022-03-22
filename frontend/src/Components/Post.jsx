import { Button, Dialog } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { commentOnPostAction, followingUsersPostsAction, likeUnlikePostAction } from '../stateManagement/Actions/postActions'
import Comment from './Comment'
import User from './User'

const Post = ({
    postId,
    caption,
    likes = [],
    comments = [],
    authorImage,
    authorName,
    authorId,
    isLogedIn = false
}) => {

    const dispatch = useDispatch()
    const [liked, setLiked] = useState(false)
    const [likesUser, setLikesUser] = useState(false)
    const [addComment, setAddComment] = useState('')
    // const [allComments, setAllComments] = useState(false)

    const { user } = useSelector((state) => state.userDetails)

    const handleLike = async () => {
        setLiked(!liked)
        await dispatch(likeUnlikePostAction(postId))
        if (isLogedIn) {
            console.log('user posts')
        } else {
            dispatch(followingUsersPostsAction())
        }
    }

    const addCommentHandler = async (e) => {
        e.preventDefault()
        await dispatch(commentOnPostAction(postId, addComment))
        // dispatch(followingUsersPosts())
    }

    useEffect(() => {
        likes.forEach((item) => {
            if (item._id === user._id) {
                setLiked(true)
            }
        })
    }, [likes, user._id])


    return (
        <div style={{ border: '2px solid darkgrey', margin: '10px', padding: '10px' }}>
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
            <Button
                style={{ border: 'none' }}
                onClick={() => setLikesUser(!likesUser)}
                disabled={likes.length === 0 ? true : false} >
                <h3>{likes.length} likes</h3>
            </Button>
            <Button style={{ border: 'none' }} disabled={comments.length === 0 ? true : false}>
                <h3>{comments.length} comments</h3>
            </Button>
            <Dialog open={likesUser} onClose={() => setLikesUser(!likesUser)}>
                <div className="DialogBox">
                    <h4>Liked By</h4>
                    {likes.map((like) => (
                        <User
                            key={like._id}
                            userId={like._id}
                            name={like.name}
                            avatar={like.displaypic}
                        />
                    ))}
                </div>
            </Dialog>
            <form onSubmit={addCommentHandler}>
                <input type="text"
                    value={addComment}
                    onChange={(e) => setAddComment(e.target.value)}
                    placeholder='add comment..' />
                <button type="submit">add</button>
            </form>
            {/* <Dialog open={allComments} onClose={() => setAllComments(!allComments)}>
                
            </Dialog> */}
            <div className="DialogBox">
                <h2>Comments...</h2>
                {comments.map((comment) => (
                    <Comment
                        key={comment._id}
                        userId={comment.commentPostedBy._id}
                        name={comment.commentPostedBy.name}
                        avatar={comment.commentPostedBy.displaypic}
                        comment={comment.comment}
                    />
                ))}
            </div>
        </div>
    )
}

export default Post