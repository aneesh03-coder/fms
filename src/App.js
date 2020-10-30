import React from 'react';
import Feedback from "./components/Feedback"
import { useHistory,BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FeedbackConfirmation from "./components/FeedbackConfirmation";
import FeedbackSummary from "./components/FeedbackSummary";
import './App.css';

function App() {
 const  history=useHistory();
  return (
    <Router>
       <div className="App">
       <Switch> 
       {/* <Route path ="/">
          {history.push("/feedback")}
       </Route> */}
       <Route path ="/feedback_submit" exact>
         <FeedbackConfirmation />
       </Route>
       <Route path ="/feedback_summary" exact>
         <FeedbackSummary />
       </Route>
       <Route path ="/feedback">
         <Feedback/>
       </Route>
       
       </Switch>
   
        
    </div>
  
    </Router>
  );
   
}

export default App;
