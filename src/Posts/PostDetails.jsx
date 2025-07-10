import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {useState}  from 'react'
import {Link} from 'react-router-dom'
function PostDetails() {
  const {id} =useParams();
  const[post, setPost] =  useState(null)

    useEffect(()=> {
    fetch(`https://6836e64e664e72d28e4299a8.mockapi.io/MyProjects/${id}`)
    .then((response)=> response.json())
    .then((data)=> setPost(data))
  }, [id])
  if(!post) return <p>Деректер жүктелуде</p>
  return (
    <div>
      <Link to="/posts">Назад</Link>
      <h2>{post.name}</h2>
      <p>{post.desciption}</p>
      <img src={post.image} alt=""/>
    </div>
  );
}



export default PostDetails;
