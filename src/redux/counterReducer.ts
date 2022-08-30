import {useState} from "react";

export type CounterPropsType = {
    minValue: number
    maxValue: number
    counter: number
    error: string
    disable: boolean
    counterDisable: boolean
    changeCounter: boolean
}

type IncrType = {
    type: "INCR"
}
type SetChangeCounterType = {
    type: "SET-CHANGE-COUNTER"
    setFalse: boolean
}
type SetMinValueType = {
    type: "SET-MIN-VALUE"
}
type SetMaxValueType = {
    type: "SET-MAX-VALUE"
    inputValue: number
}
type SetErrType = {
    type: "SET-ERR"
    textErr: string
}
type SetDisableType = {
    type: "SET-DISABLE"
    disable: boolean
}
type SetCounterDisableType = {
    type: "SET-COUNTER-DISABLE"
    disable: boolean
}
type SetCounterType = {
    type: "SET-COUNTER"
}
type ChangeMinValueType = {
    type: "CHANGE-MINVALUE"
    inputValue: number
}


type ActionType =
    IncrType
    | SetChangeCounterType
    | SetMinValueType
    | SetMaxValueType
    | SetErrType
    | SetDisableType
    | SetCounterDisableType
    | SetCounterType
    | ChangeMinValueType


let initialState = {
    minValue: 0,
    maxValue: 5,
    counter: 1,
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
        case "SET-COUNTER":
            return {...state, counter: state.minValue}
        case "CHANGE-MINVALUE":
            return {...state, minValue: action.inputValue}
        default:
            return state
    }
}


export const IncrAC = (): IncrType => ({type: "INCR"})
export const setChangeCounterAC = (setFalse: boolean): SetChangeCounterType => ({type: "SET-CHANGE-COUNTER", setFalse})
export const setMinValueAC = (): SetMinValueType => ({type: "SET-MIN-VALUE"})
export const setMaxValueAC = (inputValue: number): SetMaxValueType => ({type: "SET-MAX-VALUE", inputValue})
export const setErrorAC = (textErr: string): SetErrType => ({type: "SET-ERR", textErr})
export const setDisableAC = (disable: boolean): SetDisableType => ({type: "SET-DISABLE", disable})
export const setCounterDisableAC = (disable: boolean): SetCounterDisableType => ({type: "SET-COUNTER-DISABLE", disable})
export const setCounterAC = (): SetCounterType => ({type: "SET-COUNTER"})
export const ChangeMinValueAC = (inputValue: number): ChangeMinValueType => ({type: "CHANGE-MINVALUE", inputValue})

