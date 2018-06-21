import axios from "axios";
export function setName(name) {
    return {
        type: "SET_NAME",
        payload: name
    };
}
export function Test(){
    return (dispatch)=>{
        axios.get("https://jsonplaceholder.typicode.com/posts/1")
            .then(response =>{
                return dispatch({
                    type: "TEST",
                    payload: response
                })
                
            })
    }

}
export function substractNumber(age) {
    return {
        type: "SET_AGE",
        payload: age
    };
}