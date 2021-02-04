import PostDisplay from './PostDisplay';
import './App.css';
import {PostProvider} from './context/post.context'
import InputBox from './InputBox';
function App() {
  return (
    <div className="App">
     <PostProvider>
       <PostDisplay/>
       <InputBox/>
     </PostProvider>
    </div>
  );
}

export default App;
