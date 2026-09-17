import { Outlet } from "react-router-dom";

export function Layout(){
    return (
        <>
            <nav>
                <p> Item 1 navbar</p>
                <p> Item 2 navbar</p>    
            </nav> 
            <Outlet/>
        </>
    )
}