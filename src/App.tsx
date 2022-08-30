import React from 'react';
import './App.css';
import {MainCounterV1} from "./CounterV1/MainCounterV1";
import {MainCounterV2} from "./CounterV2/MainCounterV2";
import {NavLink, Route, Routes} from "react-router-dom";
import {useSelector} from "react-redux";
import {AppStateType} from "./redux/store";


export type CounterPropsType = {
    minValue: number
    maxValue: number
    counter: number
    error: string
    counterDisable: boolean
    disable: boolean
}

function App() {

    let counter = useSelector<AppStateType, number>(state => state.counter.counter)
    let minValue = useSelector<AppStateType, number>(state => state.counter.minValue)
    let maxValue = useSelector<AppStateType, number>(state => state.counter.maxValue)
    let error = useSelector<AppStateType, string>(state => state.counter.error)
    let changeCounter = useSelector<AppStateType, boolean>(state => state.counter.changeCounter)
    let disable = useSelector<AppStateType, boolean>(state => state.counter.disable)
    let counterDisable = useSelector<AppStateType, boolean>(state => state.counter.counterDisable)

    return (<>
            <div className={"counterMenu"}>Сounter menu</div>
        <div className={"nav"}>
            <NavLink to={'/Counter'} className={"navA"} style={(params)=>{return {color: params.isActive ? 'gold' : "white"}}}>First counter</NavLink>
            <NavLink to={'/Counter2'} className={"navA"} style={(params)=>{return {color: params.isActive ? 'gold' : "white"}}}>Second counter</NavLink>
        </div>
            <Routes>
                <Route path={'/*'}/>
                <Route path={'/Counter/*'} element={<MainCounterV1 counter={counter} error={error} maxValue={maxValue} minValue={minValue} changeCounter={changeCounter} counterDisable={counterDisable} disable={disable}/>}/>
                <Route path={'/Counter2/*'} element={<MainCounterV2/>}/>
                <Route path={"*"} element={<MainCounterV1 counter={counter} error={error} maxValue={maxValue} minValue={minValue} changeCounter={changeCounter} counterDisable={counterDisable} disable={disable}/>} />
            </Routes>
        </>
    );
}

export default App;
