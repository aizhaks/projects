import React, { useEffect } from 'react';
import { useState } from 'react';
function Lesson6() {

const[count, setCount] = useState(0)
useEffect(()=> {
  alert('Батырма басылды' +count)
}, [count])
  return (
    <div>
     <button onClick={()=> setCount(count+1)}>+</button>
     <p>{count}</p>
    </div>
  );
}

export default Lesson6;
