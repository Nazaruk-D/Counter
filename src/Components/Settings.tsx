import React, {useEffect, useState} from "react";
import s from "./Settings.module.css"
import {Button} from "./Button";

type SettingsPropsType = {
    minValue: number
    maxValue: number
    counter: number
    error: string
    setMinValue: (minValue: number) => void
    setMaxValue: ( maxValue: number) => void
    setCounter: ( counter: number) => void
    setError: (  error: string) => void
}

export const Settings: React.FC<SettingsPropsType> = ({minValue, maxValue, counter, setMinValue, setMaxValue, setCounter, error, setError}) => {

    const [disable, setDisable] = useState<boolean>(false)


    //Получаем данные при помощи useEffect
    useEffect(() => {
        let valueAsString = localStorage.getItem("maxValue")
        if (valueAsString) {
            let newMaxValue = JSON.parse(valueAsString)
            setMaxValue(newMaxValue)
        }
    }, [])
    useEffect(() => {
        let valueAsString = localStorage.getItem("minValue")
        if (valueAsString) {
            let newMinValue = JSON.parse(valueAsString)
            setMinValue(newMinValue)
        }
    }, [])

    // useEffect(() => {
    //     let valueAsString = Number(localStorage.getItem("minValue"))
    //     if (minValue !== valueAsString) {
    //         console.log(123)
    //     }
    // }, [])


    //Handlers
    const setHandler = () => {
        localStorage.setItem("minValue", minValue.toString())
        localStorage.setItem("maxValue", maxValue.toString())
        setCounter(minValue)
    }

    const onChangeMaxHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const x = Number(e.currentTarget.value)
        setMaxValue(x)
        if (x <= minValue) {
            setError("Incorrect value")
            setDisable(true)
        }
        else {
            setError("")
            setDisable(false)
        }
    }

    const onChangeMinHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        // debugger
        const x = Number(e.currentTarget.value)
        setMinValue(x)
        if (x >= maxValue || x < 0) {
            setError("Incorrect value")
            setDisable(true)
        }
        else {
            setError("")
            setDisable(false)
        }
    }


    //Style
    const inputClass = error !== "" ? {color: "red", borderColor: "red"} : {color: "white"}


    return (
        <div className={"blockContent"}>
            <div>
                <div className={"inputConteiner"}>
                    <span className={"textSettings"}>Max value:</span>
                    <input className={"settings"} style={inputClass} type={"number"} onChange={onChangeMaxHandler}
                           value={maxValue}/>
                </div>
                <div className={"inputConteiner"}>
                    <span className={"textSettings"}>Min value:</span>
                    <input className={"settings"} style={inputClass} type={"number"} onChange={onChangeMinHandler}
                           value={minValue}/>
                </div>
                <div className={"buttonCounter"}>
                    <Button title={"Set"}
                            callBack={setHandler}
                            boolean={disable}
                            // disable={disable}
                    />
                </div>
            </div>
        </div>
    )
}