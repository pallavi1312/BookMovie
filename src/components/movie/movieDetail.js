/**
 * Created by srivaspa on 22/04/18.
 */

import React from "react";
import {connect} from 'react-redux';
import { movieDetail } from "../../action/movieDetail";
import MovieRow from "./MovieRow";


class MovieDetailComponent extends React.Component{
    constructor(props,context){
        super(props,context);

    };

    componentWillReceiveProps(nextProps) {
        if (nextProps.selectedIds) {
            this.props.dispatch(movieDetail(nextProps.selectedIds))
        }
    }


    render() {
        const { detail } = this.props;
        return(
            <div>
            {
                detail.map((mov, index)=>{
                            return (
                                <div key={index} className="table">
                            <div className="header">
                                <div className="col-md-3">MOVIE NAME</div>
                                <div className="col-md-3">MOVIE DURATION</div>
                                <div className="col-md-3">MOVIE DISCRIPTION</div>
                                <div className="col-md-3">MOVIE DIRECTOR</div>
                            </div>
                            <div className="rowGroup">
                                <div className="row">
                                    <div className="col-md-3">{mov.Name}</div>
                                    <div className="col-md-3">{mov.Duration}</div>
                                    <div className="col-md-3">{mov.Description}</div>
                                    <div className="col-md-3"> {mov.Director}</div>
                                </div>
                            </div>
                        </div>
                            )

                    })
            }
            </div>

        )
    }

}

function mapStateToProps(state){
    return {
        detail: state.detail
    }
}



export default connect(mapStateToProps)(MovieDetailComponent);

