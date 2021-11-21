import React from 'react'
import { addPost, filterPost, addText, editAddTodo } from '../Actions/actions';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from "uuid";
 const CreatePost = () => {
     
    const dispatch = useDispatch()
    const posts = useSelector(state => state.posts);
    const text = useSelector(state => state.text);
    const selected = useSelector(state => state.selected);
    const handleSubmit = (e) => {
        e.preventDefault()
        if(text == ''){
            alert("Please enter a task");
        }else{
        if (selected || selected == 0){
        dispatch(editAddTodo({
        value: text,
        selected: selected
      }));
    }
   
    else {
    dispatch(addPost(
        {id:uuidv4(),
        title:text
        }));

    }
    }
}
   
    function filterItems (type) {
        const results = posts.filter((post) => {
        const t= dispatch(filterPost(type));

        });

    };
    const handleChange = e =>{
        dispatch(addText(e.target.value));
    } 
    return (
        
        <form onSubmit={handleSubmit}>
            <div>

                <label htmlFor="Title">Title</label>
                <input className="form-control" type="text" name="title" id="title" value={text} onChange={handleChange} />
           
                <input type="submit" value="Add" />
                <input onClick={()=>filterItems(true)} type="button" value="Complete" />
                <input onClick={()=>filterItems('all')} type="button" value="All" />
                <input onClick={()=>filterItems(false)} type="button" value="Not done" />

            </div>


        </form>
       
    )
}
export default CreatePost
//export default connect(null, mapDispatchToProps)(CreatePost)