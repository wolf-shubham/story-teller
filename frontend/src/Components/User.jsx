import React from 'react'
import { Link } from 'react-router-dom'
import './Component.css'

const User = ({ userId, avatar, name }) => {
    return (
        <div className='userContainer'>
            <img src={avatar} alt="display pic" style={{ width: '35px', borderRadius: '50%' }} />
            <span>
                <Link to={`/user/${userId}`} className='linkTag'>
                    <h3>{name}</h3>
                </Link>
            </span>
        </div>
    )
}

export default User