import { useState } from 'react';

function Event() {
//  const[value, setValue] =  useState('')
// const[text, setText] = useState('')

//  function change_text(e){
//      setValue(e.target.value)
//      setText(e.target.value)
//  }





const isSubscribed = 50
  return (

    <div>
     <p>{isSubscribed>40? "Сіз премиум қолданушысыз": isSubscribed? "Сіз жәй қолданушысыз": "djdj"}</p>
        {/* <input value={value} onChange={change_text}/>
        <p>{text}</p> */}
      
    </div>
  );
}

export default Event;