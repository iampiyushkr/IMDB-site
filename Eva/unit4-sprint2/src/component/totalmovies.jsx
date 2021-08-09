import { useSelector } from "react-redux";

export function TotalMovies() {
    const state = useSelector(state => state.payload)
        console.log(state)
    return <>
        {state.map(e => <div>
            <p>{e.name }</p>
      </div>)}
    </>
}