/**
 * Created by srivaspa on 22/04/18.
 */
import React from "react";
import { Route,IndexRoute } from "react-router";

import App from "./components/AppComponent"
import movies from "./components/movie/movieComponent";
import allMovieList from "./components/movie/allMovieList";
import movieDetail from "./components/movie/movieDetail";

export default (
    <Route path="/" component={App}>
        <IndexRoute component={movies}/>
        <Route path="/bookmovie" component={allMovieList}/>
        <Route path="/bookmovie" component={allMovieList}/>
    </Route>
);

