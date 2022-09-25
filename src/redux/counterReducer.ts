
let initialState = {
    minValue: 0,
    maxValue: 5,
    counter: 0,
    error: "",
    disable: false,
    counterDisable: false,
    changeCounter: true
}

export const countReducer = (state: CounterPropsType = initialState, action: ActionType): CounterPropsType => {
    switch (action.type) {
        case "INCR":
            return {...state, counter: state.counter + 1}
        case "SET-CHANGE-COUNTER":
            return {...state, changeCounter: action.setFalse}
        case "SET-MIN-VALUE":
            return {...state, counter: state.minValue}
        case "SET-MAX-VALUE":
            return {...state, maxValue: action.inputValue}
        case "SET-ERR":
            return {...state, error: action.textErr}
        case "SET-DISABLE":
            return {...state, disable: action.disable}
        case "SET-COUNTER-DISABLE":
            return {...state, counterDisable: action.disable}
        case "CHANGE-MINVALUE":
            return {...state, minValue: action.inputValue}
        case "SET-COUNTER":
            return {...state, counter: action.value}
        default:
            return state
    }
}

export const incrAC = ()=> ({type: "INCR"} as const)
export const setChangeCounterAC = (setFalse: boolean) => ({type: "SET-CHANGE-COUNTER", setFalse} as const)
export const setMinValueAC = () => ({type: "SET-MIN-VALUE"} as const)
export const setMaxValueAC = (inputValue: number) => ({type: "SET-MAX-VALUE", inputValue} as const)
export const setErrorAC = (textErr: string) => ({type: "SET-ERR", textErr} as const)
export const setDisableAC = (disable: boolean) => ({type: "SET-DISABLE", disable} as const)
export const setCounterDisableAC = (disable: boolean) => ({type: "SET-COUNTER-DISABLE", disable} as const)
export const changeMinValueAC = (inputValue: number) => ({type: "CHANGE-MINVALUE", inputValue} as const)
export const fetchStartCounterAC = (value: number) => ({type: "SET-COUNTER", value} as const)


//types
export type CounterPropsType = {
    minValue: number
    maxValue: number
    counter: number
    error: string
    disable: boolean
    counterDisable: boolean
    changeCounter: boolean
}
type ActionType =
    ReturnType<typeof setChangeCounterAC>
    | ReturnType<typeof incrAC>
    | ReturnType<typeof setMinValueAC>
    | ReturnType<typeof setMaxValueAC>
    | ReturnType<typeof setErrorAC>
    | ReturnType<typeof setDisableAC>
    | ReturnType<typeof setCounterDisableAC>
    | ReturnType<typeof changeMinValueAC>
    | ReturnType<typeof fetchStartCounterAC>
