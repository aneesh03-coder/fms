import actionType from "./actionType";

export const saveDataAction =(data) =>{
    return {
     type: actionType.SAVE_DATA_ASYNC,
     payload: data,
    }
}