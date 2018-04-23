/**
 * Created by srivaspa on 22/04/18.
 */
import React from "react";
import MovieComponent from "./movieComponent";
import AllMovieList from "./allMovieList";
import MovieDetailComponent from "./movieDetail";
import { Router,browserHistory } from "react-router";


const MovieRow = (props) => {
    var movies = props.movies;
    var button = props.buttonVal;
    const {showMovieDetail} = props;

    function bookMovie() {
        window.location.href="https://in.bookmyshow.com/";
    }

    function showDetailWrapper(id){
        return function(){
            showMovieDetail(id);
        }
    }

    return(


        <div>
            {movies.map((p,index) =>  {

                if(button == true){

                }
                return (
                    <div>
                        {
                            button ? (
                                <div className="cell">
                                    <div className="col-sm-8" key={index}> {p.Name} </div>
                                    <div className="col-sm-4">
                                        <div className="row">
                                            <div className="col-sm-5"><input type="button" className="btn-success" value="BOOK NOW" onClick={bookMovie} ></input></div>
                                            <div className="col-sm-2"></div>
                                            <div className="col-sm-5"><input type="button" value="Compare" onClick={showDetailWrapper(p.Id)}></input></div>
                                        </div>
                                    </div>
                                </div>
                                  ) : (

                                    <div className="movie" key={index} > {p} </div>

                            )
                        }


                    </div>
                )
            })}

        </div>
    )
}

export default MovieRow;