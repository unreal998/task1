import React from "react";
import Main from "./Main";
import Links from "./Links";
import { connect } from 'react-redux';
import { UserData} from "../actions/UserActions";
import { fetchUsersWatcher } from "../saga/saga"


class App extends React.Component{
    constructor(props){
        super(props);
    }
    // componentDidMount(){
    //     this.props.FetchUsers()
    //}
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
    console.log(fetchUsersWatcher)
    return{
        UserData: ()=>{
            dispatch(UserData());
        },
        FetchUsers: ()=>{
            dispatch(fetchUsersWatcher());
        }
    };
};


export default connect(mapStateToProps,mapDispatchToProps)(App)
