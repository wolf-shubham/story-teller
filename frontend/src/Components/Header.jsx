import { Link } from 'react-router-dom'
import React from 'react'
import logo from '../Images/writer.png'
import './Component.css'


const Header = () => {
    return (
        <div className='header'>
            <div className="headerContainer">
                <Link to='/'>
                    <img src={logo} alt="logo" style={{ width: '40px' }} />
                </Link>
            </div>
        </div>
    )
}

export default Header