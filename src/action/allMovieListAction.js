/**
 * Created by srivaspa on 22/04/18.
 */
import React from "react";
import * as types from "./actionTypes";
import _movie from "../api/MovieService";

export function loadAllMovieSuccess(allMovieList=[]) {
    return { type: types.LOAD_ALLMOVIE_SUCESS, allMovieList};
}

export function allMovieList() {
    return function (dispatch) {
        return _movie.allMovieList().then(allMovieList => {
            dispatch(loadAllMovieSuccess(allMovieList));
        }).catch(error => {
            throw(error);
        })
    }
}