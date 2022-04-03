import React, { useState } from 'react'
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

    const [tab, setTab] = useState(window.location.pathname)
    console.log(tab);

    return (
        <div className='navbarConatiner'>
            <ul className='homeLinks'>
                <Link to='/' className='linkTag'
                    onClick={() => setTab('/')}>
                    <li className='activeLink'><HomeIcon fontSize="large" />
                        <span>Home</span></li>
                </Link>

                <Link to='/notification' className='linkTag'
                    onClick={() => setTab('/notification')}>
                    {
                        tab === ('/notification')
                            ? <li style={{ color: "red" }} ><NotificationsNoneIcon fontSize="large" />
                                <span>Notifications</span></li>
                            : <li style={{ color: "inherit" }} ><NotificationsNoneIcon fontSize="large" />
                                <span>Notifications</span></li>
                    }
                </Link>

                <Link to='/message' className='linkTag'
                    onClick={() => setTab('/message')}>
                    {
                        tab === ('/message')
                            ? <li style={{ color: "red" }} ><MessageOutlinedIcon fontSize="large" />
                                <span>Messages</span></li>
                            : <li style={{ color: "inherit" }} ><MessageOutlinedIcon fontSize="large" />
                                <span>Messages</span></li>
                    }
                </Link>

                <Link to='/profile' className='linkTag'
                    onClick={() => setTab('/profile')}>
                    {
                        tab === ('/profile')
                            ? <li style={{ color: "red" }} ><PermIdentityOutlinedIcon fontSize="large" />
                                <span>Profile</span></li>
                            : <li style={{ color: "inherit" }} ><PermIdentityOutlinedIcon fontSize="large" />
                                <span>Profile</span></li>
                    }
                </Link>

                <Link to='/search' className='linkTag'>
                    <li><SearchOutlinedIcon fontSize="large" />
                        <span>Search</span></li>
                </Link>

                <Link to='/books' className='linkTag'
                    onClick={() => setTab('/books')}>
                    {
                        tab === ('/books')
                            ? <li style={{ color: "red" }} ><MenuBookOutlinedIcon fontSize="large" />
                                <span>Books</span></li>
                            : <li style={{ color: "inherit" }} ><MenuBookOutlinedIcon fontSize="large" />
                                <span>Books</span></li>
                    }
                </Link>

                <Link to='/more' className='linkTag'
                    onClick={() => setTab('/more')}>
                    {
                        tab === ('/more')
                            ? <li style={{ color: "red" }} ><MoreOutlinedIcon fontSize="large" />
                                <span>More</span></li>
                            : <li style={{ color: "inherit" }} ><MoreOutlinedIcon fontSize="large" />
                                <span>More</span></li>
                    }

                </Link>
            </ul>
        </div>
    )
}

export default Navbar