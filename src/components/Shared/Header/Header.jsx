import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <ul className='bg-[#258984] text-white flex justify-center space-x-4 py-2'>
            <li><NavLink className={({isActive}) =>isActive ? 'red':'green' } to="/">Home</NavLink></li>
            <li><NavLink className={({isActive}) =>isActive ? 'red':'green' } to="/register">Register</NavLink></li>
            <li><NavLink className={({isActive}) =>isActive ? 'red':'green' } to="/login">Login</NavLink></li>
        </ul>
    );
};

export default Header;