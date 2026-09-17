import Child1inputbox from './Child1.jsx'
import Child2displaytext from './Child2.jsx'
import { createContext, useState } from 'react'

const MyContext = createContext()

function App() {
  const [inputtext, setInputtext] = useState("")

  return (
    <>
      <MyContext.Provider value={{ inputtext, setInputtext }}>
        <Child1inputbox />
        <Child2displaytext />
      </MyContext.Provider>
    </>
  )
}

export default App
export { MyContext }
