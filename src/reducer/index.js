/**
 * Created by srivaspa on 22/04/18.
 */

import React from "react";
import {combineReducers} from "redux";
import movies from "./movieReducer";
import allMovieList from "./allMovieListReducer";
import detail from "./movieDetailReducer";


const rootReducer = combineReducers({
    movies,
    allMovieList,
    detail
})


export default rootReducer;