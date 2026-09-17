import { useState, useMemo } from "react"
import Child from "./Child"

function App() {
  const [count, setcount] = useState(0)
  const [userinput, setuserinput] = useState("")

  const text = useMemo(() => userinput, [userinput])

  return (
    <>
      <p>{count}</p>

      <button onClick={() => setcount(prev => prev + 1)}>+</button>

      <input
        type="text"
        placeholder="enter child component text"
        onChange={(e) => setuserinput(e.target.value)}
      />

      <Child data={text} />
    </>
  )
}

export default App