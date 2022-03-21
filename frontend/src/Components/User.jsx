import React from 'react'
import { Link } from 'react-router-dom'

const User = ({ userId, avatar, name }) => {
    return (
        <div>
            <h2>users</h2>
            <br />
            <Link to={`/user/${userId}`}>
                <h3>{name}</h3>
            </Link>
            <img src={avatar} alt="display pic" />
        </div>
    )
}

export default User