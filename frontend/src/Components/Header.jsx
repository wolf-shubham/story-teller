import { Link, NavLink } from 'react-router-dom'
import React from 'react'
import logo from '../Images/writer.png'
import './Component.css'
import { useSelector } from 'react-redux'


const Header = () => {

    const { user } = useSelector((state) => state.userDetails)
    return (
        <div className='header'>
            <div className="headerContainer">
                <Link to='/'>
                    <img src={logo} alt="logo" style={{ width: '40px' }} />
                </Link>
            </div>
            <div className="headerCenterContainer"></div>
            <div className="headerRightContainer">
                <img src={user?.displaypic} alt="display pic" style={{ width: '45px', borderRadius: '50%' }} />
                <h1>
                    <Link to='/profile' className='linkTag'>{user?.name}</Link>
                </h1>
            </div>
        </div>
    )
}

export default Header