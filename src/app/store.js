import { applyMiddleware, configureStore ,createStore,getDefaultMiddleware} from '@reduxjs/toolkit';
import {combineReducers} from 'redux';
import userReducer from '../reducers/userSlice';
import rootSaga from '../rootSaga';
import courseReducer from '../reducers/courseSlice';
import commentReducer from '../reducers/commentSlice';
import userInfoReducer from '../reducers/userInfo';

import createSagaMiddleware from 'redux-saga';

 const sagaMiddleware = createSagaMiddleware();
 const rootReducer=combineReducers({
   user:userReducer,
   course:courseReducer,
   comments:commentReducer,
   userInfo:userInfoReducer
 });

 const store=createStore(rootReducer,applyMiddleware(sagaMiddleware));
 sagaMiddleware.run(rootSaga);
//   const store =configureStore({
//   reducer: {
//     user: userReducer,
//     course: courseReducer,
//     comments:commentReducer,
//     userInfo:userInfoReducer,
//   },
//   // middleware: [...getDefaultMiddleware(), sagaMiddleware],
  
// },applyMiddleware(sagaMiddleware));
// sagaMiddleware.run(rootSaga);
// rootSaga(sagaMiddleware);

// const store=()=>{
//    const sagaMiddleware = createSagaMiddleware();
//    return{
//      ...createStore({
//       reducer: {
//             user: userReducer,
//             course: courseReducer,
//             comments:commentReducer,
//             userInfo:userInfoReducer,
//           },
//      },applyMiddleware(sagaMiddleware)),
//      runSaga:sagaMiddleware.run(rootSaga)
//    }
// };

export default store;