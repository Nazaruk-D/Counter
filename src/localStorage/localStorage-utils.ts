import {AppStateType} from "../redux/store";

export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('counter');
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
};

export const saveState = (state: AppStateType) => {
    try {
        localStorage.setItem("counter", JSON.stringify(state))
    } catch {
        console.warn("Error in localStorage")
    }
};
