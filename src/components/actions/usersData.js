import axios from 'axios';

export function userData(user) {

    const request = axios.get("https://randomuser.me/api/");

    dispatch (
        type: "GetData",
        payload: request
    );
}
