"use client"

import { useState } from 'react'
import Style from '@/styles/component/form.module.scss'
import Button from '../Button/Button'

interface IInputPassProps {
    name : string,
    label : string,
    onChange : (e : React.ChangeEvent<HTMLInputElement>) => void,
    placeholder : string,
    className : string,
    alert? : string
}

export const Password = ({name, label, onChange, placeholder, className, alert} : IInputPassProps) => {
    const [passIsVisible, setVisibility] = useState(false)

    const handlePassVisible = (e : React.MouseEvent<HTMLButtonElement>) => {
        setVisibility(!passIsVisible)
    }


  return (
    <div className={Style.input__text__wrapper}>
        <label htmlFor={name} className={Style[className]}>{label}</label>
        <div className={`${Style.input} ${Style[alert as string]}`}>
            <input type={`${passIsVisible ? "text" : "password"}`} id={name} onChange={onChange} placeholder={placeholder}/>
            <Button type='button' className='input__toggle' onClick={handlePassVisible}>
                {
                    passIsVisible ?
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 9C11.2044 9 10.4413 9.31607 9.87868 9.87868C9.31607 10.4413 9 11.2044 9 12C9 12.7956 9.31607 13.5587 9.87868 14.1213C10.4413 14.6839 11.2044 15 12 15C12.7956 15 13.5587 14.6839 14.1213 14.1213C14.6839 13.5587 15 12.7956 15 12C15 11.2044 14.6839 10.4413 14.1213 9.87868C13.5587 9.31607 12.7956 9 12 9ZM12 17C10.6739 17 9.40215 16.4732 8.46447 15.5355C7.52678 14.5979 7 13.3261 7 12C7 10.6739 7.52678 9.40215 8.46447 8.46447C9.40215 7.52678 10.6739 7 12 7C13.3261 7 14.5979 7.52678 15.5355 8.46447C16.4732 9.40215 17 10.6739 17 12C17 13.3261 16.4732 14.5979 15.5355 15.5355C14.5979 16.4732 13.3261 17 12 17ZM12 4.5C7 4.5 2.73 7.61 1 12C2.73 16.39 7 19.5 12 19.5C17 19.5 21.27 16.39 23 12C21.27 7.61 17 4.5 12 4.5Z" fill="#0077B6"/>
                    </svg> : 
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.79 15.912L13.176 14.297C12.5518 14.5202 11.8771 14.5615 11.2304 14.4162C10.5837 14.2709 9.99153 13.9449 9.52282 13.4762C9.05411 13.0075 8.72814 12.4153 8.58283 11.7686C8.43752 11.1219 8.47885 10.4472 8.702 9.823L6.642 7.763C4.938 9.278 4 11 4 11C4 11 7 16.5 12 16.5C12.9604 16.4967 13.9099 16.2965 14.79 15.912ZM9.21 6.088C10.0901 5.70342 11.0396 5.50331 12 5.5C17 5.5 20 11 20 11C20 11 19.061 12.721 17.359 14.238L15.297 12.176C15.5202 11.5518 15.5615 10.8771 15.4162 10.2304C15.2709 9.58369 14.9449 8.99153 14.4762 8.52282C14.0075 8.05411 13.4153 7.72814 12.7686 7.58283C12.1219 7.43752 11.4472 7.47885 10.823 7.702L9.21 6.088Z" fill="#9F9F9F"/>
                        <path d="M9.525 10.646C9.46999 11.0303 9.50524 11.4222 9.62796 11.7905C9.75068 12.1588 9.95749 12.4935 10.232 12.768C10.5065 13.0425 10.8412 13.2493 11.2095 13.372C11.5778 13.4948 11.9697 13.53 12.354 13.475L9.525 10.646ZM14.475 11.354L11.646 8.524C12.0303 8.46899 12.4221 8.50424 12.7905 8.62696C13.1588 8.74968 13.4935 8.95649 13.768 9.23101C14.0425 9.50553 14.2493 9.84021 14.372 10.2085C14.4948 10.5768 14.53 10.9687 14.475 11.353V11.354ZM17.646 17.354L5.646 5.354L6.354 4.646L18.354 16.646L17.646 17.354Z" fill="#9F9F9F"/>
                    </svg>
                }
            </Button>
        </div>
    </div>
  )
}