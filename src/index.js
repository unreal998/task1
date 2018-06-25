import React from "react"
import ReactDOM from "react-dom"
import {Provider} from "react-redux";
import thunk from "redux-thunk"
import App from "./components/App"
import store from "./store"
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import UserInfo from "./components/UserInfo";

ReactDOM.render(
    
    <Provider store = {store}>
    <BrowserRouter >
         <Switch>
            <Route path="/" component={App}/>
        </Switch>
        {/* <App/> */}
    </BrowserRouter>
    </Provider>,
     document.getElementById("app")
);