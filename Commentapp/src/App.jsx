import React, { useState } from "react";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackList from "./components/FeedbackList";
import "./App.css";

function App(){

  const [feedbacks,setFeedbacks] = useState([]);

  const addFeedback = (data)=>{
    setFeedbacks([...feedbacks,data]);
  }

  return(
    <div className="container">

      <div className="form-card">
        <h1>Customer Feedback</h1>
        <FeedbackForm addFeedback={addFeedback}/>
      </div>

      <FeedbackList feedbacks={feedbacks}/>

    </div>
  )
}

export default App;