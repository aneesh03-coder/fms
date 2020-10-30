import React from 'react';
import {useDispatch,useSelector} from "react-redux";
import {selectUserInfo} from "../reducers/userInfo";

function RenderData({fn}) {
    const userInfo=useSelector(selectUserInfo);
    fn(userInfo);
    //setResponse(userInfo)
    return (
        <div>
        
        </div>
    )
}

export default RenderData
