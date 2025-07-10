import React from 'react';
import axios from "axios";
import {useState} from 'react'
function App() {
 const[userInput, setUserInput]  = useState('')
  const[answer, setAnswer] =  useState([])
 function ask(){
    axios.post(
  `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyAtOX-Yvymqz8ogViLD1EyzdqLPK85W3wQ`,
  {
    contents: [{ parts: [{ text: userInput + " Осы берілген текстті қыстарту керек" }] }]
  },
  {
    headers: { 'Content-Type': 'application/json' }
  }
)
.then(response=> {
    setAnswer([...answer, {answer: response.data.candidates?.[0]?.content?.parts?.[0]?.text, question: userInput}])
    console.log(response.data)
})
 }

  return (
    <div>
        <input type="text" onChange={(e)=> setUserInput(e.target.value)}/>
        <button onClick={ask}>ask</button>
    {
        answer.map(n=>{

            return(
                <div>
                     <p><b>Сұрақ: </b>{n.question}</p>
                     <p><b>Жауап: </b>{n.answer}</p>
                </div>
 
            )
          
        })
    }
    </div>
  );
}

export default App;
