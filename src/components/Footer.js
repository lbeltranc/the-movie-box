import React from 'react';
import logo from '../images/tmdb-logo2.png';

const d = new Date();
const y = d.getFullYear();

const Footer = () => (
    <footer>
        <img src={logo} alt="logo" />
        <p>&copy; {y} Laura Beltran</p>
    </footer>
);

export default Footer;