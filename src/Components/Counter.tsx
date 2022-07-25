import React from "react";
import s from "./Button.module.css"
import {Button} from "./Button";

type CounterPropsType = {
    minValue: number
    maxValue: number
    counter: number
    setCounter: ( counter: number) => void
}

export const Counter: React.FC<CounterPropsType> = ({minValue, maxValue, counter, setCounter}) => {

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

    return (
        <div className={"blockContent"}>
            <div>
                <div className={"counter"} style={inputClass}>Сlicks: {counter}</div>
                <div className={"buttonCounter"}>
                    <Button title={"Inc "}
                            callBack={onClickHandler}
                            counter={addButtonHandler(counter)}/>
                    <Button title={"Reset"}
                            callBack={onClickClearHandler}
                            counter={clearButtonHandler(counter)}/>
                </div>
            </div>
        </div>
    )
}