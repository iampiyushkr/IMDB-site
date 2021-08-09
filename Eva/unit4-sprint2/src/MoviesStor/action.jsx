import axios from "axios";
import { GET_MOVIE_FAILURE,  GET_MOVIE_REQUEST, GET_MOVIE_SUCCESS } from "./actionType";

const getMovieRequest = () => {
    return {
        type: GET_MOVIE_REQUEST
    };
};
const getMovieSuccess = (payload) => {
    return {
        type: GET_MOVIE_SUCCESS,
        data:payload,

    };
};

const getMovieFailure = (payload) => {
    return {
        type: GET_MOVIE_FAILURE,
        data:payload,
    };
};

const getMovie = () =>(dispatch)=> {
    dispatch(getMovieRequest());
    return axios.get("http://localhost:3001/movies")
        .then((res) => {
        dispatch(getMovieSuccess(res))
        })
        .catch((err)=> {
    dispatch(getMovieFailure(err))
    })
}
export {getMovie}