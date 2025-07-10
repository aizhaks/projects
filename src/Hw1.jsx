import {useState}   from 'react'
function  Hw1(){


    
const isStudent = 50
return(

    <div
    style={{
        backgroundColor: isStudent? 'black' : 'white'
    }}>
        <p>{isStudent>50 ? 'Сіз студент емессіз' : isStudent==50? 'Сіз студентсіз' : "Жоқ"}</p>
    </div>
  
)
}
  export default Hw1