import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'

const Post = ({
    postId,
    postBody,
    likes = [],
    comments = [],
    authorName,
    authorId,
    authorDP }) => {

    const [liked, setLiked] = useState(false)
    const [likesUser, setLikesUser] = useState(false)
    const [addComment, setAddComment] = useState('')
    const [allComments, setAllComments] = useState(false)

    const handleLike = async () => {
        setLiked(!liked)
        // dispatch(likePostsAction(postId))
        // dispatch(userPostsAction());
    }

    return (
        <div>
            <h1>post</h1>
            <img src={authorDP} alt='display pic' style={{ width: '35px', borderRadius: '50%' }} />
            <Link to={`/user/${authorId}`}>
                <span>{authorName}</span>
            </Link>
            <h3>{postBody}</h3>
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


            {/* <Dialog open={likesUser} onClose={() => setLikesUser(!likesUser)}>
                    <div className="DialogBox">
                        <h4>Liked By</h4>
                        {likes.map((like) => (
                            <UserList
                                key={like._id}
                                userId={like._id}
                                name={like.name}
                                displaypic={like.displaypic}
                            />
                        ))}
                    </div>
                </Dialog>
                <Dialog open={allComments} onClose={() => setAllComments(!allComments)}>
                    <div className="DialogBox">
                        <h4>Comments...</h4>
                        {comments.map((comment) => (
                            <Comment
                                key={comment._id}
                                userId={comment.commentPostedBy._id}
                                name={comment.commentPostedBy.name}
                                displaypic={comment.commentPostedBy.displaypic}
                                comment={comment.text}
                            />
                        ))}
                    </div>
                </Dialog> */}
            {/* <form onSubmit={addCommentHandler}>
                    <input type="text"
                        value={addComment}
                        onChange={(e) => setAddComment(e.target.value)}
                        placeholder='add comment..' />
                    <button type="submit">add</button>
                </form> */}
            {/* </div> */}
        </div>
    )
}

export default Post