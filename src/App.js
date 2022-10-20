import './App.css';
import Posts from './pages/Posts';
import Users from './pages/Users';
import Photos from './pages/Photos';
import Nav from './components/Nav';
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <> 
    <Routes>
       <Route path='/' element={<Nav />}>
         <Route path='/posts' element={<Posts />} />
         <Route path='/users' element={<Users />} />
         <Route path='/photos' element={<Photos />} />
       </Route>
    </Routes>
    </>
  );
}

export default App;
