import {createStore, combineReducers, applyMiddleware} from "redux" ;
import {createLogger} from "redux-logger";
import user from "./reducers/userReducer";
import math from "./reducers/mathReducer";
import thunk from "redux-thunk";

export default createStore(combineReducers({math, user}),
        {}, 
        applyMiddleware( createLogger() , thunk)
);