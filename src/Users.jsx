import React, { useState } from 'react';
import axios from 'axios';
function Users() {
const[users, setUsers] =  useState([])
function show_users(){
  axios.get('https://683ffb195b39a8039a5658ce.mockapi.io/users')
  .then(res=> setUsers(res.data) )
}
  return (
    <div>
      <button type="" onClick={show_users}>Барлық пайдаланушыларды көрсету</button>
      {users.map(user=> {
        return(
          <div style={{
            border: '1px solid black'
          }}>
            
          <b><p>Аты: </p></b> <p>{user.name}</p>
          <b><p>Емайл: </p></b> <p>{user.email}</p>
          <b><p>Құпиясөз: </p></b> <p>{user.password}</p>
          <b><p>Жасы: </p></b> <p>{user.age}</p>
          <b><p>Жынысы: </p></b> <p>{user.gender}</p>
          <b><p>Қаласы: </p></b> <p>{user.city}</p>
          <img src={user.image} alt=""/>
          </div>
        )
      })}
    </div>
  );
}

export default Users;
