import { combineReducers, createStore, applyMiddleware, compose, bindActionCreators } from "redux";
import { reducer } from "./movieReducer";
import { actorReducer } from "../ActorStore/actorReducer";

/*const rootReducer = combineReducers({
    actor: actorReducer,
    movie:reducer
    
})*/

const customMiddleware = store => next => action => {
    return typeof action ==="function"?action(store.dispatch,store.getState):next(action)
}

const composeEnhancers = (typeof window !== 'undefined' && window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_) || compose;

const enhancer = composeEnhancers(
    applyMiddleware(customMiddleware)
)

export const store=createStore(reducer,enhancer)


