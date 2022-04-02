import React from 'react'
import { Link } from 'react-router-dom'
import HomeIcon from '@mui/icons-material/Home';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import MoreOutlinedIcon from '@mui/icons-material/MoreOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const Navbar = () => {
    return (
        <div className='navbarConatiner'>
            <ul className='homeLinks'>
                <li className='activeLink'><HomeIcon fontSize="large" />
                    <span>Home</span></li>
                <li><NotificationsNoneIcon fontSize="large" />
                    <span>Notifications</span></li>
                <li><MessageOutlinedIcon fontSize="large" />
                    <span>Messages</span></li>
                <Link to='/profile' className='linkTag'><li><PermIdentityOutlinedIcon fontSize="large" />
                    <span>Profile</span></li></Link>
                <li><SearchOutlinedIcon fontSize="large" />
                    <span>Search</span></li>
                <li><MenuBookOutlinedIcon fontSize="large" />
                    <span>Books</span></li>
                <li><MoreOutlinedIcon fontSize="large" />
                    <span>More</span></li>
            </ul>
        </div>
    )
}

export default Navbar