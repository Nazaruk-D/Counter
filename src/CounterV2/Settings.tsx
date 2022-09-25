import React from "react";
import {Button} from "../Components/Button";
import {Input} from "../Components/Input";
import {useDispatch} from "react-redux";
import {
    changeMinValueAC,
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
        dispatch(setMinValueAC())
        dispatch(setCounterDisableAC(false))
        dispatch(setErrorAC(""))
    }


    // Logics
    const onChangeMaxHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = Number(e.currentTarget.value)
        dispatch(setMaxValueAC(inputValue))
        if (minValue < 0) {
            dispatch(setErrorAC("Incorrect min value"))
            // setDisable(true)
            dispatch(setDisableAC(true))
            return
        }
        if (inputValue <= minValue) {
            dispatch(setCounterDisableAC(true))
            dispatch(setErrorAC("Incorrect max value"))
            dispatch(setDisableAC(true))
            return
        }
        if (inputValue !== Number(maxValue)) {
            dispatch(setCounterDisableAC(true))
            dispatch(setDisableAC(false))
            dispatch(setErrorAC("Press set"))
            return
        } else {
            dispatch(setErrorAC(""))
            dispatch(setDisableAC(false))
            dispatch(setCounterDisableAC(false))
        }
    }
    const onChangeMinHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = Number(e.currentTarget.value)
        dispatch(changeMinValueAC(inputValue))
        if (inputValue >= maxValue || inputValue < 0) {
            dispatch(setErrorAC("Incorrect min value"))
            dispatch(setCounterDisableAC(true))
            dispatch(setDisableAC(true))
            return
        }
        if (inputValue !== Number(minValue)) {
            dispatch(setCounterDisableAC(true))
            dispatch(setDisableAC(false))
            dispatch(setErrorAC("Press set"))
            return
        } else {
            dispatch(setErrorAC(""))
            dispatch(setDisableAC(false))
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