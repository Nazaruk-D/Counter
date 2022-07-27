import React from 'react';


export type InputTypeProps = {
    error: string
    className: string
    typeInp?: string
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
    valueInp: number | string
    maxValue?: number
}

export const Input: React.FC<InputTypeProps> = ({error, className, typeInp, onChange, valueInp, maxValue}) => {

    const inputClass = error || valueInp === maxValue ? {color: "red", borderColor: "red"} : {color: "white"}

    return (
        <div>
            <input className={className} style={inputClass} value={valueInp} onChange={onChange} type={typeInp}/>
        </div>
    );
};
