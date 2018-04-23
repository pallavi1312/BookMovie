/**
 * Created by srivaspa on 22/04/18.
 */
import React from "react";
import * as types from "./actionTypes";
import _movie from "../api/MovieService";

export function loadMovieSuccess(movies=[]) {
    return { type: types.LOAD_MOVIE_SUCESS, movies};
}

export function movieData() {
    return function (dispatch) {
        return _movie.load().then(movies => {
            dispatch(loadMovieSuccess(movies));
        }).catch(error => {
            throw(error);
        })
    }
}