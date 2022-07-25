import React, {useEffect, useState} from 'react';
import './App.css';
import {Button} from "./Components/Button";

function App() {

    //Хуки

    const [minValue, setMinValue] = useState<number>(0)
    const [maxValue, setMaxValue] = useState<number>(5)
    const [counter, setCounter] = useState<number>(minValue)


    //Получаем данные при помощи useEffect
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

    const onClickHandler = () => {
        if (counter < maxValue) {
            setCounter(counter + 1);
        }
    }
    const onClickClearHandler = () => {
        setCounter(minValue)
    }
    const setHandler = () => {
        localStorage.setItem("minValue", minValue.toString())
        localStorage.setItem("maxValue", maxValue.toString())
        setCounter(minValue)
    }


    const onChangeMaxHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const x = Number(e.currentTarget.value)
        setMaxValue(x)
    }
    const onChangeMinHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const x = Number(e.currentTarget.value)
        setMinValue(x)
    }

    const inputClass = counter === maxValue ? {color: "red", borderColor: "red"} : {color: "white"}
    const addButtonHandler = (counter: number) => counter === maxValue
    const clearButtonHandler = (counter: number) => counter !== maxValue


    return (
        <div className={"all"}>
            <div className={"blockContent"}>
                <div>
                    <div className={"inputConteiner"}>
                        <span className={"textSettings"}>Max value:</span>
                        <input className={"settings"} style={inputClass} type={"number"} onChange={onChangeMaxHandler}
                               value={maxValue}/>
                    </div>
                    <div className={"inputConteiner"}>
                        <span className={"textSettings"}>Min value:</span>
                        <input className={"settings"} style={inputClass} type={"number"} onChange={onChangeMinHandler}
                               value={minValue}/>
                    </div>
                    <div className={"buttonCounter"}>
                        <Button title={"Set"}
                                callBack={setHandler}
                        />
                    </div>
                </div>
            </div>
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
        </div>
    );
}

export default App;

