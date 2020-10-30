import React,{useState,useEffect} from 'react';
import "../components/Feedback.css";
import ratings from "../components/ratings.js";
import RatingRadio from "../components/RatingRadio";
import team from "../components/team.png";
import {useDispatch,useSelector} from "react-redux";
import {setUser,selectUser} from "../reducers/userSlice"
import {setCourse,selectCourse} from "../reducers/courseSlice"
import {setRating,selectRating} from "../reducers/courseSlice"
import {useHistory} from "react-router-dom"

function FeedbackSubmissionForm() {
    const [userName,setUserName]=useState("");
    const [courseName,setCourseName]=useState("");
    const [radioValue,setRadioValue]=useState("");
    const dispatch=useDispatch();
    const history=useHistory();
    const user=useSelector(selectUser);
    const course=useSelector(selectCourse);
    const rating=useSelector(selectRating);
   
    useEffect(() => {
        if(user){
            setUserName(user.user);
        } 
        if(course){
            setCourseName(course)
        }
        if(rating){
            setRadioValue(rating)
            document.getElementById(rating).checked=true;
        }

    }, [])
   
    
 const setRadio = (radValue)=>
 {
     setRadioValue(radValue);
 }
   const saveGlobally=(e) =>{
        e.preventDefault();
        dispatch(
                setUser({
                        user:userName,
                    }),
                   
                )
                dispatch(
                    setCourse({
                        course:courseName,                        
                        rating:radioValue,

                
                    }),
                    
                 
                   
                )
                // console.log(radioValue)
                history.push("/feedback_submit");
   };
   
   const onUserNameChange = (e)=>{
    // existing user is a placeholder 
        if(e.target.value !== userName){
            setUserName(e.target.value)
        }
    }
    

    return (
       <div className="feedback__submission">
           <form className="feedback__form"  onSubmit={saveGlobally}>
               <p>Please input UserName:</p>
               <input required type="text" placeholder="username" onChange={onUserNameChange} value={userName}/>
               <p>Please input CourseName:</p>
               <input required type="text" placeholder="coursename" onChange={(e)=>setCourseName(e.target.value)} value={courseName}/>
               <p>Please rate your course</p>
                {ratings.rating.map((currentRating)=>(
                    < div className="ratings__selection">
                        <RatingRadio ratings={currentRating} setRadio = {setRadio} />
                    </div>
                ))}
                <button >Next</button>
            </form>
           <img src={team} alt=""/>
           <div><h1></h1></div>
       </div> 
    )
}

export default FeedbackSubmissionForm
