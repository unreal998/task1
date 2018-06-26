import React from "react";
import Main from "./Main";
import Links from "./Links";
import { connect } from 'react-redux';
import { UserData} from "../actions/UserActions";
class App extends React.Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        this.props.UserData()
    }
    render(){
        return(
            <div className="container">
                <Main changeUsername={()=>this.props.UserData()}/>
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
    console.log(UserData)
    return{
        UserData: ()=>{
            dispatch(UserData());
        }
    };
};


export default connect(mapStateToProps,mapDispatchToProps)(App)
