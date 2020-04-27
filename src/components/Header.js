import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo-movie.png';

const Header = () => (
	<header>
    	<Link to={'/'}>
			<img src={logo} alt="logo" />
		</Link>
	</header>
);


export default Header;