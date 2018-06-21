import React, {Component} from "react";
import {connect} from "react-redux";

class Details extends Component {
    render (){
        return(
            <div>
                <h2>{this.props.car.model}</h2>
                <h2>{this.props.car.weight}</h2>
            </div>
        );
    }
}
function mapStateToProps (state){
    return{
        car: state.active
    };
}
export default connect(mapStateToProps)(Details);
