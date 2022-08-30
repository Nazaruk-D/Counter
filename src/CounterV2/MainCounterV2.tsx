import React, {useEffect, useState} from 'react';
import {Settings} from "./Settings";
import {Counter} from "./Counter";

export const MainCounterV2 = () => {

    //Хуки
    const [minValue, setMinValue] = useState<number>(0)
    const [maxValue, setMaxValue] = useState<number>(5)
    const [counter, setCounter] = useState<number>(minValue)
    const [error, setError] = useState<string>("")
    const [disable, setDisable] = useState<boolean>(false)
    const [counterDisable, setCounterDisable] = useState<boolean>(false)

    //Вносим данные при помощи useEffect
    // useEffect(() => {
    //     if (valueAsString) {
    //         let newMaxValue = JSON.parse(valueAsString)
    //         setMaxValue(newMaxValue)
    //     }
    // }, [])

    useEffect(() => {
        let getMaxValueAsString =  localStorage.getItem("maxValue")
        let valueAsString = localStorage.getItem("minValue")
        if (valueAsString && getMaxValueAsString) {
            let newMinValue = JSON.parse(valueAsString)
            let newMaxvalue = JSON.parse(valueAsString)
            setMinValue(newMinValue)
            setMaxValue(newMaxvalue)
            setCounter(newMinValue)
        }
    }, [])

    // useEffect(() => {
    //     let valueAsString = localStorage.getItem("minValue")
    //     if (valueAsString) {
    //         let newMinValue = JSON.parse(valueAsString)
    //         setCounter(newMinValue)
    //     }
    // }, [])

    return (
        <div className={"all"}>
            <Settings minValue={minValue} maxValue={maxValue} setMinValue={setMinValue}
                      setMaxValue={setMaxValue} setCounter={setCounter} error={error} setError={setError}
                      setDisable={setDisable} disable={disable} counterDisable={counterDisable}
                      setCounterDisable={setCounterDisable}/>
            <Counter minValue={minValue} maxValue={maxValue} counter={counter} setCounter={setCounter} error={error}
                     setError={setError} counterDisable={counterDisable} setCounterDisable={setCounterDisable}/>
        </div>
    );
}
