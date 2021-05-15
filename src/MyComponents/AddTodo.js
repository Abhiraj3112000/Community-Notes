import React from 'react'
import {useState} from 'react';

export const AddTodo = (props) => {
  const [title,setTitle]=useState("");
  const[desc, setDesc]=useState("");
  const submit = (e)=>{
    e.preventDefault();
    if(!title || !desc){
      alert("title or description cannot be blank.")
    }
    else
    {
       props.addTodo(title,desc);
    }
    setTitle("");
    setDesc("");
  }
    return (
        <div className="container my-3">
          <h3>Add a Note</h3>
            <form onSubmit={submit}>
  <div className="mb-3">
    <label htmlFor="title" className="form-label">Title</label>
    <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} 
    className="form-control" id="title" aria-describedby="emailHelp" />
  </div>
  <div className="mb-3">
    <label htmlFor="desc" className="form-label">Description</label>
    <textarea type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}}
    className="form-control" rows="5" id="desc" />
  </div>
  <button type="submit" className="btn btn-sm btn-success">Add Note</button>
</form>
        </div>
    )
}
