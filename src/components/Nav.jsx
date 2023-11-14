import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <div>
            <nav>
                <div className='logo'><NavLink to="/">Logo</NavLink></div>
                <ul className='navMenu'>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink >Service</NavLink>
                    </li>
                    <li>
                        <NavLink>paramètres</NavLink>
                    </li>
                    <li>
                        <NavLink>contact</NavLink>
                    </li>
                </ul>
            </nav>
        
        </div>
    );
};

export default Nav;