import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createPostAction, followingUsersPostsAction } from '../stateManagement/Actions/postActions'
import './Component.css'

const CreatePost = () => {

    const dispatch = useDispatch()

    const [post, setPost] = useState('')
    const { user } = useSelector((state) => state.userDetails)

    const submitPostHandler = async (e) => {
        e.preventDefault()
        await dispatch(createPostAction(post))
        setPost('')
        await dispatch(followingUsersPostsAction())
    }
    useEffect(() => {

    }, [dispatch])

    return (
        <div className='createPostContainer'>
            <div className="createPostTab">
                <img src={user?.displaypic} alt="author pic" style={{ width: '50px', borderRadius: '50%', border: '2px solid #fff', marginBottom: '20px' }} />
                <form onSubmit={submitPostHandler} className='createPostForm'>
                    <textarea
                        type="text"
                        name="content"
                        id="content"
                        placeholder='add ur story...'
                        value={post}
                        onChange={(e) => setPost(e.target.value)}
                    />
                    <span>
                        <button
                            type="submit"
                            className='btnCreatePost'
                        >add post</button>
                    </span>

                </form>
            </div>
        </div>
    )
}

export default CreatePost