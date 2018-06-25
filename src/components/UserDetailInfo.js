import React, { Component } from 'react';
import { connect } from 'react-redux';
import { UserData,UserName} from "../actions/UserActions";
import User from "./User";


class UserDetailInfo extends Component {
    render() {
        return (
            <div>
            <img src={this.props.user.photo}></img>
            <p>Name:{this.props.user.title} {this.props.user.name} {this.props.user.last}</p>
            <p>Age:{this.props.user.age}</p>
            <p>Gender:{this.props.user.gender}</p>
            <p>{this.props.user.email}</p>
            <input type="text" onClick={ ()=> this.props.UserName()} />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return{
        user: state.user
    };
};
const mapDispatchToProps = (dispatch) => {
    console.log(UserName)
    return{
        UserData: ()=>{
            dispatch(UserData());
        },
        UserName:(name)=>{
            dispatch(UserName());
        }
    };
};
export default connect(mapStateToProps,mapDispatchToProps)(UserDetailInfo)
