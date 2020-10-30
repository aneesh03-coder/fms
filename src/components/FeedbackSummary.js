import React, { useEffect, useState } from "react";
import axios from "axios";
import EditRoundedIcon from "@material-ui/icons/EditRounded";
import { useDispatch, useSelector } from "react-redux";
import { selectUserInfo } from "../reducers/userInfo";
import { selectUser } from "../reducers/userSlice";
import { setCourse, selectCourse, selectRating } from "../reducers/courseSlice";
import { selectComments } from "../reducers/commentSlice";
import RenderData from "./RenderData";
import RenderEdited from "./RenderEdited";
import "./FeedbackSummary.css";
const FeedbackSummary = () => {
  let userInfo = useSelector(selectUserInfo);
  const user = useSelector(selectUser);
  const course = useSelector(selectCourse);
  const rating = useSelector(selectRating);
  const userComments = useSelector(selectComments);
  const dispatch = useDispatch();
  const [response, setResponse] = useState([]);
  const [idToEdit,setIdToEdit]=useState("");
  const [editedRecord,setEditedRecord]=useState("");
  const [showEdited,setShowEdited]=useState(false);
  useEffect(() => {
    //Axios call
    //  axios.get("http://localhost:5000/feedback_summary").then((res) => {
    //    console.log("successfully received ",res  );
    //    setResponse(res.data);
    //  });
    console.log("Is this getting called");
    dispatch({ type: "FETCH_USER_INFO" });
    //  setResponse(userInfo);
    if(editedRecord != ""){
     
      dispatch({ type: "FETCH_USER_INFO" });      
      
      setShowEdited(true);
    }
   
  }, [editedRecord]);
  // useEffect(() => {
  
  //   if(editedRecord != ""){
     
  //     dispatch({ type: "FETCH_USER_INFO" });      
  //     setTimeout(10000);
  //     setShowEdited(true);
  //   }
   
  // }, [editedRecord]);
  const showModal = (id) => {
    console.log(id);
    setIdToEdit(id);
    console.log("username ", user);
    console.log("coursename ", course);
    console.log("rating ", rating);
    let row = document.getElementById(id);
    document.getElementById("edit__userName").value = row.cells[0].innerHTML;
    document.getElementById("edit__courseName").value = row.cells[1].innerHTML;
    document.getElementById("edit__rating").value = row.cells[2].innerHTML;
    document.getElementById("edit__comment").value = row.cells[3].innerHTML;
    document.getElementById("unique_id").value = id;
    console.log(`This is working`);
    console.log(document.getElementById("unique_id").value);
    $("#myModal").modal("show");
  };
  ///const id = id;
  const handleSave = () => {
    //console.log("comments ", comments);
      const editedUserName=document.getElementById("edit__userName").value;
      const editedCourseName=document.getElementById("edit__courseName").value;
      const editedRating=document.getElementById("edit__rating").value;
      const editedComment=document.getElementById("edit__comment").value;
      const url=`http://localhost:5000/edit/${idToEdit}`;
    axios
      .put(url, {
        username: editedUserName,
        coursename: editedCourseName,
        rating: editedRating,
        comments: editedComment,
      })
      .then((res) => {
        console.log("put update successfully posted");
        
        // history.push("/feedback_summary");
      })
      .catch((err) => {
        console.log("coming from summary.js handle edit and save", err);
        ///res.status(500).json({ msg: "Error Occurred" });
      });
      setEditedRecord("Editing done");
      $("#myModal").modal("hide");
  };

  return (
    <div className="summary">
      <h1>SUMMARY OF FEEDBACK</h1>
      {console.log("Summary Response ", response)}

      <table style={{ width: "100%" }}>
        <tr>
          <th>Username</th>
          <th>Coursename</th>
          <th>Rating</th>
          <th>Comments</th>
          <th></th>
        </tr>

        {response.map((item, index) => (
          <tr key={item._id} id={item._id}>
            <td>{item.username}</td>
            <td>{item.coursename}</td>
            <td>{item.rating}</td>
            <td>{item.comments}</td>
            <td>
              <EditRoundedIcon
                className="edit__button"
                onClick={() => {
                  showModal(item._id);
                }}
              />
            </td>
          </tr>
        ))}
      </table>
      <div class="modal" tabindex="-1" role="dialog" id="myModal">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">EDIT USER FEEDBACK</h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <form action="" className="edit__summary">
                <input
                  type="text"
                  placeholder="User Name"
                  id="edit__userName"
                />
                <input
                  type="text"
                  placeholder="Course Name"
                  id="edit__courseName"
                />
                <input type="text" placeholder="Rating" id="edit__rating" />
                <input type="text" placeholder="Comments" id="edit__comment" />
                <input type="text" hidden id="unique_id" />
              </form>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-primary"
                onClick={handleSave}
              >
                Save
              </button>
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      <RenderData fn={setResponse} />
      {showEdited && <RenderEdited fn={setResponse} />}
    </div>
  );
};

export default FeedbackSummary;
