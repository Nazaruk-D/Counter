import React from 'react';
import {Settings} from "./Settings";
import {Counter} from "./Counter";
import {CounterPropsType} from "../redux/counterReducer";

// type MainCounterV1Type = {
//     counter: number
//     minValue: number
//     maxValue: number
//     error: string
//     changeCounter: boolean
//     disable: boolean
//     counterDisable: boolean
// }

export const MainCounterV1: React.FC<CounterPropsType> = ({
                                                              minValue,
                                                              maxValue,
                                                              counter,
                                                              error,
                                                              changeCounter,
                                                              counterDisable,
                                                              disable
                                                          }) => {

    //Хуки
    // const [minValue, setMinValue] = useState<number>(0)
    // const [maxValue, setMaxValue] = useState<number>(5)
    // const [counter, setCounter] = useState<number>(minValue)
    // const [error, setError] = useState<string>("")
    // const [disable, setDisable] = useState<boolean>(false)
    // const [counterDisable, setCounterDisable] = useState<boolean>(false)
    // const [changeCounter, setChangeCounter] = useState<boolean>(true)

    //Вносим данные при помощи useEffect
    // useEffect(() => {
    //     let valueAsString = localStorage.getItem("maxValue")
    //     if (valueAsString) {
    //         let newMaxValue = JSON.parse(valueAsString)
    //         setMaxValue(newMaxValue)
    //     }
    // }, [])
    // useEffect(() => {
    //     let valueAsString = localStorage.getItem("minValue")
    //     if (valueAsString) {
    //         let newMinValue = JSON.parse(valueAsString)
    //         setMinValue(newMinValue)
    //     }
    // }, [])
    // useEffect(() => {
    //     let valueAsString = localStorage.getItem("minValue")
    //     if (valueAsString) {
    //         let newMinValue = JSON.parse(valueAsString)
    //         setCounter(newMinValue)
    //     }
    // }, [])

    return (
        <div className={"all"}>
            {!changeCounter &&
                <Settings minValue={minValue} maxValue={maxValue} error={error} disable={disable} counter={counter}
                          counterDisable={counterDisable} changeCounter={changeCounter}/>}
            {changeCounter &&
                <Counter minValue={minValue} maxValue={maxValue} counter={counter} error={error}
                         counterDisable={counterDisable} disable={disable} changeCounter={changeCounter}/>}
        </div>
    );
}
