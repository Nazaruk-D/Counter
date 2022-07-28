import React, {useState} from "react";
import {Button} from "../Components/Button";
import {Input} from "../Components/Input";

type CounterPropsType = {
    minValue: number
    maxValue: number
    counter: number
    setCounter: (counter: number) => void
    error: string
    counterDisable: boolean
    disable: boolean
    setChangeCounter: (changeCounter:boolean) => void

}

export const Counter: React.FC<CounterPropsType> = ({
                                                        minValue,
                                                        maxValue,
                                                        counter,
                                                        setCounter,
                                                        error,
                                                        counterDisable,
                                                        disable,
                                                        setChangeCounter,
                                                    }) => {

    const onClickHandler = () => {
        if (counter < maxValue) {
            setCounter(counter + 1);
        }
    }
    const onClickClearHandler = () => {
        setCounter(minValue)
    }
    const setHandler = () => {
        setChangeCounter(false)
    }


    const addButtonHandler = (counter: number) => counter === maxValue
    const clearButtonHandler = (counter: number) => counter !== maxValue
    const valueInp = (error: string) => error === "" ? counter : error
    const inputClass = error || counter === maxValue ? {color: "red", borderColor: "red"} : {color: "white"}

    return (
        <div className={"blockContent"}>
            <div>
                <Input className={"counter"}
                       valueInp={valueInp(error)}
                       inputClass={inputClass}/>
                <div className={"buttonCounter"}>
                    <Button title={"Inc "}
                            callBack={onClickHandler}
                            boolean={addButtonHandler(counter)}
                            counterDisable={counterDisable}/>
                    <Button title={"Set"}
                            callBack={setHandler}
                            boolean={disable}/>
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