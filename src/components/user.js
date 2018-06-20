import React from "react"

let entered;

class User extends React.Component{

    constructor(props){
        super(props);
        this.state = {name: this.props.name};
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleSearch(event) {
        entered = event.target.value;
    }

    handleClick(){
        this.setState(prevState =>({
            name: entered
        }))
    }
    render(){
        return(
        <div>
            <img src={this.props.pic}></img>   
            <h2 className = "gender"> Gender: {this.props.gender}</h2>
            <div className="name" >
                <h2>Name: {this.props.title} {this.state.name} {this.props.last}</h2>
            </div>
            <div className= "change">
                <input id="textArea" type="text" onChange={this.handleSearch}></input>
                <input type="button" onClick={this.handleClick}></input>
            </div>
        </div>
    )
    }
}
export default User