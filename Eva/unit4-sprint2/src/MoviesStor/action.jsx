import axios from "axios";
import { GET_MOVIE_FAILURE, Get_MOVIE_SUCCESS, GET_MOVIE_REQUEST, GET_MOVIE_SUCCESS } from "./actionType";

const getMovieRequest = () => {
    return {
        type: GET_MOVIE_REQUEST
    };
};
const getMovieSuccess = (payload) => {
    return {
        type: GET_MOVIE_SUCCESS,
        payload,

    };
};

const getMovieFailure = (payload) => {
    return {
        type: GET_MOVIE_FAILURE,
        payload,
    };
};

const getMovie = () =>(dispatch)=> {
    dispatch(getMovieRequest());
    return axios.get("http://localhost:3001/movie")
}