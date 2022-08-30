import {combineReducers, legacy_createStore} from "redux";
import {countReducer} from "./counterReducer";


let rootReducer = combineReducers({
    counter: countReducer
})

export type AppStateType = ReturnType<typeof rootReducer>;
export let store  = legacy_createStore(rootReducer);

// @ts-ignore
window.store = store;