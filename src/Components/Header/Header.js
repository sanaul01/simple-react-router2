import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    const activeStyle={
        fontWeight:"bold",
        color:"green"
    }
    return (
        <nav>
            <NavLink to="/home"
                activeStyle={activeStyle}
            >Home</NavLink>
            <NavLink to="/about"
                activeStyle={activeStyle}
            >About</NavLink>
            <NavLink to="/friends"
                activeStyle={activeStyle}
            >Friends</NavLink>
        </nav>
    );
};

export default Header;