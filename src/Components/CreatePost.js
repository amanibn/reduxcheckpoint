import React, { useState } from 'react'
import { addPost, filterPost } from '../Actions/actions';
import { useDispatch, useSelector } from 'react-redux';

 const CreatePost = () => {
    const dispatch = useDispatch()
    const posts = useSelector(state => state.posts);
    const [title, setTitle] = useState('');
    const [isDone, setIsDone] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault()
         dispatch(addPost({
            id: Date.now(),
            title,
            isDone
        }))
        //title='';
        setTitle('')
        console.log(title)
    }
   
    function filterItems (type) {
        console.log(type)
        console.log(posts)
        const results = posts.filter((post) => {
         // if(post.isDone==true){
        const t= dispatch(filterPost(type));
        console.log('amani : '+t)

        //console.log(post)
         // }

        });
        
        //setMovies(results);

    };
    return (
        
        <form onSubmit={handleSubmit}>
            <div>

                <label htmlFor="Title">Title</label>
                <input className="form-control" type="text" name="title" id="title" value={title} onChange={e => setTitle(e.target.value)} />
           
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