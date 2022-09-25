import React from "react";
import {Button} from "../Components/Button";
import {Input} from "../Components/Input";
import {useDispatch} from "react-redux";
import {CounterPropsType, incrAC, setChangeCounterAC, setMinValueAC} from "../redux/counterReducer";

export const Counter: React.FC<CounterPropsType> = ({
                                                        maxValue,
                                                        counter,
                                                        error,
                                                        counterDisable,
                                                        disable,
                                                    }) => {

    const dispatch = useDispatch()
    const addButtonHandler = (counter: number) => counter === maxValue
    const clearButtonHandler = (counter: number) => counter !== maxValue
    const valueInp = (error: string) => error === "" ? counter : error
    const inputClass = error || counter === maxValue ? {color: "red", borderColor: "red"} : {color: "white"}

    const onClickHandler = () => {
        if (counter < maxValue) {
            dispatch(incrAC())
        }
    }
    const onClickClearHandler = () => {
        dispatch(setMinValueAC())
    }
    const setHandler = () => {
        dispatch(setChangeCounterAC(false))
    }


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
                            counterDisable={counterDisable}/>
                </div>
            </div>
        </div>
    )
}