import './App.css';
import Blogs from './component/Blogs/Blogs';
import Exercises from './component/Exercises/Exercises';
import Header from './component/Header/Header';

function App() {
  return (
    <div className="App">
   <Header></Header>
   <Exercises></Exercises>
   <Blogs></Blogs>
    </div>
  );
}

export default App;
