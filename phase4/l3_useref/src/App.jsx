import { useRef } from "react"

function App() {
  const myref=useRef(null)
  return (
    <>
      <input type="text" placeholder="input" ref={myref}></input>
      <button onClick={()=>{myref.current.focus()}}>focus</button>
    </>
  )
}

export default App
