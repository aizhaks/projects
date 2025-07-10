import { useState } from "react"
import './States.css'
function States(){
  const[users, setUsers] = useState(['Alice' , 'Bob', 'Charlie'])
  return(
    <div className="box">
    <ul>
      {users.map((user, index)=>{
        return <li key="index">
          {user}
          </li>
      })}
    </ul>
    </div>
  )
}



export default States