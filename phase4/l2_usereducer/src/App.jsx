import { useReducer,useState } from "react"

function reducer(state,action){
  if(action.type==="sloading"){
    return {...state,loading:true}
  }
  if (action.type==="increment"){
    return {count: state.count+action.payload,loading:false}
  }
  if (action.type==="decrement"){
    return {count: state.count-action.payload,loading:false}
  }
  if (action.type==="reset"){
    return {count:0,loading:false}
  }
  return state
}

function App() {
  const [state,dispatch]=useReducer(reducer,{count:0, loading:false})   
  const [inputValue, setInputValue] = useState("") 
  return (
    <>
      <h1>use reducer implementation to increment and decrement</h1><br></br>

      {state.loading ? <p>loading</p>: <p>{state.count}</p>}
      <input type="Number" placeholder="enter a number" value={inputValue} onChange={(e)=>setInputValue(e.target.value)}></input><br></br>
      <button onClick={()=>{
        dispatch({type:"sloading"})
        setTimeout(() => {dispatch({type:"increment",payload: Number(inputValue)})}, 2000);
        }}>+</button><br></br>
 
      <button onClick={()=>{
        dispatch({type:"sloading"})
        setTimeout(() => {dispatch({type:"decrement",payload: Number(inputValue)})}, 2000);
        }}>-</button><br></br>
      
      <button onClick={()=>{
        dispatch({type:"sloading"})
        setTimeout(() => {dispatch({type:"reset"})}, 2000);}}>reset</button><br></br>
    </>
  )
}

export default App
