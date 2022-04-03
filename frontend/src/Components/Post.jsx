import { Button, Dialog } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { commentOnPostAction, deletePostAction, followingUsersPostsAction, likeUnlikePostAction, loggedUserPostsAction, otherUserPostsAction } from '../stateManagement/Actions/postActions'
import Comment from './Comment'
import User from './User'
import './Component.css'


const Post = ({
    postId,
    caption,
    likes = [],
    comments = [],
    authorImage,
    authorName,
    authorId,
    isLogedIn = false,
    isUser = false
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
            await dispatch(loggedUserPostsAction())
        } else if (isUser) {
            await dispatch(otherUserPostsAction(authorId))
        }
        else {
            await dispatch(followingUsersPostsAction())
        }
    }

    const addCommentHandler = async (e) => {
        e.preventDefault()
        await dispatch(commentOnPostAction(postId, addComment))
        if (isLogedIn) {
            await dispatch(loggedUserPostsAction())
        } else {
            await dispatch(followingUsersPostsAction())
        }
    }

    const deletePostHandler = async (e) => {
        e.preventDefault()
        await dispatch(deletePostAction(postId))
        if (isLogedIn) {
            await dispatch(loggedUserPostsAction())
        } else {
            await dispatch(followingUsersPostsAction())
        }
    }

    useEffect(() => {
        likes.forEach((item) => {
            if (item._id === user?._id) {
                setLiked(true)
            }
        })
    }, [likes, user?._id])


    return (
        <div className='postContainer'>
            <div className="userDetails">
                <img src={authorImage} alt="author pic" style={{ width: '35px', borderRadius: '50%' }} />
                <Link to={`/user/${authorId}`} style={{ color: 'black' }}><h2>{authorName}</h2></Link>
            </div>
            <div className="captionPost">
                <Link to={`/post/${postId}`} style={{ color: '#9D9D9D' }}>
                    <h3>{caption}</h3>
                </Link>

                <span>
                    <Button onClick={handleLike} style={{ border: 'none' }}>
                        {liked
                            ? <span className='material-icons' style={{ color: 'red' }}>favorite</span>
                            : <i className='material-icons' >favorite_border</i>
                        }
                    </Button>

                    {isLogedIn
                        ? <Button onClick={deletePostHandler} style={{ border: 'none' }}>
                            <span className='material-icons' >delete</span>
                        </Button>
                        : null}
                </span>
            </div>
            <Button
                style={{ border: 'none' }}
                onClick={() => setLikesUser(!likesUser)}
                disabled={likes.length === 0 ? true : false} >
                <h3>{likes.length} likes</h3>
            </Button>
            <Button style={{ border: 'none' }} disabled={comments.length === 0 ? true : false}>
                <h3>{comments.length} comments</h3>
            </Button>
            <Dialog open={likesUser} onClose={() => setLikesUser(!likesUser)} >
                <div className="likesDialogBox">
                    <h2>Liked By</h2>
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
                <div className="addCommentContainer">
                    <input type="text"
                        value={addComment}
                        onChange={(e) => setAddComment(e.target.value)}
                        placeholder='add comment ...' />
                    <button type="submit" className='btnAddComment'>comment</button>
                </div>
            </form>


            {/* <Dialog open={allComments} onClose={() => setAllComments(!allComments)}>
                
            </Dialog> */}
            <div className="DialogBox">
                {comments.length > 0
                    ? comments.map((comment) => (
                        <Comment
                            key={comment._id}
                            userId={comment.commentPostedBy._id}
                            name={comment.commentPostedBy.name}
                            comment={comment.comment}
                        />
                    ))
                    : <h3 style={{ marginLeft: "1rem", fontFamily: "cursive", color: '#346db4' }}>No comments yet.</h3>
                }
            </div>
        </div>
    )
}

export default Post