import React from "react";
import s from "./Button.module.css"
import {Button} from "./Button";

type CounterPropsType = {
    minValue: number
    maxValue: number
    counter: number
    setCounter: ( counter: number) => void
    error: string
    setError: ( error: string) => void
    // disable: boolean
}

export const Counter: React.FC<CounterPropsType> = ({minValue, maxValue, counter, setCounter, error, setError}) => {

    const onClickHandler = () => {
        if (counter < maxValue) {
            setCounter(counter + 1);
        }
    }
    const onClickClearHandler = () => {
        setCounter(minValue)
    }

    const inputClass = counter === maxValue ? {color: "red", borderColor: "red"} : {color: "white"}
    const addButtonHandler = (counter: number) => counter === maxValue
    const clearButtonHandler = (counter: number) => counter !== maxValue
    const valueInp = (error:string) => error === "" ? counter : error

    return (
        <div className={"blockContent"}>
            <div>
                {/*<div className={"counter"} style={inputClass}>Сlicks: {counter}</div>*/}
                <input className={"counter"} style={inputClass} value={valueInp(error)}/> {/*value={counter === minValue ? "Clicks: " + counter : error}*/}
                <div className={"buttonCounter"}>
                    <Button title={"Inc "}
                            callBack={onClickHandler}
                            boolean={addButtonHandler(counter)}/>
                    <Button title={"Reset"}
                            callBack={onClickClearHandler}
                            boolean={clearButtonHandler(counter)}/>
                </div>
            </div>
        </div>
    )
}