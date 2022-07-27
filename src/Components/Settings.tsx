import React, {useEffect, useState} from "react";
import s from "./Settings.module.css"
import {Button} from "./Button";
import {Input} from "./Input";

type SettingsPropsType = {
    minValue: number
    maxValue: number
    counter: number
    error: string
    setMinValue: (minValue: number) => void
    setMaxValue: (maxValue: number) => void
    setCounter: (counter: number) => void
    setError: (error: string) => void
    disable: boolean
    setDisable: (disable: boolean) => void
    counterDisable: boolean
    setCounterDisable: (counterDisable: boolean) => void
}

export const Settings: React.FC<SettingsPropsType> = ({
                                                          minValue,
                                                          maxValue,
                                                          setMinValue,
                                                          setMaxValue,
                                                          setCounter,
                                                          error,
                                                          setError,
                                                          setDisable,
                                                          disable,
                                                          setCounterDisable,
                                                      }) => {


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

    //Handlers
    const setHandler = () => {
        localStorage.setItem("minValue", minValue.toString())
        localStorage.setItem("maxValue", maxValue.toString())
        setCounter(minValue)
        setCounterDisable(false)
        setError("")
    }

    // Logics
    const onChangeMaxHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        debugger
        const x = Number(e.currentTarget.value)
        let aaa = localStorage.getItem("maxValue")
        setMaxValue(x)
        if (x <= minValue) {
            setCounterDisable(true)
            setError("Incorrect value")
            setDisable(true)
            return
        }
        if (x !== Number(aaa)) {
            setCounterDisable(true)
            setDisable(false)
            setError("Press set")
            return
        } else {
            setError("")
            setDisable(false)
            setCounterDisable(false)
        }
    }
    const onChangeMinHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        debugger
        const x = Number(e.currentTarget.value)
        let ddd = localStorage.getItem("minValue")
        setMinValue(x)
        if (x >= maxValue || x < 0) {
            setError("Incorrect value")
            setCounterDisable(true)
            setDisable(true)
            return
        }
        if (x !== Number(ddd)) {
            setCounterDisable(true)
            setDisable(false)
            setError("Press set")
            return
        } else {
            setError("")
            setDisable(false)
            setCounterDisable(false)
        }
    }

    return (
        <div className={"blockContent"}>
            <div>
                <div className={"inputConteiner"}>
                    <span className={"textSettings"}>Max value:</span>
                    <Input error={error} className={"settings"} typeInp={"number"} onChange={onChangeMaxHandler} valueInp={maxValue}/>
                </div>
                <div className={"inputConteiner"}>
                    <span className={"textSettings"}>Min value:</span>
                    <Input error={error} className={"settings"} typeInp={"number"} onChange={onChangeMinHandler} valueInp={minValue}/>

                </div>
                <div className={"buttonCounter"}>
                    <Button title={"Set"}
                            callBack={setHandler}
                            boolean={disable}
                    />
                </div>
            </div>
        </div>
    )
}