import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from '../components/Header';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Home from '../components/Home';
import MoviePage from '../components/MoviePage';
import About from '../components/About';
import FavoriteMovies from '../components/FavoriteMovies';
import PageNotFound from '../components/PageNotFound';

const AppRouter = () => (
	<Router basename={'the-movie-box'}>
		<div className="wrapper" >
			<Header />
			<Nav />
			<Switch>
				<Route path={'/'} exact><Home /></Route>
				<Route path={'/movie-page/:id'}><MoviePage /></Route>
				<Route path={'/about'}><About /></Route>
				<Route path={'/favorite-movies'} exact><FavoriteMovies /></Route>
				<Route path={'/*'}><PageNotFound /></Route>
			</Switch>
			<Footer />
		</div>
	</Router>
);

export default AppRouter;
