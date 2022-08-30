import React from "react";

import {Button} from "../Components/Button";
import {Input} from "../Components/Input";
import {CounterPropsType, IncrAC, setCounterAC} from "../redux/counterReducer";
import {useDispatch} from "react-redux";


export const Counter: React.FC<CounterPropsType> = ({
                                                        minValue,
                                                        maxValue,
                                                        counter,
                                                        error,
                                                        counterDisable,
                                                    }) => {

    const dispatch = useDispatch()

    const onClickHandler = () => {
        if (counter < maxValue) {
            // setCounter(counter + 1);
            dispatch(IncrAC())
        }
    }

    const onClickResetHandler = () => {
        dispatch(setCounterAC())
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
                    <Button title={"Reset"}
                            callBack={onClickResetHandler}
                            boolean={clearButtonHandler(counter)}
                            counterDisable={counterDisable}
                    />
                </div>
            </div>
        </div>
    )
}