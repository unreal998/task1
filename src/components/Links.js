import { Switch, Route } from 'react-router-dom';
import React, { Component } from 'react';
import UserInfo from "./UserInfo";
import UserDetailInfo from "./UserDetailInfo";

export default class Links extends Component {
  render() {
    return (
        <Switch>
            <Route path="/user" component={UserInfo}/>
            <Route path="/userInfo" component={UserDetailInfo}/>
        </Switch>
    )
  }
}
