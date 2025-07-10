import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PostDetails from './PostDetails';
import Posts from './Posts'
import Home from './Home'
import Navbar from './Navbar';
function App() {
  return (
 <Router>
          <Navbar/>
      <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/posts" element={<Posts/>}/>
         <Route path="/posts/:id" element={<PostDetails/>}/>
      </Routes>
    </Router>  );
}

export default App;
