//import { ADD_ARTICLE, Edit_ARTICLE } from "../Constants/actions-types";
import { ADD_ARTICLE, EDIT_ARTICLE,FILTER_ARTICLE } from "../Actions/actions-types";
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
    ]
}
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ARTICLE:
            console.log(action.payload)
            return {
                posts: [...state.posts, action.payload]
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
         
        default:
            return state
    }
}

export default rootReducer