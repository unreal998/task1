import React from "react"
import User from "./user"
import $ from "jquery"


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

    result = result.results;

class UserStats extends React.Component{
    render(){
        return(
            <div>
                {
                    result.map(function(el){
                        return(
                             <User key={el.id.name} pic={el.picture.large} 
                                gender={el.gender} title={el.name.title}
                                name={el.name.first} last={el.name.last}  />
                        )
                    })
                }
            </div>
        )
    }
}
export default UserStats