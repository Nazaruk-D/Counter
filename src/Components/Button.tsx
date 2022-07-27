import React from "react";
import s from "./Button.module.css"

type ButtonPropsType = {
    title: string
    callBack: () => void
    boolean?: boolean
    disable?: boolean
}

export const Button: React.FC<ButtonPropsType> = (props) => {
    if (props.disable) {props.boolean = true}
    return (
        <button onClick={props.callBack} disabled={props.boolean} className={s.main}>{props.title}</button>
    )
}