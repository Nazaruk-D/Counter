import React from 'react';
import './App.css';
import {MainCounterV1} from "./CounterV1/MainCounter";
import {MainCounterV2} from "./CounterV2/MainCounterV2";
import {NavLink, Route, Routes} from "react-router-dom";


function App() {

    return (<>
            <div className={"counterMenu"}>Сounter menu</div>
        <div className={"nav"}>
            <NavLink to={'/Counter'} className={"nav2v"} style={(params)=>{return {color: params.isActive ? 'gold' : "white"}}}>First counter</NavLink>
            <NavLink to={'/Counter2'} className={"nav1v"} style={(params)=>{return {color: params.isActive ? 'gold' : "white"}}}>Second counter</NavLink>
        </div>
            <Routes>
                <Route path={'/Counter/*'} element={<MainCounterV2/>}/>
                <Route path={'/Counter2/*'} element={<MainCounterV1/>}/>
            </Routes>
        </>
    );
}

export default App;
