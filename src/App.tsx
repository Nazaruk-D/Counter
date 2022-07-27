import React, {useEffect, useState} from 'react';
import './App.css';
import {Button} from "./Components/Button";
import {Settings} from "./Components/Settings";
import {Counter} from "./Components/Counter";
import {logDOM} from "@testing-library/react";

function App() {

    //Хуки
    const [minValue, setMinValue] = useState<number>(0)
    const [maxValue, setMaxValue] = useState<number>(5)
    const [counter, setCounter] = useState<number>(minValue)
    const [error, setError] = useState<string>("")
    const [disable, setDisable] = useState<boolean>(false)
    const [counterDisable, setCounterDisable] = useState<boolean>(false)

    return (
        <div className={"all"}>
            <Settings minValue={minValue} maxValue={maxValue} counter={counter} setMinValue={setMinValue}
                      setMaxValue={setMaxValue} setCounter={setCounter} error={error} setError={setError}
                      setDisable={setDisable} disable={disable} counterDisable={counterDisable}
                      setCounterDisable={setCounterDisable} />
            <Counter minValue={minValue} maxValue={maxValue} counter={counter} setCounter={setCounter} error={error}
                     setError={setError} counterDisable={counterDisable} setCounterDisable={setCounterDisable} />
        </div>
    );
}

export default App;
