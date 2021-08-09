import { useSelector } from "react-redux";
import "./ComCss.css"
export function TotalMovies() {
    const state = useSelector(state => state.payload)
        console.log(state)
    return <>
        <div className="mainDiv">
        {state.map(e => <div >
            
                <img src={ e.img} alt="Done"/>
            <p>Title: {e.name}</p>
            <p>IMDB: { e.imdb}</p>
                </div>)}
            </div>
    </>
}