import {all} from "redux-saga/effects";
import {waitForUserInfo} from "./sagas/userInfoSaga";

export default function* rootSaga(){
    yield all([waitForUserInfo()]);
}