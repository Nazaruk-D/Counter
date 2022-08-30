import React from "react";
import {Button} from "../Components/Button";
import {Input} from "../Components/Input";
import {useDispatch} from "react-redux";
import {
    ChangeMinValueAC, CounterPropsType,
    setChangeCounterAC, setCounterAC,
    setCounterDisableAC,
    setDisableAC,
    setErrorAC,
    setMaxValueAC
} from "../redux/counterReducer";

// type SettingsPropsType = {
//     minValue: number
//     maxValue: number
//     error: string
//     setMinValue: (minValue: number) => void
//     setMaxValue: (maxValue: number) => void
//     setCounter: (counter: number) => void
//     setError: (error: string) => void
//     disable: boolean
//     setDisable: (disable: boolean) => void
//     setCounterDisable: (counterDisable: boolean) => void
//     setChangeCounter: (changeCounter: boolean) => void
// }

export const Settings: React.FC<CounterPropsType> = ({
                                                         minValue,
                                                         maxValue,
                                                         error,
                                                         disable,
                                                     }) => {

    //Handlers
    const setHandler = () => {
        // localStorage.setItem("minValue", minValue.toString())
        // localStorage.setItem("maxValue", maxValue.toString())
        // setCounter(minValue)
        dispatch(setCounterAC())
        // setCounterDisable(false)
        dispatch(setCounterDisableAC(false))
        // setError("")
        dispatch(setErrorAC(""))
        // setChangeCounter(true)
        dispatch(setChangeCounterAC(true))

    }


    // Logics

    // const onChangeMaxHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     // debugger
    //     const inputValue = Number(e.currentTarget.value)
    //     let maxValueLS = localStorage.getItem("maxValue")
    //     setMaxValue(inputValue)
    //     if (minValue < 0) {
    //         setError("Incorrect min value")
    //         setDisable(true)
    //         return
    //     }
    //     if (inputValue <= minValue) {
    //         setCounterDisable(true)
    //         setError("Incorrect max value")
    //         setDisable(true)
    //         return
    //     }
    //     if (inputValue !== Number(maxValueLS)) {
    //         setCounterDisable(true)
    //         setDisable(false)
    //         setError("Press set")
    //         return
    //     } else {
    //         setError("")
    //         setDisable(false)
    //         setCounterDisable(false)
    //     }
    // }
    // const onChangeMinHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     // debugger
    //     const inputValue = Number(e.currentTarget.value)
    //     let minValueLS = localStorage.getItem("minValue")
    //     setMinValue(inputValue)
    //     if (inputValue >= maxValue || inputValue < 0) {
    //         setError("Incorrect min value")
    //         setCounterDisable(true)
    //         setDisable(true)
    //         return
    //     }
    //     if (inputValue !== Number(minValueLS)) {
    //         setCounterDisable(true)
    //         setDisable(false)
    //         setError("Press set")
    //         return
    //     } else {
    //         setError("")
    //         setDisable(false)
    //         setCounterDisable(false)
    //     }
    // }


    const dispatch = useDispatch()

    const onChangeMaxHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        // debugger
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
        if (inputValue !== maxValue) { /// ????????? изменил
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
    const onChangeMinHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        // debugger
        const inputValue = Number(e.currentTarget.value)
        let minValueLS = localStorage.getItem("minValue")
        // setMinValue(inputValue)\
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
        if (inputValue !== Number(minValueLS)) {
            // if (inputValue !== Number(minValueLS)) { ??? тоже изменил логику
            //        setCounterDisable(true)
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