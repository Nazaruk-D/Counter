import React, {useState} from "react";
import s from "./Button.module.css"
import {Button} from "./Button";
import {Input} from "./Input";

type CounterPropsType = {
    minValue: number
    maxValue: number
    counter: number
    setCounter: (counter: number) => void
    error: string
    setError: (error: string) => void
    counterDisable: boolean
    setCounterDisable: (counterDisable: boolean) => void

}

export const Counter: React.FC<CounterPropsType> = ({
                                                        minValue,
                                                        maxValue,
                                                        counter,
                                                        setCounter,
                                                        error,
                                                        counterDisable,
                                                    }) => {

    const onClickHandler = () => {
        if (counter < maxValue) {
            setCounter(counter + 1);
        }
    }
    const onClickClearHandler = () => {
        setCounter(minValue)
    }

    const addButtonHandler = (counter: number) => counter === maxValue
    const clearButtonHandler = (counter: number) => counter !== maxValue
    const valueInp = (error: string) => error === "" ? counter : error

    return (
        <div className={"blockContent"}>
            <div>
                <Input error={error} className={"counter"} valueInp={valueInp(error)} maxValue={maxValue}/>
                <div className={"buttonCounter"}>
                    <Button title={"Inc "}
                            callBack={onClickHandler}
                            boolean={addButtonHandler(counter)}
                            counterDisable={counterDisable}/>
                    <Button title={"Reset"}
                            callBack={onClickClearHandler}
                            boolean={clearButtonHandler(counter)}
                            counterDisable={counterDisable}
                    />
                </div>
            </div>
        </div>
    )
}