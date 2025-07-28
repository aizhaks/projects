import React from "react";
import {BrowserRouter as Router,  Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Dormitories from "./Dormitories";
import Jobs from "./Jobs";
import Education from "./Education";
import "./App.css";
import DormDetail from "./DormDetail";
import ReadMore from "./ReadMore";
import Apply from "./Apply";
import Contact from "./Contact";
import Footer from "./Footer"; 
import ApplicationsList from "./ApplicationsList";
import ContactPage from "./ChatWidget"; 
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dormitories" element={<Dormitories />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/education" element={<Education />} />
        <Route path="/dorm/:id" element={<DormDetail />} />
        <Route path="/readmore" element={<ReadMore />} />
        <Route path="/apply" element={<Apply />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/applications" element={<ApplicationsList />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;