import {createStore, combineReducers, applyMiddleware} from "redux" ;
import {createLogger} from "redux-logger";
import user from "./reducers/userReducer";
import math from "./reducers/mathReducer";
import thunk from "redux-thunk";
import  rootSaga  from "./saga/saga";
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();


export default createStore(combineReducers({math, user}),
        {}, 
         //applyMiddleware( createLogger() , thunk)
        applyMiddleware( createLogger() , sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

