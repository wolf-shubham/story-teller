import React from 'react'
import Navbar from '../Components/Navbar'
import Test from '../Components/Test'

const Notifications = () => {
    return (
        <div className='homeContainer'>
            <div className="leftContainer">
                <Navbar />
            </div>
            <div className='centerContainer'>
                <p className='workingText'>website under construction...</p>
                <Test />
            </div>
            <div className="rightContainer">
            </div>
        </div>
    )
}

export default Notifications