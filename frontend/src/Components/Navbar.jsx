import React from 'react'
import { Link } from 'react-router-dom'
import HomeIcon from '@mui/icons-material/Home';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import MoreOutlinedIcon from '@mui/icons-material/MoreOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import './Component.css'

const Navbar = () => {
    return (
        <div className='navbarConatiner'>
            <ul className='homeLinks'>
                <Link to='/' className='linkTag'>
                    <li className='activeLink'><HomeIcon fontSize="large" />
                        <span>Home</span></li>
                </Link>
                <Link to='/unfinished' className='linkTag'>
                    <li><NotificationsNoneIcon fontSize="large" />
                        <span>Notifications</span></li>
                </Link>
                <Link to='/unfinished' className='linkTag'>
                    <li><MessageOutlinedIcon fontSize="large" />
                        <span>Messages</span></li>
                </Link>
                <Link to='/profile' className='linkTag'><li><PermIdentityOutlinedIcon fontSize="large" />
                    <span>Profile</span></li></Link>
                <Link to='/search' className='linkTag'>
                    <li><SearchOutlinedIcon fontSize="large" />
                        <span>Search</span></li>
                </Link>
                <Link to='/unfinished' className='linkTag'>
                    <li><MenuBookOutlinedIcon fontSize="large" />
                        <span>Books</span></li>
                </Link>
                <Link to='/unfinished' className='linkTag'>
                    <li><MoreOutlinedIcon fontSize="large" />
                        <span>More</span></li>
                </Link>
            </ul>
        </div>
    )
}

export default Navbar