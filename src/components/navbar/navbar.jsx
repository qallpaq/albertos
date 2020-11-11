import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import './navbar.scss';
import Footer from "../footer";
import MobileNavbar from "../mobile-navbar";


const Navbar = () => {
    const links = [
        {title: 'home', link: '/', id: 1},
        {title: 'menu', link: '/menu', id: 2},
        {title: 'order', link: '/order', id: 3},
        {title: 'about', link: '/about', id: 4},
        {title: 'contact', link: '/contact', id: 5}
    ];

    const currentPage = useSelector(state => state.basic.currentPage);

    const [menu, setMenu] = useState(false);

    const closeMenu = () => {
        return setMenu(false)
    };

    return (
        <div className='navbar'>
            <div className='navbar__logo'>
                <img src="http://max-themes.net//demos/albertos/images/logo.png" alt="logo"/>
            </div>
            <ul className="navbar__links">
                {
                    links.map(el => {
                        return (
                            <li className={`navbar__links-item`}
                                key={el.title}>
                                <Link to={el.link}
                                      className={`navbar__link ${el.id === currentPage ? 'active' : ''}`}>
                                    {el.title}
                                </Link>
                            </li>
                        );
                    })
                }
            </ul>
            <div className='burger' onClick={() => setMenu(() => !menu)}>
                <i className="fas fa-bars"/>
            </div>
            <MobileNavbar menu={menu} closeMenu={closeMenu} links={links}/>
            <Footer/>
        </div>
    );
};


export default Navbar;