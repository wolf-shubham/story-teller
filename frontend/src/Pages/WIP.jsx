import React from 'react'
import pogo from '../Images/gears.gif'
import Navbar from '../Components/Navbar'
import './Page.css'

const WIP = () => {
    return (
        <div className="homeContainer">
            <div className='leftContainer'>
                <Navbar />
            </div>
            <div className="centerContainer" >
                <span style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <img src={pogo} alt=""

                    />
                </span>

            </div>
            <div className="rightContainer"></div>
        </div>

    )
}

export default WIP