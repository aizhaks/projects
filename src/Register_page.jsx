import React from 'react';

function RegisterPage() {
  return (
     <div className="RegisterPage">
          <input type="name" name="" value="" placeholder='name'/>
          <input type="password" placeholder='password' name="" value=""/>
          <input type="email" name="" value="" placeholder='email'/>
          <button onClick={()=> {
            setUser(true)
          }}>Register</button>
        </div> 
  );
}

export default RegisterPage;
