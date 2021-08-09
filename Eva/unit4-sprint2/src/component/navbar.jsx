import { useState } from "react";
import { Link } from "react-router-dom";

export function Nav({handleMovie2}) {
    const [data, setData] = useState("")
    
    return <>
        <Link to="/dashboard">Dashboard</Link>
        <div>
           
            <input type="text" placeholder="Enter Movies Name" onChange={(e) => setData(e.target.value)} />
           <Link to="/result">
            <button onClick={() => {
                
                handleMovie2(data)
                }}>Search</button>
                </Link>
        </div>

        </>
}