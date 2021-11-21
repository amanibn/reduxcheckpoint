import CreatePost from './components/CreatePost';
import PostList from './components/PostList';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App(state) {
console.log(state)
  return (
    <div className="App">
      <div className="container">
      <CreatePost />
      <PostList/>
    </div>
    </div>
  );
}

export default App;