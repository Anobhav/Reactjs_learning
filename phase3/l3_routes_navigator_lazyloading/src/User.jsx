import { useParams } from "react-router-dom"

export function User(){
    const {id}=useParams()
    return (
        <>
            <p> user id: {id}</p>
        </>
    )
}