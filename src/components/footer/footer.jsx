import React from 'react';
import './footer.scss';


const Footer = () => {
    const styledIcons = {
        color: '#c6b08c',
        fontSize: 22 + 'px'
    }

    const arrayForLinks = [
        <i className="fab fa-facebook-f" style={styledIcons}/>,
        <i className="fab fa-twitter" style={styledIcons}/>,
        <i className="fab fa-linkedin-in" style={styledIcons}/>,
        <i className="fab fa-google-plus-g" style={styledIcons}/>
    ];

    return (
        <footer>
            <ul className='footer__links'>
                {
                    arrayForLinks.map((el, idx) => {
                        return (
                            <li className='footer__links-item' key={idx}>
                                {el}
                            </li>
                        )
                    })
                }
            </ul>

            <div className='footer__label'>
                <i>@</i> 2020 Jacombo`s.
            </div>
        </footer>
    );
};


export default Footer;