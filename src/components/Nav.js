import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => (
	<nav>
        <ul>
            <li><NavLink to={'/'} exact><i className="fas fa-home"></i><br/>Home</NavLink></li>
            <li><NavLink to={'/about'}><i className="fas fa-info-circle"></i><br/>About</NavLink></li>
            <li><NavLink to={'/favorite-movies'}><i className="far fa-heart"></i><br/>Favorites</NavLink></li>
        </ul>
	</nav>
);

export default Nav;