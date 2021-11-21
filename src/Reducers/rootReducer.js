//import { ADD_ARTICLE, Edit_ARTICLE } from "../Constants/actions-types";
import { ADD_ARTICLE, EDIT_ARTICLE,FILTER_ARTICLE, EDIT_TODO, EDIT_ADD_TODO, ADD_TEXT} from "../Actions/actions-types";
const initialState = {
    posts: [
        {
            id: 1,
            title: 'my first post',
            isDone: false
        },
        {
            id: 2,
            title: 'my second post',
            isDone: true
        },
        {
            id: 3,
            title: 'my third post',
            isDone: false
        }
    ],text: "",
    selected: undefined
}
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ARTICLE:
            //console.log(posts: [...state.posts, action.payload],text:'')
            console.log(action.payload)
            return {
                posts: [...state.posts, action.payload],text:''
                
            }
           
            case EDIT_ARTICLE:
            return {
                posts: state.posts.map((todo) => {
                    
                    if (todo.id === action.payload.id) {
                        console.log('here')
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
                console.log({ ...state, text: action.payload})
      return {
           ...state, text: action.payload 
        };
            case EDIT_TODO:
                console.log(action.payload)
                console.log({ ...state,
                    text: action.payload,
                    selected: action.payload})
            return {
                ...state,
                text: action.payload.text,
                selected: action.payload.selected
            };
            case EDIT_ADD_TODO:
                const todo4 = state.posts.map((todo, i) =>
                  todo.id !== action.payload.selected ? todo : {id:action.payload.selected,title:action.payload.value}
                );
                console.log({ ...state,
                    //posts: todo4,
                    selected: undefined,
                    text: ""})
                //setPersist(todo4);
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