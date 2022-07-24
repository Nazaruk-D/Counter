import React, {useState} from 'react';
import './App.css';
import {Button} from "./Components/Button";

function App() {

    //Counter
    const minValue = 0;
    const maxValue = 5;
    const [counter, setCounter] = useState<number>(minValue)
    const onClickHandler = () => {
        if (counter < maxValue) {
            setCounter(counter + 1);
            console.log(1)
        }
    }

    const onClickClearHandler = () => {
        setCounter(minValue)
    }

    const inputClass = counter === maxValue ? {color: "red", borderColor: "red"} : {color: "white"}
    const addButtonHandler = (counter: number) => counter === maxValue
    const clearButtonHandler = (counter: number) => counter !== maxValue

    return (
        <div className={"all"}>
            <div className={"blockContent"}>
                <div>
                    <div className={"counter"} style={inputClass}>Клики: {counter}</div>
                    <div>
                        <Button title={"Добавить + 1"}
                                callBack={onClickHandler}
                                counter={addButtonHandler(counter)}/>
                        <Button title={"Очистить"}
                                callBack={onClickClearHandler}
                                counter={clearButtonHandler(counter)}/>
                    </div>

                </div>
            </div>

        </div>
    );
}

export default App;



