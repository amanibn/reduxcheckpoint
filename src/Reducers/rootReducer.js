//import { ADD_ARTICLE, Edit_ARTICLE } from "../Constants/actions-types";
import { ADD_ARTICLE, EDIT_ARTICLE,FILTER_ARTICLE, EDIT_TODO, EDIT_ADD_TODO, ADD_TEXT} from "../Actions/actions-types";
import { v4 as uuidv4 } from "uuid";
const initialState = {
    posts: [
        {
            id: uuidv4(),
            title: 'my first post',
            isDone: false
        },
        {
            id: uuidv4(),
            title: 'my second post',
            isDone: true
        },
        {
            id: uuidv4(),
            title: 'my third post',
            isDone: false
        }
    ],text: "",
    selected: undefined
}
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ARTICLE:
            return {
                posts: [...state.posts, action.payload],text:''
                
            }
           
            case EDIT_ARTICLE:
            return {
                posts: state.posts.map((todo) => {
                    
                    if (todo.id === action.payload.id) {
                        todo.isDone=!todo.isDone
                      
                    }
                    return todo;
                  }),
            }
            case FILTER_ARTICLE:
            return {
                ...state,
                posts: state.posts.filter(todo => {
                    if(action.payload =='all')
                    return todo
                    else
                    return todo.isDone == action.payload

                })
              
            }
            case ADD_TEXT:
      return {
           ...state, text: action.payload 
        };
            case EDIT_TODO:
            return {
                ...state,
                text: action.payload.text,
                selected: action.payload.selected
            };
            case EDIT_ADD_TODO:
                const todo4 = state.posts.map((todo, i) =>
                  todo.id !== action.payload.selected ? todo : {id:action.payload.selected,title:action.payload.value}
                );
                return {
                  ...state,
                  posts: todo4,
                  selected: undefined,
                  text: ""
                };
        default:
            return state
    }
}

export default rootReducer