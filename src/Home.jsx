import { useNavigate } from "react-router-dom"
function Home(){
  let navigate  = useNavigate()
  return(
    <div className="home">
      <h1>
        This Amazing 76-Year-Old Jumps Out of a Plane for a Good Cause
      </h1>
      <p>This septuagenarian says he wouldn’t do it again, but enjoyed it nonetheless. Buzz60’s Tony Spitz has the details
</p>
  <button onClick={()=> {navigate('/about')}}>Go to my projects</button>
    </div>
  
  )
}

export default Home