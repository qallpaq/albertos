import React from "react";
import {Link} from "react-router-dom";
import './mobile-navbar.scss';


const MobileNavbar = ({menu, closeMenu, links}) => {
    return (
        <div className={`header-menu-mobile ${menu && 'active'}`}>
            <ul className='header__links-mobile'
                onClick={(e) => {
                    if (e.target.classList.contains('header-link-mobile__item')) {
                        closeMenu();
                    }
                }}>
                {
                    links.map(el => {
                        return (
                            <li className={`header-link-mobile`}
                                key={el.title}>
                                <Link to={el.link}>
                                    <span className='header-link-mobile__item'>{el.title}</span>
                                </Link>
                            </li>
                        );
                    })
                }
            </ul>
        </div>
    );
};


export default MobileNavbar;