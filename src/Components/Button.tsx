import React from "react";
import s from "./Button.module.css"

type ButtonPropsType = {
    title: string
    callBack: () => void
    boolean?: boolean
    counterDisable?: boolean
    error?: string
}

export const Button: React.FC<ButtonPropsType> = (props) => {
    const disableHandler = () => {
        // debugger
        if (props.counterDisable || props.boolean ) {
            return true
        }
    }

    return (
        <button onClick={props.callBack} disabled={disableHandler()} className={s.main}>{props.title}</button>
    )
}