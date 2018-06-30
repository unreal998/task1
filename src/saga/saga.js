import axios from "axios";
import {call , put , takeEvery} from "redux-saga/effects";


export function* fetchUsers(){
    const users = yield call( axios.get, "https://randomuser.me/api/");


    yield put({type: "FETCH_USERS_SUCCESS", payload:users.data.results});
}

export  function* fetchUsersWatcher(){

    yield takeEvery("FETCH_USERS", fetchUsers)
}

export default function* rootSaga(){

    yield [
        fetchUsersWatcher()
    ]
}