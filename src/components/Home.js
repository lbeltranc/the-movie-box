import React, { useState, useEffect } from 'react';
import { DEFAULT_SELECTOR, API_KEY, API_DATA_PAGE, BASE_URL_API } from '../globals/variables';
import { MovieList } from '../components/MovieList';

const Home = (props) => {
    
    let initialSelector = props.sortBy;

    const [sortBy, setSortBy] = useState(initialSelector);
    const [movieData, setMovieData] = useState(null);

    const handleChange = (e) => {
        setSortBy(e.target.value)
    }

    useEffect(() => {
        const fetchMovies = async () => {
            const res = await fetch(`${BASE_URL_API}${sortBy}${API_KEY}${API_DATA_PAGE}`)
            const data = await res.json();
            setMovieData(data.results);
        }
        fetchMovies();
    }, [sortBy]);

    return (
        <main>
        <section className="movie-selector">
            <form>
                <label htmlFor="sort-movie">Sort by: </label>
                <div className="selector-wrapper">
                    <select value={sortBy} onChange={handleChange} name="sort-by" id="sort-by">
                        <option value="popular">Popular</option>
                        <option value="top_rated">Top Rated</option>
                        <option value="now_playing">Now Playing</option>
                        <option value="upcoming">Upcoming</option>
                    </select>
                </div>
            </form>
        </section>
        {movieData && <MovieList movies={movieData}/> }
        </main>
    );

}

Home.defaultProps = {
    sortBy: DEFAULT_SELECTOR
}

export default Home;