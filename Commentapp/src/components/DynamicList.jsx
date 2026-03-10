import React from "react";

function DynamicList({list,setList}){

  const handleChange = (index,value)=>{
    const newList = [...list];
    newList[index] = value;
    setList(newList);
  }

  const addItem = ()=>{
    setList([...list,""]);
  }

  const removeItem = (index)=>{
    const newList = list.filter((item,i)=> i !== index);
    setList(newList);
  }

  return(
    <div>

      {list.map((item,index)=>(
        <div key={index}>

          <input
          value={item}
          onChange={(e)=>handleChange(index,e.target.value)}
          />

          <button type="button" onClick={()=>removeItem(index)}>
            Remove
          </button>

        </div>
      ))}

      <button type="button" onClick={addItem}>
        Add
      </button>

    </div>
  )
}

export default DynamicList;