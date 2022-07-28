import React from 'react';
import './App.css';
import {MainCounter} from "./CounterV1/MainCounter";
import {MainCounterV2} from "./CounterV2/MainCounterV2";
import {NavLink, Route, Routes} from "react-router-dom";

function App() {

    return (<>
            <div className={"counterMenu"}>Сounter menu</div>
        <div className={"nav"}>
           <NavLink to={'/'} className={"nav1v"}>First counter</NavLink>
           <NavLink to={'/option'} className={"nav2v"}>Second counter</NavLink>
        </div>
            <Routes>
                <Route path={'/'} element={<MainCounter/>}/>
                <Route path={'/option'} element={<MainCounterV2/>}/>
            </Routes>
        </>
    );
}

export default App;
