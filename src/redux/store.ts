import {combineReducers, legacy_createStore} from "redux";
import {countReducer} from "./counterReducer";
import {loadState, saveState} from "../localStorage/localStorage-utils";


let rootReducer = combineReducers({
    counter: countReducer
})


// let preloadState;
// const minPersistedString = localStorage.getItem('minValue')
// const maxPersistedString = localStorage.getItem('maxValue')
// if (minPersistedString && maxPersistedString) {
//     preloadState = {
//         "counter": {
//             "minValue": JSON.parse(minPersistedString),
//             "maxValue": JSON.parse(maxPersistedString),
//             "counter": JSON.parse(minPersistedString),
//             "error": "",
//             "disable": false,
//             "counterDisable": false,
//             "changeCounter": true
//         }
//     }
// }

export type AppStateType = ReturnType<typeof rootReducer>;
export let store = legacy_createStore(rootReducer, loadState());


store.subscribe(() => {
    saveState( {
        counter: store.getState().counter
    })
})

//
// store.subscribe(() => {
//     localStorage.setItem("minValue", JSON.stringify(store.getState().counter.minValue))
//     localStorage.setItem("maxValue", JSON.stringify(store.getState().counter.maxValue))
//
// })

// @ts-ignore
window.store = store;
