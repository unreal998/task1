import axios from "axios";
export function UserData(){
    return (dispatch)=>{
        axios.get("https://randomuser.me/api/")
            .then(response =>{
                    response.data.results.map(function(el){
                        console.log(el)
                        return dispatch({
                            type: "USER_DATA",
                            payload: {
                                photo: el.picture.large,
                                title : el.name.title,
                                name: el.name.first,
                                last: el.name.last,
                                gender: el.gender,
                                age: el.dob.age,
                                email: el.email
                            }
                        })
                    })
                
                
            })
    }

}
export function UserName(){
    return dispatch({
        type: "USER_NAME",
        name:"Vasia"
    })
    
}