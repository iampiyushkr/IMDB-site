import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export function Detail() {
    const params = useParams()
    const state = useSelector(state => state.payload)
    
    const selectedMovie = state.filter(e => Number(e.id) === Number(params.id))
    console.log(selectedMovie)
    return <div>cool
        {selectedMovie.map(e => <div>
            <img src={ e.img} alt="done"/>
            <p>Title: {e.name}</p>
            <p>Release Date: {e.releaseDate}</p>
            <p>Actor: {e.actor}</p>
            <p>Director: {e.director}</p>
            <p>Writer: { e.writer}</p>

        </div>)}
    </div>
}