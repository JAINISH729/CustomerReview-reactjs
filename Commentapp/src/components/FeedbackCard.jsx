import React from "react";

function FeedbackCard({feedback}){

  let priorityClass="";

  if(feedback.priority==="High") priorityClass="priority-high";
  if(feedback.priority==="Medium") priorityClass="priority-medium";
  if(feedback.priority==="Low") priorityClass="priority-low";

  return(
    <div className="card">

      <h3>{feedback.name}</h3>

      <p className="email">{feedback.email}</p>

      <div className="badges">

        <span className="category">
          {feedback.category}
        </span>

        <span className={priorityClass}>
          {feedback.priority}
        </span>

      </div>

      <p>{feedback.description}</p>

    </div>
  )
}

export default FeedbackCard;