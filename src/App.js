import CreatePost from './Components/CreatePost';
import PostList from './Components/PostList';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {

  return (
    <div className="App">
      <div className="container">
      <CreatePost/>
      <PostList/>
    </div>
    </div>
  );
}

export default App;