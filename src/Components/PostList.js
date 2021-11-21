import React from 'react'
//import { connect } from 'react-redux'

import Todo from './Todo';
import { useSelector } from 'react-redux';

/*const mapStateToProps = state => {
    return {
        posts: state.posts
    }
}*/
const PostList = () => {
    const posts = useSelector(state => state.posts);
    return (
        <div>
            {posts.map((post, i) => <div id={i} key={i}>
            <Todo  todo={post.title} idx={i} isDone={post.isDone} />
       
            </div>)}
        </div>
    )
}
export default PostList
//export default connect(mapStateToProps)(PostList)