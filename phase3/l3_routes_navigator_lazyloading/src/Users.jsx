import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
export function Users(){
    const [users,setUsers]=useState([])
    const [loading,setloading]=useState(true)
    useEffect(()=>{
        const controller= new AbortController()
        async function fetchUsers(){
            const res=await fetch("https://jsonplaceholder.typicode.com/users")
            const data=await res.json()
            setUsers(data)
            setloading(false)
        }
        fetchUsers()

        return ()=>{
            controller.abort()
        }        
    },[])
    return (
        <>
            {
                loading ? (
                    <p>loading</p>
                ) : (
                    users.map((user) => {
                    return (
                        <Link key={user.id} to={`/users/${user.id}`}>
                        <p>{user.name}</p>
                        </Link>
                    );
                    })
                )
            }
        </>
    )
}