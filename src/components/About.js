import React from 'react';
import tmdbLogo from '../images/tmdb-logo.png';

const About = () => (
    <main>
        <section className="app-info">
            <h1>About The Movie Box</h1>
            <p>The Movie box is an application where users can see popular releases and upcoming movies.</p>
            <p>This product uses the TMDb API but is not endorsed or certified by TMDb</p>
            <img src={tmdbLogo} alt="Movie Poster" className="poster"></img>
        </section>
    </main>
)

export default About;