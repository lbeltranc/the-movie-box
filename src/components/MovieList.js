import React from 'react';
import { BASE_URL_POSTERS, MAX_SUMMARY_LETTERS } from '../globals/variables';
import { notAvailable} from '../images/not-available.jpg';
import { NavLink } from 'react-router-dom';
import StarRatings from 'react-star-ratings';

const createMovieContainer = (arr) => {
    return arr.map((item, i) => {
        if (i < 12 ){
            return(
                <div key={i} className="movie-container">
                    <div className="movie-card">
                        <img src={BASE_URL_POSTERS ? `${BASE_URL_POSTERS}${item.poster_path}` : {notAvailable} } 
                             alt={item.title} className="poster"></img>
                        <div className="movie-info">
                            <p className="summary">{item.overview.length > MAX_SUMMARY_LETTERS ? `${item.overview.substring(0, MAX_SUMMARY_LETTERS)}...` : item.overview}</p>
                            <div className="release-date">
                                <h3>Release date: </h3>
                                <p>{item.release_date}</p>
                            </div>
                            <NavLink className="more-info" to={`movie-page/${item.id}`}>More info...</NavLink>
                        </div>
                    </div>
                    <div className="title-container">
                        <NavLink className="more-info" to={`movie-page/${item.id}`}><h2>{item.title}</h2></NavLink>
                        <div className="rating">
                            <StarRatings
                                rating={item.vote_average/2}
                                starDimension="18px"
                                starSpacing="4px"
                                starRatedColor="rgb(208, 91, 91)"
                                starEmptyColor="rgb(255, 255, 255)"
                                starHoverColor="rgb(208, 91, 91)"
                                name='rating'
                            />
                            <span> {item.vote_average*10}%</span>
                        </div>
                    </div>
                </div>
            )
        }  
    })
}

// const moviesRating = () => {

//     return (
//         <StarRatings
//         rating={item.vote_average}
//         starDimension="20px"
//         starSpacing="15px"
//       />  
//     )
// }

export const MovieList = (props) => {
    return (
        <section className="movie-list">
        {createMovieContainer(props.movies)}
        </section>
    )
}
