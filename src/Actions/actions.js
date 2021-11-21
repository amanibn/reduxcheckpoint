//import { ADD_ARTICLE, EDIT_ARTICLE, FILTER_ARTICLE } 
import { ADD_ARTICLE,EDIT_ARTICLE, FILTER_ARTICLE, EDIT_TODO, ADD_TEXT, EDIT_ADD_TODO } from "./actions-types";
export const addPost = newPost => {
    return {
        type: ADD_ARTICLE,
        payload: newPost
    }
}
export const editPost = key => ({
    type: EDIT_ARTICLE,
    payload: key
  });
  export const filterPost = newPost => ({
    type: FILTER_ARTICLE,
    payload: newPost
  });
  export const editTodo = key => ({
    type: EDIT_TODO,
    payload: key
  });
  export const addText = value => ({
    type: ADD_TEXT,
    payload: value
  });
  export const editAddTodo = obj => ({
    type: EDIT_ADD_TODO,
    payload: obj
  });

