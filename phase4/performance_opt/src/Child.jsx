import React from "react"
function Child({data}){
    return (
        <>
            <p>child component data: {data}</p>
        </>
    )
}

export default React.memo(Child)