import React from 'react'
import Navbar from '../Components/Navbar'
import Test from '../Components/Test'
import './Page.css'


const Messages = () => {
    return (
        <div className='homeContainer'>
            <div className="leftContainer">
                <Navbar />
            </div>
            <div className='centerContainer'>
                <Test />
            </div>
            <div className="rightContainer">
            </div>
        </div>
    )
}

export default Messages