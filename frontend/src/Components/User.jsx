import React from 'react'
import { Link } from 'react-router-dom'

const User = ({ userId, avatar, name }) => {
    return (
        <div>
            <Link to={`/user/${userId}`}>
                <h3>{name}</h3>
            </Link>
            <img src={avatar} alt="display pic" style={{ width: '35px', borderRadius: '50%' }} />
        </div>
    )
}

export default User