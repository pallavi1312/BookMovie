/**
 * Created by srivaspa on 22/04/18.
 */

import {createStore, applyMiddleware} from "redux";
import rootReducer from "../reducer/index";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
import thunk from "redux-thunk";

function configureStore(initialState) {
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunk, reduxImmutableStateInvariant())
    );
}
export default configureStore;