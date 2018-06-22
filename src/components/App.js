import React from "react";
import User from "./User"
import Main from "./Main"
import { connect } from 'react-redux';
import { UserData} from "../actions/UserActions";
class App extends React.Component{
    constructor(props){
        super(props);
    }
    changeUsername(){

    }
    // componentDidMount(){
    //     this.currentData = changeUsername(()=> this.props.UserData())
    // }
    componentDidMount(){
        this.props.UserData()
    }
    render(){
        return(
            <div className="container">
                <Main changeUsername={()=>this.props.UserData()}/>
                <User username={this.props.user.name} userage={this.props.user.age} userphoto = {this.props.user.photo}/>
               
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return{
        user: state.user,
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


export default connect(mapStateToProps,mapDispatchToProps)(App)
