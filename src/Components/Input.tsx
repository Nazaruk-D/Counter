import React from 'react';

export type InputTypeProps = {
    className: string
    typeInp?: string
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
    valueInp: number | string
    inputClass?: { color: string; borderColor?: string;}
}

export const Input: React.FC<InputTypeProps> = ({ className, typeInp, onChange, valueInp,inputClass}) => {
    return (
        <div>
            <input className={className} style={inputClass} value={valueInp} onChange={onChange} type={typeInp}/>
        </div>
    );
};
