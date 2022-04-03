import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import './Component.css'


const UserList = ({ userId, avatar, name }) => {
    const { user } = useSelector((state) => state.userDetails)
    return (
        <div>
            <div className='userContainer'>
                {
                    user?._id === userId ? '' :
                        <div className="userDiv">
                            <img src={avatar} alt="display pic" style={{ width: '35px', borderRadius: '50%' }} />
                            <span>
                                <Link to={`/user/${userId}`} className='linkTag'>
                                    <h3>{name}</h3>
                                </Link>
                            </span>
                        </div>
                }
            </div>
        </div>
    )
}

export default UserList