import {takeEvery,call,put} from "redux-saga/effects";
import userInfoService from "../services/userInfoService";
import {setUserInfo} from "../reducers/userInfo";
import {useDispatch,useSelector} from "react-redux";


function* fetchUserInfo(){
    
    try{
        console.log("Redux Saga has started to run");
        const userInfo=yield call(userInfoService);
       
        console.log("Why is it not coming here");
        console.log(userInfo);
        yield put( {type:setUserInfo,payload:userInfo});
    }catch(e){
       
    }
}

export function* waitForUserInfo(){
    console.log("Is it even coming here");
    yield takeEvery('FETCH_USER_INFO',fetchUserInfo);

}



