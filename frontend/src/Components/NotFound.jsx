import React from 'react'
import Error from '../Images/404.gif'

const NotFound = () => {
    return (
        <div className="notFoundContainer">
            <h1>404 Error Page Not Found...</h1>
            <img src={Error} alt='404 page not found' style={{ width: '50%' }} />
        </div>
    )
}

export default NotFound