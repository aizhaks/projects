import { act, useReducer, useState } from "react"

function App(){
const[state, dispatch] = useReducer(reduce, 0)

function reduce(state, action){
    if(action=='plus'){
        return state+1
    }
    else if(action=='minus'){
        return state-1
    }
    else if(action=='reset'){
        return 0
    } else if(action=='sqrt'){
        return Math.sqrt(state)
    } else if(action =='dark'){
        return 'black'
    } else if(action=='ligth'){
        return 'white'
    }
}
    return(
        <div style={{
            backgroundColor: state
        }}>
    <button onClick={()=> dispatch('plus')}>+</button>
     <button  onClick={()=> dispatch('minus')}>-</button>
      <button onClick={()=> dispatch('reset')}>reset</button>

      <button onClick={()=> dispatch(state=='white' ? 'dark': 'ligth')}>dark_mode</button>
      <p>{state}</p>
        </div>
    )
}

export default App