import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createPostAction } from '../stateManagement/Actions/postActions'

const CreatePost = () => {

    const dispatch = useDispatch()

    const [post, setPost] = useState('')
    const { createPost } = useSelector((state) => state.userPosts)


    useEffect(() => {

    }, [createPost])

    const submitPostHandler = async (e) => {
        e.preventDefault()
        dispatch(createPostAction(post))
    }

    return (
        <div>
            <h2>Create Post</h2>
            <form onSubmit={submitPostHandler}>
                <input
                    type="text"
                    name="content"
                    id="content"
                    placeholder='add ur story...'
                    value={post}
                    onChange={(e) => setPost(e.target.value)}
                />
                <button type="submit">create post</button>
            </form>
        </div>
    )
}

export default CreatePost