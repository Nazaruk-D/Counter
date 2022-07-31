import React, {useEffect, useState} from 'react';
import {Settings} from "./Settings";
import {Counter} from "./Counter";

export const MainCounterV1 = () => {

    //Хуки
    const [minValue, setMinValue] = useState<number>(0)
    const [maxValue, setMaxValue] = useState<number>(5)
    const [counter, setCounter] = useState<number>(minValue)
    const [error, setError] = useState<string>("")
    const [disable, setDisable] = useState<boolean>(false)
    const [counterDisable, setCounterDisable] = useState<boolean>(false)
    const [changeCounter, setChangeCounter] = useState<boolean>(true)

    //Вносим данные при помощи useEffect
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
    useEffect(() => {
        let valueAsString = localStorage.getItem("minValue")
        if (valueAsString) {
            let newMinValue = JSON.parse(valueAsString)
            setCounter(newMinValue)
        }
    }, [])

    return (
        <div className={"all"}>
            {!changeCounter &&
                <Settings minValue={minValue} maxValue={maxValue} setMinValue={setMinValue}
                          setMaxValue={setMaxValue} setCounter={setCounter} error={error} setError={setError}
                          setDisable={setDisable} disable={disable}
                          setCounterDisable={setCounterDisable} setChangeCounter={setChangeCounter}/>}
            {changeCounter &&
                <Counter minValue={minValue} maxValue={maxValue} counter={counter} setCounter={setCounter} error={error}
                         counterDisable={counterDisable} disable={disable} setChangeCounter={setChangeCounter}/>}
        </div>
    );
}
