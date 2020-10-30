import React,{useState} from 'react'


function RatingRadio({ratings,setRadio}) {

    
    return (
        <div>       
         <input 
         id={ratings}
        type="radio"
        name="rating"
        value={ratings}
            onClick={e=>setRadio(ratings)}
            required="required" 

      />
      <label>{ratings}</label>
      </div>

    )
}

export default RatingRadio
