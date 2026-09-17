import { useEffect, useState } from "react"


function App() {
  const [count,setCounter]=useState(0)
  useEffect(()=>{
      console.log("App mounted");
  },[])
  useEffect(()=>{
      console.log("count changes");
    },[count])
  return (
    <>
    <button onClick={()=>setCounter(prev=>prev+1)}>{count}</button>
  </>

  )
 }

export default App
