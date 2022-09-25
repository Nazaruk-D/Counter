import React from 'react';
import {Settings} from "./Settings";
import {Counter} from "./Counter";
import {CounterPropsType} from "../redux/counterReducer";

export const MainCounterV2: React.FC<CounterPropsType> = ({
                                                              counter,
                                                              counterDisable,
                                                              disable,
                                                              maxValue,
                                                              minValue,
                                                              error
                                                          }) => {
    return (
        <div className={"all"}>
            <Settings minValue={minValue} maxValue={maxValue} error={error} disable={disable}
                      counterDisable={counterDisable}/>
            <Counter minValue={minValue} maxValue={maxValue} counter={counter} error={error}
                     counterDisable={counterDisable} changeCounter={counterDisable} disable={disable}/>
        </div>
    );
}
