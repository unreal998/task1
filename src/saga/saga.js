import axios from "axios";
import {call , put , takeEvery} from "redux-saga/effects";


export function* fetchUsers( ){
    try{
        console.log("Attempting to reqest API");
        const users = yield call( axios.get, "https://randomuser.me/api/");
        yield put({type: "FETCH_USERS_SUCCESS", payload:users.data.results.map(function(el){
            return ({
                photo: el.picture.large,
                title : el.name.title,
                name: el.name.first,
                last: el.name.last,
                gender: el.gender,
                age: el.dob.age,
                email: el.email
            })
        })
    });
    }
    catch(e){
        console.log("Fail");
        console.log(e);
         
    }
    
   
}

export  function* fetchUsersWatcher(){

   console.log("worked")
   yield takeEvery("USER_INFO", fetchUsers)
}

export default function* rootSaga(){
    
    yield  [
        fetchUsersWatcher(),
    ]
}