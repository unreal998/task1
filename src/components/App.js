import React from "react";
import User from "./User"
import Main from "./Main"
import { connect } from 'react-redux';
import {setName, Test} from "../actions/UserActions";
class App extends React.Component{
    constructor(){
        super();
    }
    changeUsername(newName){

    }
    render(){
        return(
            <div className="container">
                <button onClick={()=>this.props.test()}></button>
                <Main changeUsername={()=>this.props.setName("Maxim")}/>
                <User username={this.props.user.name}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return{
        user: state.user,
        math: state.math
    };
};

const mapDispatchToProps = (dispatch) => {
    console.log(Test)
    return{
        setName: (name) => {
            dispatch(setName(name));
        },
        test: ()=>{
          //  console.log("Eror:",Test)
            dispatch(Test());
        }
    };
};
export default connect(mapStateToProps,mapDispatchToProps)(App)