import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import Signup from './Components/Signup';
import AddPost from './Components/AddPost';
import ViewPost from './Components/ViewPost';
import ViewmyPost from './Components/ViewmyPost';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/addpost" element={<AddPost/>}/>
        <Route path="/viewpost" element={<ViewPost/>}/>
        <Route path="/viewmypost" element={<ViewmyPost/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
