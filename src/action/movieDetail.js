/**
 * Created by srivaspa on 22/04/18.
 */
import React from "react";
import * as types from "./actionTypes";
import _movie from "../api/MovieService";

export function loadMovieDetailSuccess(detail=[]) {
    return { type: types.LOAD_MOVIE_DETAIL_SUCESS, detail};
}

export function movieDetail(ids) {
    return function (dispatch) {
        return _movie.movieDetail(ids).then(detail => {
            dispatch(loadMovieDetailSuccess(detail));
        }).catch(error => {
            throw(error);
        })
    }
}