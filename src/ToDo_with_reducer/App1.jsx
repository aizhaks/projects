import React, { useReducer, useState } from 'react';
  const reducer =  (state, action)=>{
    switch(action.type){
      case 'ADD_TODO':
        return{
          todos: [
            ...state.todos, 
            {
              id: Date.now(), 
              title: action.payload, 
              completed: false
            }
          ]
        
        }
    }
  }
    
function App1() {

const[input, setInput] =  useState('')
const[state, dispatch]  = useReducer(reducer , {todos: []})
  const handleAddToDo =()=>{
    if(input.trim()){
      dispatch({type: 'ADD_TODO', payload: input})
      setInput('')
    }
  }


  return (
    <div>
    <input type="text" onChange={(e)=> {
      setInput(e.target.value)
    }} />
    <button onClick={handleAddToDo}>Add</button>

    {state.todos.map((task)=>{

      return(    <h1>{task.title}</h1>)
  
    })}
    </div>
  );
}

export default App1;
