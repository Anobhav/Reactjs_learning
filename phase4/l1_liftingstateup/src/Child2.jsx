import { useContext } from "react";
import { MyContext } from "./App";
function Child2displaytext(){
    const {inputtext}=useContext(MyContext)
    return (
        <>
            <p> input text: {inputtext}</p>
        </>
    )
}

export default Child2displaytext;