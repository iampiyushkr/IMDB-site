import { useState } from "react";
import { Link } from "react-router-dom";
import "./ComCss.css"

export function Nav({handleMovie2}) {
    const [data, setData] = useState("")
    
    return <div className="NavDiv">
       <button > <Link to="/dashboard">Dashboard</Link></button>
        <div>
           
            <input type="text" placeholder="Enter Movies Name" onChange={(e) => setData(e.target.value)} />
           <Link to="/result">
            <button onClick={() => {
                
                    handleMovie2(data)
                    setData("")
                }}>Search</button>
                </Link>
        </div>

        </div>
}