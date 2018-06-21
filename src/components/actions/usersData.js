import axios from 'axios';

export function userData(user) {

    const request = axios.get("https://randomuser.me/api/");
    console.log(request);
    return{
        type: "GetData",
        payload: request
    };
}
