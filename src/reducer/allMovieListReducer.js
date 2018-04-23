/**
 * Created by srivaspa on 22/04/18.
 */
import React from "react";
import * as types from "../action/actionTypes";

function createReducer(state=[],action) {
    switch (action.type){
        case types.LOAD_ALLMOVIE_SUCESS:
        {
            return action.allMovieList;
        }
        default:
        {
            return state
        }
    }
}

export default createReducer;