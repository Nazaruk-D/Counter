import React from 'react';
import './App.css';
import {MainCounter} from "./CounterV1/MainCounter";
import {MainCounterV2} from "./CounterV2/MainCounterV2";
import {NavLink, Route, Routes} from "react-router-dom";


function App() {

    return (<>
            <div className={"counterMenu"}>Сounter menu</div>
        <div className={"nav"}>
           <NavLink to={'/Counter'} className={"nav1v"} style={(params)=>{return {color: params.isActive ? 'gold' : "white"}}}>First counter</NavLink>
           <NavLink to={'/Option2'} className={"nav2v"} style={(params)=>{return {color: params.isActive ? 'gold' : "white"}}}>Second counter</NavLink>
        </div>
            <Routes>
                <Route path={'/Counter/*'} element={<MainCounter/>}/>
                <Route path={'/Option2/*'} element={<MainCounterV2/>}/>
                {/*<Route path={() => <MainCounter/>}/>*/}
            </Routes>
        </>
    );
}

export default App;
