import React from 'react';
import { useNavigate } from 'react-router-dom';
function Login({setAuthenticated}) {
  const navigate =  useNavigate()


  function handleLogin(){
    setAuthenticated(true)
    navigate('/dashboard')
  }
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
