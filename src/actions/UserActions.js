import axios from "axios";
import {call , put , takeEvery} from "redux-saga/effects";

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

};


function* fetchUsers(){
    const users = yield call([axios, axios.get], "https://randomuser.me/api/");
    yield put({type: "FETCH_USERS_SUCCESS", payload:users.data.results});

}

export function* fetchUsersWatcher(){
    yield takeEvery("FETCH_USERS", fetchUsers)
}


export function UserName(name){
    return (dispatch) => dispatch ({
        type: "USER_NAME",
        name:name
    });
    
}