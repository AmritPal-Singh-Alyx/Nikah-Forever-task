import React, { useState } from 'react';
import '../Styles/NavBar.css';
import { Link } from 'react-scroll';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';


const NavBar = () => {

    const [isMobile, setIsMobile] = useState(false);

    const navItems = [{
        id: 1,
        title: 'Home'
    },
    {
        id: 2,
        title: 'Audio Chat'
    },
    {
        id: 3,
        title: 'Messaging'
    },
    {
        id: 4,
        title: 'Video Chat'
    },]
    return (

        <div className="nav-Container">
            <h1 className="nav-Logo">Nikah Forever</h1>
            <nav className="nav-List">
                <ul className={isMobile ? "nav-links-mobile" : "nav-Links"} onClick={()=> setIsMobile(false)}>
                    {navItems.map((menu) => (
                        <li className='List' key={menu.id}>
                            <Link to={menu.title} smooth={true} offset={-80} duration={500}>
                                {menu.title}
                            </Link>
                        </li>
                    ))}
                </ul>
                <button className='mobile-menu-icon' onClick={()=> setIsMobile(!isMobile)}>
                    {
                        isMobile ? (<CloseIcon />) : (<MenuIcon />)
                    }
                </button>
            </nav>
        </div>
    )
}

export default NavBar;