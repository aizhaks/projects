import './App.css'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Fonts from './Fonts'
import Colors from './Colors'
import{BrowserRouter as Router,Routes,Route}
 from "react-router-dom"
import Navbar1 from './Navbar1'
import { useState } from 'react'
import ProtectedRoute from './Protected_Route'
import Dashboard from './Dashboard'
import Login from './Login'
import Profile from './Profile'
import Settings from './Settings'
function App() {
  const[isAuthenticated, setAuthenticated] = useState(false)
    return(

  <Router>
   <Routes >
<Route path="/login"
element={<Login setAuthenticated={setAuthenticated}/>}/>
<Route path="/dashboard"
element={<ProtectedRoute isAuthenticated={isAuthenticated}>
  <Dashboard/>
</ProtectedRoute>}>
<Route path="profile" element={<Profile/>}/>
<Route path="settings" element={<Settings/>}/>
</Route> 
      </Routes>
 </Router>

    );
}

export default App
