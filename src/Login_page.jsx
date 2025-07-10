import React from 'react';

function LoginPage() {
  return (
    
        <div className="LoginPage">
           <input type="password" placeholder='password' name="" value=""/>
          <input type="email" name="" value="" placeholder='email'/>
          <button onClick={()=> setlogin(true)}>Login</button>
          <button onClick={()=> setRegister(true)}>Register</button>
        </div> 
  );
}

export default LoginPage;
