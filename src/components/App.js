import React from "react";
import Main from "./Main";
import Links from "./Links";
import { connect } from 'react-redux';
import { UserData, UserInfo} from "../actions/UserActions";



class App extends React.Component{
    constructor(props){
        super(props);
    }
    // componentDidMount(){
    //     this.props.FetchUsers()
    // }
    render(){
        return(
            <div className="container">
                <Main changeUsername={()=>this.props.FetchUsers()}/>
                <Links/>   
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
    console.log(UserInfo)
    return{
        UserData: ()=>{
            dispatch(UserData());
        },
        FetchUsers: ()=>{
            dispatch(UserInfo());
        }
    };
};


export default connect(mapStateToProps,mapDispatchToProps)(App)
