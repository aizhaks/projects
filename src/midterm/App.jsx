import{BrowserRouter as Router,Routes,Route}
 from "react-router-dom"
import Navbar from './Navbar'
import { useState } from 'react'
import ProtectedRoute from './Protected_Route'
import Home from "./Home"
import BookDetail from './BookDetail'
import Book_gallery from './Book_gallery'
import Login from './Login'
function App() {
  const[isAuthenticated, setAuthenticated] = useState(false)
    return(

  <Router>
   <Routes >
  <Route path="/"  element={<Login setAuthenticated={setAuthenticated}/>}/>
<Route path="/home" element={<ProtectedRoute isAuthenticated={isAuthenticated}>
  <home/>
</ProtectedRoute>}></Route> 
<Route path="/book_gallery" element={<ProtectedRoute isAuthenticated={isAuthenticated}>
  <Book_gallery/>
</ProtectedRoute>}></Route>

<Route path="/book_detail" element={<ProtectedRoute isAuthenticated={isAuthenticated}>
  <BookDetail/>
</ProtectedRoute>}></Route>

      </Routes>
 </Router>

    );
}

export default App
