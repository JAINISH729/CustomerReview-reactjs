import React from "react";
import FeedbackCard from "./FeedbackCard";

function FeedbackList({ feedbacks }) {

  return (
    <div className="dashboard">

      <h2>Feedback Dashboard</h2>

      <div className="cards">

        {feedbacks.map((fb, index) => (
          <FeedbackCard key={index} feedback={fb} />
        ))}

      </div>

    </div>
  );
}

export default FeedbackList;