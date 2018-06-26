import axios from "axios";
import {call , put , takeEvery} from "redux-saga/effects";


function* fetchUsers(){
    const users = yield call([axios, axios.get], "https://randomuser.me/api/");
    yield put({type: "FETCH_USERS_SUCCESS", payload:users.data.results});

}

export function* fetchUsersWatcher(){
    yield takeEvery("FETCH_USERS", fetchUsers)
}