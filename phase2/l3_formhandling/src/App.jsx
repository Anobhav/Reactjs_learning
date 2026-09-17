import { useState } from "react"

function App() {
  const [formData,setFromdata]=useState({username:"",password:""})
  function handlesubmit(e){
    e.preventDefault()
    console.log(formData);
    
  }
  return (
    <>
      <form onSubmit={handlesubmit}>
        <input type="text" value={formData.username} onChange={(e)=>{setFromdata({...formData, username:e.target.value})}}></input>
        <input type="text" value={formData.password} onChange={(e)=>{setFromdata({...formData, password:e.target.value})}}></input>
        <button type="submit">Submit</button>
      </form>
      
    </>
  )
}

export default App
