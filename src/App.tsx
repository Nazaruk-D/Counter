import React from 'react';
import './App.css';
import {MainCounterV1} from "./CounterV1/MainCounterV1";
import {MainCounterV2} from "./CounterV2/MainCounterV2";
import {NavLink, Route, Routes} from "react-router-dom";


function App() {

    return (<>
            <div className={"counterMenu"}>Сounter menu</div>
        <div className={"nav"}>
            <NavLink to={'/Counter'} className={"navA"} style={(params)=>{return {color: params.isActive ? 'gold' : "white"}}}>First counter</NavLink>
            <NavLink to={'/Counter2'} className={"navA"} style={(params)=>{return {color: params.isActive ? 'gold' : "white"}}}>Second counter</NavLink>
        </div>
            <Routes>
                <Route path={'/*'}/>
                <Route path={'/Counter/*'} element={<MainCounterV1/>}/>
                <Route path={'/Counter2/*'} element={<MainCounterV2/>}/>
                <Route path={"*"} element={<MainCounterV1/>} />
            </Routes>
        </>
    );
}

export default App;
