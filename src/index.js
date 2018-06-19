import React from "react";
import ReactDOM from "react-dom";
import $ from "jquery" 
import { timingSafeEqual } from "crypto";



function getJson(url) {
    return JSON.parse($.ajax({
        type: 'GET',
        url: url,
        dataType: 'json',
        global: false,
        async: false,
        success: function (data) {
            return data;
        }
    }).responseText);
}

var result = getJson('https://randomuser.me/api/');
console.log(result);
    result = result.results;
console.log(result);


class UserStats extends React.Component{
    render(){
        return(
            <div>
                {
                    result.map(function(el){
                        return(
                             <User key={el.id.name} pic={el.picture.large} gender={el.gender} title={el.name.title} name={el.name.first} last={el.name.last}  />
                        )
                    })
                }
            </div>
        )
    }
}

class User extends React.Component{
    constructor(props){
        super(props);
        this.state = {name: this.props.name};
        this.handleClick = this.handleClick.bind(this);
    }
    handleSearch(event) {
        console.log(event.target.value);
    }

    handleClick(){
        this.setState(prevState =>({
            name: "yolo"
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


ReactDOM.render(
    <UserStats/>,
    document.getElementById("app")
);
