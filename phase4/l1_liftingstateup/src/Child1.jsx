import { useContext } from "react";
import { MyContext } from "./App";   // or "./MyContext" if separate file
function Child1inputbox(){
    const { inputtext, setInputtext } = useContext(MyContext)
    return (
        <>
            <input type="text" value={inputtext} onChange={(e)=>setInputtext(e.target.value)}></input>
        </>
    )
}

export default Child1inputbox