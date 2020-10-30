import React, { useState, useEffect } from "react";

import { setCourse, selectCourse, selectRating } from "../reducers/courseSlice";
import { selectComments } from "../reducers/commentSlice";
import "./FeedbackConfirmation.css";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../reducers/userSlice";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

import { setUserComment } from "../reducers/commentSlice";

import actionType from "../actions/actionType";

const FeedbackConfirmation = (props) => {
  const [userComments, setUserComments] = useState("");
  const history = useHistory();
  const user = useSelector(selectUser);
  const course = useSelector(selectCourse);
  const rating = useSelector(selectRating);
  const comments = useSelector(selectComments);

  const dispatch = useDispatch();
  useEffect(() => {
    if (comments) {
      setUserComments(comments);
    }
  }, []);

  const handleSubmit = (e) => {
    console.log("comments ", comments);

    e.preventDefault();
    dispatch(
      setUserComment({
        comments: userComments,
      })
    );

    /// dispatch({type:actionType.SAVE_DATA_ASYNC})

    axios
      .post("http://localhost:5000/feedback_summary", {
        username: user.user,
        coursename: course,
        rating: rating,
        comments: userComments,
      })
      .then((res) => {
        console.log("successfully posted");
        console.log(history);
        history.push("/feedback_summary");
      })
      .catch((err) => {
        console.log("coming from comments.js handle submit", err);
        ///res.status(500).json({ msg: "Error Occurred" });
      });
  };

  const handleBack = () => {
    history.push("/feedback");
  };

  ////const history=useHistory();
  // console.log(user.user);
  //console.log(course);
  //console.log(rating);
  return (
    <div className="comments">
      <div className="confirm__container">
        <form className="form__comments">
          <h4>Please provide additional comments</h4>
          <label>Name:</label>
          <input type="text" value={`${user ? user.user : "No one"}`} />
          <br />
          <label>Course Name:</label>
          <input type="text" value={course} />
          <br />
          <label>Rating:</label>
          <input type="text" value={rating} />
          <br />
          <label>Additional Comments:</label>
          <input
            type="text"
            value={comments}
            onChange={(e) => setUserComments(e.target.value)}
          />
          <br />
          {/* <Link to="/summary"> */}
          <button onClick={handleBack}>Back</button>
          <input type="submit" onClick={handleSubmit} value="Submit" />

          {/* </Link> */}
        </form>
      </div>
    </div>
  );
};

export default FeedbackConfirmation;

// export const selectCourse = state => state.course.course;
// export const selectRating = state =>state.course.rating;
