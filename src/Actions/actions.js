//import { ADD_ARTICLE, EDIT_ARTICLE, FILTER_ARTICLE } 
import { ADD_ARTICLE,EDIT_ARTICLE, FILTER_ARTICLE } from "./actions-types";
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
