import { createSlice } from '@reduxjs/toolkit';


export const commentSlice = createSlice({
  name:"comments",
  initialState: {
    
    comments:null
   
  },
  reducers: {
   setUserComment:(state,action) =>{ 
    
     state.comments=action.payload.comments;
   },
  

  }});

export const { setUserComment } = commentSlice.actions;


export const selectComments = state =>state.course.comments;

export default commentSlice.reducer;
