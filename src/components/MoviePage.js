import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { API_KEY, BASE_URL_API, BASE_URL_POSTERS, STORAGE_FAVORITE_MOVIES } from '../globals/variables';
import { notAvailable} from '../images/not-available.jpg';
import { isItemInStorage, setStorage, removeFromStorage } from '../utilities/storageMaker';
import StarRatings from 'react-star-ratings';

const MoviePage = () => {

    let { id } = useParams();

    const [movieDataSingle, setMovieDataSingle] = useState(null);
    const [favoriteMovies, setFavoriteMovies] = useState();

    useEffect(() => {
        const fetchMovies = async () => {
            const res = await fetch(`${BASE_URL_API}${id}${API_KEY}`)
            const data = await res.json();
            setMovieDataSingle(data);
        }
        fetchMovies();
    }, [id]);

    const addMovie = () => {
        if(isItemInStorage(movieDataSingle) === true ){
            console.log('item exists');
        }else {
            const yourMovies = setStorage(movieDataSingle, STORAGE_FAVORITE_MOVIES, false);
            setFavoriteMovies(yourMovies);
        }   
    }
    const removeMovie = () => {
        const yourMovies = removeFromStorage(movieDataSingle.id);
        setFavoriteMovies(yourMovies);
    }
    return (
        
        <main>
        
        {movieDataSingle && 
        <section className="movie-wrapper">
        <img src={BASE_URL_POSTERS ? `${BASE_URL_POSTERS}${movieDataSingle.poster_path}` : {notAvailable} } 
                             alt={movieDataSingle.title} className="poster"></img>
            <div className="movie-data">
                <h2 className="title">{movieDataSingle.title}</h2>
                <p className="summary-movie-page">{movieDataSingle.overview}</p>
                <div className="colum-cont">
                    <div className="release-date">
                        <h3>Release date: </h3>
                        <p>{movieDataSingle.release_date}</p>
                    </div>
                    <div className="rating">
                        <StarRatings
                                    rating={movieDataSingle.vote_average/2}
                                    starDimension="18px"
                                    starSpacing="4px"
                                    starRatedColor="rgb(208, 91, 91)"
                                    starEmptyColor="rgb(255, 255, 255)"
                                    starHoverColor="rgb(208, 91, 91)"
                                    name='rating'
                                />
                                <span> {movieDataSingle.vote_average*10}%</span>
                        </div>
                </div>
                {!isItemInStorage(movieDataSingle)  && <button onClick={addMovie} className="favorite-btn not-added">Add Movie To Favorites <i className="far fa-heart"></i></button>}
                {isItemInStorage(movieDataSingle) && <button onClick={removeMovie} className="favorite-btn added">Remove Movie From Favorites <i className="fas fa-heart"></i></button>}
            </div>
        </section>
        
        }
        </main>
    );
}

export default MoviePage;