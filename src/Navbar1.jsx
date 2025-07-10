import React from 'react';
import { Link } from 'react-router-dom'
function Navbar1() {
  return (
    <nav>
    <Link  to="/profile">Profile</Link>  <Link className='link' to="/about">About</Link> | {" "}
    <Link  to="/projects">Projects</Link>
    </nav>
  );
}

export default Navbar1;
