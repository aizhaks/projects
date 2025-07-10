import { useEffect, useReducer } from "react"
import './App.css'
function Advanced_reduce(){
    const[state, dispatch] =  useReducer(reduce , {loading: false, data: [], error: ''})
useEffect(()=>{

    const fetch_data = async()=>{
    dispatch({type: 'start'})
    try{
        const response = await fetch('https://683ffb195b39a8039a5658ce.mockapi.io/flights/1')
        const data = await response.json()
        dispatch({type: 'success', play: data})
    }catch(err){
        dispatch({type: 'error', play: 'Қате сұраныс'})
    }
    }
    fetch_data()
}, [])
    function reduce(state, action){
        if(action.type=='start'){
            return {...state, loading: true, error: ''}
        }else if(action.type =='success'){
            return {...state, loading: false, data: action.play}
        } else if(action.type=='error'){
            return {...state, loading: false, error: action.play}
        }
    }
    return(
        <div>
       {state.loading && <p>...loading</p>}
       {state.error && <p>{state.error}</p>}
      {state.data && <p>{state.data.from}</p>}
       {state.data && <p>{state.data.to}</p>}
        </div>
    )
}

export default Advanced_reduce