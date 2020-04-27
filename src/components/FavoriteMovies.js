import React from 'react';
import { MovieList } from '../components/MovieList';
import { getStorage} from '../utilities/storageMaker';
import { NavLink } from 'react-router-dom';

const FavoriteMovies = (props) => {

    const yourMovies = getStorage();
    console.log(yourMovies)

    return (
        <main>
            {(yourMovies.length !== 0) ? <MovieList movies={yourMovies}/> : <p>Sorry, you have no favorited movies.<br/> Return to the <NavLink to={'/'} exact>Home</NavLink> to add a favourite movie <i className="far fa-heart"></i></p> }
        </main>
    )

}

export default FavoriteMovies;