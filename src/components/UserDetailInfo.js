import React, { Component } from 'react';
import { connect } from 'react-redux';
import { UserData, UserName} from "../actions/UserActions";
import "../sass/User.sass";
import "../sass/UserDetailInfo.sass"


class UserDetailInfo extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className="userInfo-content">
            <img src={this.props.user.photo}></img>
            <p>Name:{this.props.user.title} {this.props.user.name} {this.props.user.last}</p>
            <p>Age:{this.props.user.age}</p>
            <p>Gender:{this.props.user.gender}</p>
            <p>{this.props.user.email}</p>
            <input type="text" onChange={(event)=> this.props.UserName(event.target.value)} />
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
            dispatch(UserName(name));
        }
    };
};
export default connect(mapStateToProps,mapDispatchToProps)(UserDetailInfo)
