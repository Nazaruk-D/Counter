import React, {useEffect} from "react";
import s from "./Settings.module.css"
import {Button} from "./Button";

type SettingsPropsType = {
    minValue: number
    maxValue: number
    counter: number
    setMinValue: (minValue: number) => void
    setMaxValue: ( maxValue: number) => void
    setCounter: ( counter: number) => void
}

export const Settings: React.FC<SettingsPropsType> = ({minValue, maxValue, counter, setMinValue, setMaxValue, setCounter}) => {

    //Получаем данные при помощи useEffect
    useEffect(() => {
        let valueAsString = localStorage.getItem("maxValue")
        if (valueAsString) {
            let newMaxValue = JSON.parse(valueAsString)
            setMaxValue(newMaxValue)
        }
    }, [])
    useEffect(() => {
        let valueAsString = localStorage.getItem("minValue")
        if (valueAsString) {
            let newMinValue = JSON.parse(valueAsString)
            setMinValue(newMinValue)
        }
    }, [])

    //Handlers
    const setHandler = () => {
        localStorage.setItem("minValue", minValue.toString())
        localStorage.setItem("maxValue", maxValue.toString())
        setCounter(minValue)
    }
    const onChangeMaxHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const x = Number(e.currentTarget.value)
        setMaxValue(x)
    }
    const onChangeMinHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const x = Number(e.currentTarget.value)
        setMinValue(x)
    }

    //Style
    const inputClass = counter === maxValue ? {color: "red", borderColor: "red"} : {color: "white"}


    return (
        <div className={"blockContent"}>
            <div>
                <div className={"inputConteiner"}>
                    <span className={"textSettings"}>Max value:</span>
                    <input className={"settings"} style={inputClass} type={"number"} onChange={onChangeMaxHandler}
                           value={maxValue}/>
                </div>
                <div className={"inputConteiner"}>
                    <span className={"textSettings"}>Min value:</span>
                    <input className={"settings"} style={inputClass} type={"number"} onChange={onChangeMinHandler}
                           value={minValue}/>
                </div>
                <div className={"buttonCounter"}>
                    <Button title={"Set"}
                            callBack={setHandler}
                    />
                </div>
            </div>
        </div>
    )
}