import React, { useState } from "react";
import { connect } from "react-redux";
import {Button} from "react-bootstrap";
import { editPost } from "../Actions/actions";
import { useDispatch } from 'react-redux';
const Todo = ({todo, idx, isDone}) => {
  const dispatch = useDispatch()
  console.log(idx);
  const handleChange = (idx) => {
    dispatch(editPost({
      id:idx,
      isDone:!isDone
    }));
}
const handleEdit = (idx) => {
  dispatch(editPost({
    id:idx,
    title:todo
  }));
}
  return (
             
    <div className="todo mb-1 row">
    <div className="col-10">
    <span className={`banner ${isDone ? "complete" : ""}`} >{todo}</span>
    </div>
   
<div className="col-2" style={{textAlign: 'right'}}>
<Button onClick={() => handleChange(idx)} variant="outline-success" >✓</Button>{' '}
<Button onClick={() => handleEdit(idx)} variant="outline-danger" >✕</Button>
</div>

</div>
  );
};


export default Todo

