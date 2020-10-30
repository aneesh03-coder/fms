import { createSlice } from '@reduxjs/toolkit';


export const courseSlice = createSlice({
  name:"course",
  initialState: {
    course: null,
    rating:null,
    //comments:null
   
  },
  reducers: {
   setCourse:(state,action) =>{ 
      state.course=action.payload.course;
      state.rating=action.payload.rating;
     //state.comments=action.payload.comments;
   },
  

  }});

export const { setCourse,setRating} = courseSlice.actions;

export const selectCourse = state => state.course.course;
export const selectRating = state =>state.course.rating;
//export const selectComments = state =>state.course.comments;

export default courseSlice.reducer;
