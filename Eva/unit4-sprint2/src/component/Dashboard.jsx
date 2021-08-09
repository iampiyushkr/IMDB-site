import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getMovie } from "../MoviesStor/action";
import { Nav } from "./navbar";
import { TotalMovies } from "./totalmovies";
export function Das() {
        const dispatch=useDispatch()

    useEffect(() => {
        dispatch(getMovie())
    }, [])
    
    return <>
        
        <TotalMovies/>
        </>
}