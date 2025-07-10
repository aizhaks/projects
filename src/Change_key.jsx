import React from 'react';
import {useState} from 'react'
function ChangeKey() {

  const[text, setText] = useState('')
  const[value, setValue] = useState('')
  return (
    <div>
    <input type="text"
      value={value}
      onChange={(e)=> {
        setValue(e.target.value)
        setText(e.target.value)}}/>
        <p>{text}</p>
    </div>
  );
}

export default ChangeKey;
