import { combineReducers, createStore, applyMiddleware, compose, bindActionCreators } from "redux";
import { reducer } from "./movieReducer";
import { actorReducer } from "../ActorStore/actorReducer";

const rootReducer = combineReducers({
    actor: actorReducer,
    movie:reducer
    
})

export const store=createStore(rootReducer)


