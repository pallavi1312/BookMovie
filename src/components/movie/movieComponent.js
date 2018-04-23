/**
 * Created by srivaspa on 22/04/18.
 */

import React from "react";
import {connect} from 'react-redux';
import { movieData } from "../../action/movieAction";
import MovieRow from "./MovieRow";


class MovieComponent extends React.Component{
    constructor(props,context){
        super(props,context);

    };

    componentDidMount() {
        this.props.dispatch(movieData());
    }

    getMovies()
    {
        let productsArray= [];
        const { movies } = this.props;
        movies.forEach(product => {
            productsArray.push(product.Name);

        });
        return productsArray;
    }

    render() {
        const movies = this.getMovies();
        return (
            <div>
                <div className="top"> TOP 10 MOVIES </div>
                <div className="table">
                <MovieRow   movies={movies}  buttonVal = {false}  />
                </div>
            </div>
        )
    }

}

function mapStateToProps(state){
    return {
        movies: state.movies
    }
}



export default connect(mapStateToProps)(MovieComponent);

