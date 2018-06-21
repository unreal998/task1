import React from "react";
import ReactDOM from "react-dom";
import {createStore} from "redux";
import {Provider} from "react-redux";
import allReducers from "./components/reducers";
import UserStats from "./components/userStats"
import WebPage from "./components/comp1";
import babelPolyfill from 'babel-polyfill';


const store = createStore(allReducers);
console.log(store);

ReactDOM.render(
    <Provider store = {store}>
     <UserStats/>
    </Provider>,
    document.getElementById("app")
);