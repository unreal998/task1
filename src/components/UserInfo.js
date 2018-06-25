import React, { Component } from 'react';
import { UserData} from "../actions/UserActions";
import User from "./User";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import UserDetailInfo from "./UserDetailInfo";

class UserInfo extends Component {
  render() {
    return (
      <div>
        <User username={this.props.user.name} userage={this.props.user.age} userphoto = {this.props.user.photo}/>
        <Link to = "/userInfo"><h3>{this.props.user.name}</h3></Link>
      </div>
     
    )
  }
}
const mapStateToProps = (state) => {
    return{
        user: state.user
    };
};
const mapDispatchToProps = (dispatch) => {
    console.log(UserData)
    return{
        UserData: ()=>{
            dispatch(UserData());
        }
        
    };
};
export default connect(mapStateToProps,mapDispatchToProps)(UserInfo)