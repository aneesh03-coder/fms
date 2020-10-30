import axios from "axios";

    async function userInfoService(){
        return await axios.get("http://localhost:5000/feedback_summary").then((res) => {
             console.log("successfully received ",res  );
            return res.data;
           });
          
     }



export default userInfoService;