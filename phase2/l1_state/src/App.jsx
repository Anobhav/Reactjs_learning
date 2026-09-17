import { useState } from "react"

function App() {
  const [email,setEmail]=useState("")
  const [isLoggedin,setisLoggedin]=useState(false)
  const [show,setShow]=useState(false)
  const [toggleText,settoggleText]=useState("OFF")
  const renderlist=["apple","banana","mango"]
  return (
    <>
      <input type="text" placeholder="enter your email" value={email} onChange={(e)=>{setEmail(e.target.value)}}></input>
      <button onClick={()=>(setisLoggedin(!isLoggedin))}>change login</button>
      <button onClick={()=>{setShow(!show)}}>change show</button>
      <button onClick={()=>{
        if (toggleText=="OFF")
        {
          settoggleText("ON")
        }
        else{
          settoggleText("OFF")
        }}}>change toggleText
      </button>
      {isLoggedin ? <p>Welcome</p> : <p>Please Login</p>}
      {show ? renderlist.map((item,index)=>(
        <p key={index}>list name:{item}, index of name:{index}</p>
      )) : null}
      {toggleText === "ON" && <p>toggleText is ON</p>}
      {toggleText === "OFF" && <p>toggleText is OFF</p>}

      
    </>
  )
}

export default App
