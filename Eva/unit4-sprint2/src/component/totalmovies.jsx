import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./ComCss.css"
export function TotalMovies() {
    
    const state = useSelector(state => state.payload)
    
    console.log(state)
   
    return <>
       
        <div className="mainDiv">
            
        {state.map(e => <div >
            
                <img src={ e.img} alt="Done"/>
            <p>Title: {e.name}</p>
           <p>Actor: <Link to="/actor"> { e.actor}</Link></p> 
            <p>Imdb rating: {e.imdb}</p>
            <p>Id: { e.id}</p>
            <Link to={`/dashboard/${e.id}`}>more detail</Link>
                </div>)}
            </div>
    </>
}