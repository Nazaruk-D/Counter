import React from "react";
import s from "./Button.module.css"

type ButtonPropsType = {
    title: string
    callBack: () => void
    counter: boolean
}

export const Button: React.FC<ButtonPropsType> = (props) => {
    return (
        <button onClick={props.callBack} disabled={props.counter} className={s.main}>{props.title}</button>
    )
}