import { Button, CircularProgress, TextField } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { updateUserProfileAction, userDetailsAction } from '../stateManagement/Actions/userActions'


const UpdateProfile = () => {

    const [pic, setPic] = useState()

    const dispatch = useDispatch()
    const history = useNavigate()

    const { loading, user } = useSelector((state) => state.userDetails)

    useEffect(() => {
        dispatch(userDetailsAction())
    }, [dispatch])


    const postDetails = (profilepic) => {
        const file = profilepic

        const Reader = new FileReader();
        Reader.readAsDataURL(file);

        Reader.onload = () => {
            if (Reader.readyState === 2) {
                setPic(Reader.result);
            }
        }

        const data = new FormData()
        data.append("file", profilepic)
        data.append("upload_preset", "meeting_app")
        data.append("cloud_name", "wolf-shubham")
        fetch("https://api.cloudinary.com/v1_1/wolf-shubham/image/upload", {
            method: "post",
            body: data
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setPic(data.url)
            })
            .catch(err => {
                console.log(err)
            })
    }

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(updateUserProfileAction(pic))
        history('/profile')
    }


    return (
        <div>
            <h2>UpdateProfilePic</h2>
            <form className='updateForm' onSubmit={submitHandler}>
                <div className="updateProfile">
                    {loading && <CircularProgress />}
                    <div className="updateField">
                        {/* <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="name"
                            label="Name"
                            name="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        /> */}
                        <TextField
                            margin="normal"
                            fullWidth
                            name="pic"
                            label="Profile Pic"
                            type="file"
                            id="displaypic"
                            // value={pic}
                            onChange={(e) => postDetails(e.target.files[0])}
                        />
                    </div>

                    <img src={pic} alt="" className="updateImage" style={{ width: '350px' }} />
                </div>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                >UPDATE
                </Button>
            </form>
        </div>
    )
}

export default UpdateProfile