/**
 * Created by srivaspa on 22/04/18.
 */
import axios from "axios";
import { movieData } from "../action/movieAction";

const API_URL = "https://interview.zocdoc.com/api/1/FEE/MoviesByRank?authToken=3b502b3f-b1ff-4128-bd99-626e74836d9c&startRankIndex=1&numMovies=10";
const API_URL2 = "https://interview.zocdoc.com/api/1/FEE/AllMovies?authToken=3b502b3f-b1ff-4128-bd99-626e74836d9c";
const API_URL3 = "https://interview.zocdoc.com/api/1/FEE/MovieDetails?authToken=3b502b3f-b1ff-4128-bd99-626e74836d9c&movieIds=";


class MovieService{

    static load(){
        return axios.get(API_URL)
            .then(function (response) {
                return response.data;
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    static allMovieList(){
        return axios.get(API_URL2)
            .then(function (response) {
                return response.data;
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    static movieDetail(ids){
        var idParas = ids.map((id) => "movieIds="+id ).join("&");
        return axios.get(API_URL3+"&"+idParas)
            .then(function (response) {
                return response.data;
            })
            .catch(function (error) {
                console.log(error);
            });
    }


}

export default MovieService