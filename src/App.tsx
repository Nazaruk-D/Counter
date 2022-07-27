import React, {useEffect, useState} from 'react';
import './App.css';
import {Button} from "./Components/Button";
import {Settings} from "./CounterV1/Settings";
import {Counter} from "./CounterV1/Counter";
import {logDOM} from "@testing-library/react";
import {MainCounter} from "./CounterV1/MainCounter";
import {MainCounterV2} from "./CounterV2/MainCounterV2";

function App() {

    return (
        <>
        <MainCounter/>
        <MainCounterV2/>
        </>
    );
}

export default App;
