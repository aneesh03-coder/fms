import axios from "axios";
import saveDataAction from '../actions/saveDataAction'
import { takeLatest, call, put } from 'redux-saga/effects';
import {useDispatch,useSelector} from "react-redux";
import {selectUser} from "../reducers/userSlice";

//useSelectors
import {selectCourse,selectRating, selectComments} from "../reducers/courseSlice";

// data 


const apiCall = (data) => {
    
     
    return axios
    .post("http://localhost:5000/feedback_summary", data)
}


function* createPostSaga(action) {
    console.log(action)
    try {
      let { data } = yield call(apiCall,action.payload);
      action.resolve();
    } catch (e) {
      action.reject(e);
    }
  }



const userSaga = (sagaMiddleware) =>{
    Object.values(createPostSaga).forEach(sagaMiddleware.run.bind(sagaMiddleware))
}

export default userSaga