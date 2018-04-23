/**
 * Created by srivaspa on 22/04/18.
 */

import "babel-polyfill";
import React from "react";
import { Router,browserHistory } from "react-router";
import { render } from "react-dom";
import configureStore from "./store/configureStore";
import { Provider } from "react-redux";
import route from "./route";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { movieData } from "./action/movieAction";

import './styles/styles.css';


const store = configureStore();


render(
    <Provider store={store} >
        <Router history={browserHistory} routes={route} />
    </Provider>,
    document.getElementById("app")

);