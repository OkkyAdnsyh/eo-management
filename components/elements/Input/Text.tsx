import React from 'react'
import Style from '@/styles/component/form.module.scss'

interface IInputTextProps {
    name : string,
    label : string,
    onChange : (e : React.ChangeEvent<HTMLInputElement>) => void,
    placeholder : string,
    className : string,
    type : string
}

export const Text = ({name, label, onChange, placeholder, className, type} : IInputTextProps) => {
  return (
    <div className={Style.input__text__wrapper}>
        <label htmlFor={name} className={Style[className]}>{label}</label>
        <div className={Style.input}>
            <input type={type} id={name} onChange={onChange} placeholder={placeholder}/>
        </div>
    </div>
  )
}
