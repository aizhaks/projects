import React, { useState } from 'react';

function Validation() {
   const[email, setEmail]=  useState('')
  const[name, setName] = useState('')
  const[error, setError] =  useState('')
  const[comment, setComment] =  useState('')
  const[rate, setRate] = useState('bad')
  const[review, setReview] =  useState(false)

  function change(){
  if(rate=='bad'){
    setReview(true)
  }
  }
    function handleSubmit(e){
      e.preventDefault();
      if(!/^[A-Za-zА-Яа-я]+$/.test(name) ){
          setError('Тек әріп болуы тиіс')
      }
      else if(!email.includes('@')){
         setError('Емайл дұрыс емес')
      }else if(comment.length<20){
        setError('Коммент 20таңбадан кем болмауы тиіс')
      }
      else{
        setError('')
        alert('Форма сәтті жіберілді')
      }
    }
   return(
    <form onSubmit={handleSubmit}>
      <label>Email</label>
      <input type="email" name=""  onChange={(e)=> setEmail(e.target.value)} required/>
      <label>Name</label>
      <input type="name" name="" onChange={(e)=> setName(e.target.value)} required/>
      <label>Comment</label>
      <textarea onChange={(e)=>setComment(e.target.value)} required></textarea>
      <select value={rate} onChange={change}>
        <option >⭐⭐⭐⭐⭐ Өте жақсы</option>
         <option>⭐⭐⭐⭐ Жақсы</option>
          <option >⭐⭐⭐ Орташа</option>
           <option>⭐⭐ Нашар</option>
            <option>⭐ Өте нашар</option>
      </select>
      {review &&  <textarea></textarea>}
           <button type="submit">submit</button>
      <p style={{
        color: 'red'
      }}>{error}</p>
    </form>
   )
}
export default Validation;