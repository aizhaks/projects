import React, { useEffect } from 'react';
import { useState } from 'react';
import axios  from 'axios';
function Api() {

const[response, setResponse] =  useState('')
const[name, setName]  = useState('')
const[email, setEmail] = useState('')
function send(){
  axios.post('https://683ffb195b39a8039a5658ce.mockapi.io/users', {
    name: name,
    email: email
  })
  .then(res=> setResponse("Сұраныс жіберілді"+ res.data.name) )
}

  return(
   <div>
    <input type="" name="" onChange={(e)=> setName(e.target.value)}/>
    <input type="" name="" onChange={(e)=> setEmail(e.target.value)}/>
    <button onClick={send}>send</button>
    <p>{response}</p>
   </div>
  )
}
export default Api