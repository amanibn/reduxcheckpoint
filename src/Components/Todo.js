import React from "react";
import {Button} from "react-bootstrap";
import { editPost, addPost, editTodo } from "../Actions/actions";
import 'font-awesome/css/font-awesome.min.css';
import { useDispatch } from 'react-redux';
const Todo = ({todo, idx, isDone}) => {
  const dispatch = useDispatch()
 
  const handleChange = (idx) => {
    dispatch(editPost({
      id:idx,
      isDone:!isDone
    }));
}
const handleEdit = (idx) => {
  console.log({todo})
  document.getElementById("title").value = todo; 
  console.log(idx);
  /*dispatch(editPost({
    id: idx,
    todo,
    isDone
}))*/
}
  return (
             
    <div className="todo mb-1 row">
    <div className="col-10">
    <span  className={`${isDone ? "complete" : ""}`} >{todo}</span>
    </div>
   
<div className="col-2" style={{textAlign: 'right'}}>
<Button onClick={() => handleChange(idx)} variant="outline-success" >✓</Button>{' '}
<Button onClick={() => dispatch(editTodo({text:todo, selected:idx}))} variant="outline-primary" ><i className="fa fa-edit"></i></Button>
</div>

</div>
  );
};


export default Todo

