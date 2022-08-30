import React from 'react';
import {Settings} from "./Settings";
import {Counter} from "./Counter";
import {CounterPropsType} from "../redux/counterReducer";

export const MainCounterV2: React.FC<CounterPropsType> = ({counter,counterDisable, disable, maxValue, minValue, error }) => {

    //Хуки
    // const [minValue, setMinValue] = useState<number>(0)
    // const [maxValue, setMaxValue] = useState<number>(5)
    // const [counter, setCounter] = useState<number>(minValue)
    // const [error, setError] = useState<string>("")
    // const [disable, setDisable] = useState<boolean>(false)
    // const [counterDisable, setCounterDisable] = useState<boolean>(false)

    //Вносим данные при помощи useEffect
    // useEffect(() => {
    //     if (valueAsString) {
    //         let newMaxValue = JSON.parse(valueAsString)
    //         setMaxValue(newMaxValue)
    //     }
    // }, [])
    // useEffect(() => {
    //     let getMaxValueAsString =  localStorage.getItem("maxValue")
    //     let valueAsString = localStorage.getItem("minValue")
    //     if (valueAsString && getMaxValueAsString) {
    //         let newMinValue = JSON.parse(valueAsString)
    //         let newMaxvalue = JSON.parse(valueAsString)
    //         setMinValue(newMinValue)
    //         setMaxValue(newMaxvalue)
    //         setCounter(newMinValue)
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
            <Settings minValue={minValue} maxValue={maxValue}  error={error}  disable={disable} counterDisable={counterDisable}/>
            <Counter minValue={minValue} maxValue={maxValue} counter={counter} error={error} counterDisable={counterDisable} changeCounter={counterDisable} disable={disable}/>
        </div>
    );
}
