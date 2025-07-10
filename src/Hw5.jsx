import React from 'react';
import { useState } from 'react';
function Hw5() {
  const[name, setname] = useState()
   const[password, setPassword] = useState()
   const[email, setEmail] = useState()
   const[email1, setEmail1] =useState()
   const[password1, setPassword1] =useState()
const[page, setPage] = useState('first_page')
const[user, setUser] =useState([])
if(page=='register'){
    return(
    <form>
      <input type="name" value={name} onChange={(e)=>setname(e.target.value)} required/>
      <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)} required/>
      <input type="email" value={email} onChange={(e)=> setEmail(e.target.value)} required/>
      <button onClick={()=> 
        {
        user.push({username: name, userpassword: password, useremail: email})
        localStorage.setItem('user', JSON.stringify(user))
          setPage('welcome')
        }
        
        }>Register</button>
    </form>
  )
}else if(page=='login'){
  return(
    <form>
      <input type="password" value={password1} onChange={(e)=> setPassword(e.target.value)} required/>
      <input type="email" value={email1} onChange={(e)=> setEmail(e.target.value)} required/>
      <button onClick={()=> {
       let local_user =  JSON.parse(localStorage.getItem('user'))
        if(local_user.useremail == email1 && local_user.userpassword == password1){
        setPage('welcome')
        }else {
          alert('Тіркелу керек')
        }
        }}>login</button>
      <button onClick={()=> setPage('register')}>register</button>
    </form>
  )
} else if(page=='first_page'){
  return(
    <div>
      <button onClick={()=> setPage('login')}>Login</button>
      <button onClick={()=> setPage('guest')}>Login as Guest</button>
    </div>
  )
}else if(page=='welcome'){
  return(
    <div>
      <h1>Welcome, {name}</h1>
      <p>Email: {email}</p>
      <button onClick={()=> setPage('first_page')}>Remove</button>
      <button onClick={()=> setPage('first_page')}>Logout</button>
    </div>
  )
}else if(page=='guest'){
  return(
 <div>
    <h1>Welcome, Guest</h1>
    <button onClick={()=> setPage('first_page')}>Logout</button>
  </div>
  )
 
}
}

export default Hw5;
