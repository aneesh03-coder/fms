import React from 'react'
import {useDispatch,useSelector} from "react-redux";
import {selectUserInfo} from "../reducers/userInfo";
function RenderEdited({fn}) {
    const userInfo=useSelector(selectUserInfo);
    fn(userInfo);
    return (
        <div >
            
        </div>
    )
}

export default RenderEdited
