import React, { useState } from "react";

function FeedbackForm({ addFeedback }) {

  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [category,setCategory] = useState("");
  const [priority,setPriority] = useState("");
  const [description,setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newFeedback = {
      name,
      email,
      category,
      priority,
      description
    };

    addFeedback(newFeedback);

    setName("");
    setEmail("");
    setCategory("");
    setPriority("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit} style={{display:"flex",flexDirection:"column",gap:"12px"}}>

      <input
        style={inputStyle}
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e)=>setName(e.target.value)}
      />

      <input
        style={inputStyle}
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
      />

      <select
        style={inputStyle}
        value={category}
        onChange={(e)=>setCategory(e.target.value)}
      >
        <option value="">Select Category</option>
        <option>Bug</option>
        <option>Suggestion</option>
        <option>Complaint</option>
      </select>

      <select
        style={inputStyle}
        value={priority}
        onChange={(e)=>setPriority(e.target.value)}
      >
        <option value="">Select Priority</option>
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>

      <textarea
        style={inputStyle}
        placeholder="Enter Description"
        value={description}
        onChange={(e)=>setDescription(e.target.value)}
      />

      <button style={buttonStyle} type="submit">
        Submit
      </button>

    </form>
  );
}

const inputStyle = {
  padding:"10px",
  border:"1px solid #ccc",
  borderRadius:"5px",
  fontSize:"14px"
};

const buttonStyle = {
  padding:"10px",
  background:"#4CAF50",
  color:"white",
  border:"none",
  borderRadius:"5px",
  cursor:"pointer"
};

export default FeedbackForm;