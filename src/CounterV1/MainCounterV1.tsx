import React from 'react';
import {Settings} from "./Settings";
import {Counter} from "./Counter";
import {CounterPropsType} from "../redux/counterReducer";

export const MainCounterV1: React.FC<CounterPropsType> = ({
                                                              minValue,
                                                              maxValue,
                                                              counter,
                                                              error,
                                                              changeCounter,
                                                              counterDisable,
                                                              disable
                                                          }) => {
    return (
        <div className={"all"}>
            {!changeCounter &&
                <Settings minValue={minValue} maxValue={maxValue} error={error} disable={disable} counter={counter}
                          counterDisable={counterDisable} changeCounter={changeCounter}/>}
            {changeCounter &&
                <Counter minValue={minValue} maxValue={maxValue} counter={counter} error={error}
                         counterDisable={counterDisable} disable={disable} changeCounter={changeCounter}/>}
        </div>
    );
}
