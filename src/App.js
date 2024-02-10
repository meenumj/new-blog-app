import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import Signup from './Components/Signup';
import AddPost from './Components/AddPost';
import ViewPost from './Components/ViewPost';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/addpost" element={<AddPost/>}/>
        <Route path="/viewpost" element={<ViewPost/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
