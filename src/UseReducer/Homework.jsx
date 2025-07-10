import { useReducer } from "react"
function Homework(){
 const[state, dispatch] = useReducer(reduce , 'white')
 
document.body.style.backgroundColor = state
 function reduce(state, action){
    if(action=='white'){
        return 'white'
    } else if(action=='black'){
        return 'black'
    } else if(action=='blue'){
        return 'blue'
    }
 }
return(
    <div>
        <button onClick={()=> dispatch('white')}>white</button>
        <button onClick={()=> dispatch('black')}>black</button>
        <button onClick={()=> dispatch('blue')}>blue</button>
        <p>{state}</p>
    </div>
)
}

export default Homework