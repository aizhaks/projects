import React, { useEffect } from 'react';
import {useState}  from 'react'
import{Link} from 'react-router-dom'
function Posts() {
  const [posts, setPost] =  useState([])

  useEffect(()=> {
    fetch('https://6836e64e664e72d28e4299a8.mockapi.io/MyProjects')
    .then((response)=> response.json())
    .then((data)=> setPost(data))
  })
  return (
    <div>
      <h1>Барлық посттар</h1>
      {
        posts.map((post)=> (
          <div key={post.id}>
                <h3>{post.name}</h3>
                <Link to={`/posts/${post.id}`}>Толығырақ оқу</Link>
          </div>
        ))
      }
    </div>
  );
}


export default Posts;
