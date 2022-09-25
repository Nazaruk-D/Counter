import {combineReducers, legacy_createStore} from "redux";
import {countReducer} from "./counterReducer";
import {loadState, saveState} from "../localStorage/localStorage-utils";


let rootReducer = combineReducers({
    counter: countReducer
})

export let store = legacy_createStore(rootReducer, loadState());
store.subscribe(() => {
    saveState( {
        counter: store.getState().counter
    })
})

//type

export type AppStateType = ReturnType<typeof rootReducer>;

// @ts-ignore
window.store = store;
