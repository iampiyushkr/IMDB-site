import { GET_MOVIE_FAILURE, GET_MOVIE_SUCCESS, GET_MOVIE_REQUEST } from "./actionType";

const initialState = {
    payload:[]
}
const reducer = (state = initialState, { type, data }) => {
    switch (type) {
        case GET_MOVIE_REQUEST: {
            return {
                ...state,

            }
        }
        case GET_MOVIE_SUCCESS: {
            return {
                ...state,
                payload:data
            }
        }
        case GET_MOVIE_FAILURE: {
            return {
                ...state,
            }
        }
            default:return state
    }
}
export {reducer}