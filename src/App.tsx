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

    // if ()

    return (
        <div className={"all"}>
            <Settings minValue={minValue} maxValue={maxValue} counter={counter} setMinValue={setMinValue} setMaxValue={setMaxValue} setCounter={setCounter} error={error} setError={setError}/>
            <Counter minValue={minValue} maxValue={maxValue} counter={counter} setCounter={setCounter} error={error} setError={setError}/>
        </div>
    );
}

export default App;




//Архив
{/*<div className={"blockContent"}>*/}
{/*    <div>*/}
{/*        <div className={"counter"} style={inputClass}>Сlicks: {counter}</div>*/}
{/*        <div className={"buttonCounter"}>*/}
{/*            <Button title={"Inc "}*/}
{/*                    callBack={onClickHandler}*/}
{/*                    counter={addButtonHandler(counter)}/>*/}
{/*            <Button title={"Reset"}*/}
{/*                    callBack={onClickClearHandler}*/}
{/*                    counter={clearButtonHandler(counter)}/>*/}
{/*        </div>*/}
{/*    </div>*/}
{/*</div>*/}
{/*<div className={"blockContent"}>*/}
{/*    <div>*/}
{/*        <div className={"inputConteiner"}>*/}
{/*            <span className={"textSettings"}>Max value:</span>*/}
{/*            <input className={"settings"} style={inputClass} type={"number"} onChange={onChangeMaxHandler}*/}
{/*                   value={maxValue}/>*/}
{/*        </div>*/}
{/*        <div className={"inputConteiner"}>*/}
{/*            <span className={"textSettings"}>Min value:</span>*/}
{/*            <input className={"settings"} style={inputClass} type={"number"} onChange={onChangeMinHandler}*/}
{/*                   value={minValue}/>*/}
{/*        </div>*/}
{/*        <div className={"buttonCounter"}>*/}
{/*            <Button title={"Set"}*/}
{/*                    callBack={setHandler}*/}
{/*            />*/}
{/*        </div>*/}
{/*    </div>*/}
{/*</div>*/}

