/**
 * Created by srivaspa on 22/04/18.
 */

import React from "react";
import {connect} from 'react-redux';
import { allMovieList } from "../../action/allMovieListAction";
import MovieRow from "./MovieRow";
import MovieDetailComponent from "./movieDetail";
import { movieDetail } from "../../action/movieDetail";


class AllMovieList extends React.Component{
    constructor(props,context){
        super(props,context);
        this.state = {
            selectedIds : []
        }
        this.showMovieDetail = this.showMovieDetail.bind(this);
    };

    componentDidMount() {
        this.props.dispatch(allMovieList());
    }



    showMovieDetail(id){
        this.setState({ selectedIds:[...this.state.selectedIds, id] });
    }

    getMovies()
    {
        let productsArray= [];
        const { allMovieList } = this.props;
        allMovieList.forEach(product => {
            productsArray.push({Name:product.Name,Id:product.Id});

        });
        return productsArray;
    }

    render() {
        const allMovieList = this.getMovies();
        return (
            <div>
                <MovieRow movies={allMovieList} showMovieDetail={this.showMovieDetail} buttonVal = {true} />
                <div>
                <MovieDetailComponent selectedIds = {this.state.selectedIds}/>
                </div>
            </div>
        )
    }

}

function mapStateToProps(state){
    return {
        allMovieList: state.allMovieList
    }
}



export default connect(mapStateToProps)(AllMovieList);

