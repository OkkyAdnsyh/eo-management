import React from 'react'
import Style from '@/styles/component/button.module.scss'

interface IButtonProps extends React.HTMLProps<HTMLButtonElement>{
    type : "button" | "submit" | "reset"
}

const Button = ({children, className, ...rest} : IButtonProps) => {
  return (
    <button className={Style[className as string]} {...rest}>{children}</button>
  )
}

export default Button