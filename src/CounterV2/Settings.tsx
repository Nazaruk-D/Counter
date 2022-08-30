import React from "react";
import {Button} from "../Components/Button";
import {Input} from "../Components/Input";
import {useDispatch} from "react-redux";
import {
    ChangeMinValueAC,
    setCounterAC,
    setCounterDisableAC,
    setDisableAC,
    setErrorAC,
    setMaxValueAC,
    setMinValueAC
} from "../redux/counterReducer";

type SettingsPropsType = {
    minValue: number
    maxValue: number
    error: string
    disable: boolean
    counterDisable: boolean
}

export const Settings: React.FC<SettingsPropsType> = ({
                                                          minValue, maxValue,
                                                          error, disable,
                                                      }) => {

    //Handlers
    const dispatch = useDispatch()
    const setHandler = () => {
        localStorage.setItem("minValue", minValue.toString())
        localStorage.setItem("maxValue", maxValue.toString())
        // setCounter(minValue)
        // setCounterDisable(false)
        // setError("")
        dispatch(setCounterAC())
        dispatch(setCounterDisableAC(false))
        dispatch(setErrorAC(""))
    }


    // Logics
    const onChangeMaxHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = Number(e.currentTarget.value)
        // let maxValueLS = localStorage.getItem("maxValue")
        // setMaxValue(inputValue)
        dispatch(setMaxValueAC(inputValue))
        if (minValue < 0) {
            // setError("Incorrect min value")
            dispatch(setErrorAC("Incorrect min value"))
            // setDisable(true)
            dispatch(setDisableAC(true))
            return
        }
        if (inputValue <= minValue) {
            // setCounterDisable(true)
            dispatch(setCounterDisableAC(true))
            // setError("Incorrect max value")
            dispatch(setErrorAC("Incorrect max value"))
            // setDisable(true)
            dispatch(setDisableAC(true))
            return
        }
        if (inputValue !== Number(maxValue)) {
            // setCounterDisable(true)
            dispatch(setCounterDisableAC(true))
            // setDisable(false)
            dispatch(setDisableAC(false))
            // setError("Press set")
            dispatch(setErrorAC("Press set"))
            return
        }

        else {
            // setError("")
            dispatch(setErrorAC(""))
            // setDisable(false)
            dispatch(setDisableAC(false))
            // setCounterDisable(false)
            dispatch(setCounterDisableAC(false))
        }
    }
    const onChangeMinHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        // debugger
        const inputValue = Number(e.currentTarget.value)
        // let minValueLS = localStorage.getItem("minValue")
        // setMinValue(inputValue)
        dispatch(ChangeMinValueAC(inputValue))
        if (inputValue >= maxValue || inputValue < 0) {
            // setError("Incorrect min value")
            dispatch(setErrorAC("Incorrect min value"))
            // setCounterDisable(true)
            dispatch(setCounterDisableAC(true))
            // setDisable(true)
            dispatch(setDisableAC(true))
            return
        }
        if (inputValue !== Number(minValue)) {
            // setCounterDisable(true)
            dispatch(setCounterDisableAC(true))
            // setDisable(false)
            dispatch(setDisableAC(false))
            // setError("Press set")
            dispatch(setErrorAC("Press set"))
            return
        } else {
            // setError("")
            dispatch(setErrorAC(""))
            // setDisable(false)
            dispatch(setDisableAC(false))
            // setCounterDisable(false)
            dispatch(setCounterDisableAC(false))
        }
    }
    const inputMaxClass = error === "Incorrect max value" ? {color: "red", borderColor: "red"} : {color: "black"}
    const inputMinClass = error === "Incorrect min value" ? {color: "red", borderColor: "red"} : {color: "black"}

    return (
        <div className={"blockContent"}>
            <div>
                <div className={"inputContainer"}>
                    <span className={"textSettings"}>Max value:</span>
                    <Input className={"settings"}
                           typeInp={"number"}
                           onChange={onChangeMaxHandler}
                           valueInp={maxValue}
                           inputClass={inputMaxClass}
                    />
                </div>
                <div className={"inputContainer"}>
                    <span className={"textSettings"}>Start value:</span>
                    <Input className={"settings"}
                           typeInp={"number"}
                           onChange={onChangeMinHandler}
                           valueInp={minValue}
                           inputClass={inputMinClass}/>

                </div>
                <div className={"buttonCounter"}>
                    <Button title={"Set"}
                            callBack={setHandler}
                            boolean={disable}/>
                </div>
            </div>
        </div>
    )
}