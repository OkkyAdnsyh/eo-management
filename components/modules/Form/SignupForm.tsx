"use client"

import Form from '@/components/elements/FormControl/Form'
import React, { useState } from 'react'
import Style from '@/styles/component/form.module.scss'
import { Password, Text } from '@/components/elements/Input/index'
import Button from '@/components/elements/Button/Button'
import { IRegistData } from '@/utils/interface/interface'

const SignupForm = () => {
    const [registData, setData] = useState<IRegistData>({
        email : "",
        username : "",
        password : ""
    })
    const [passConfirm,setConfirmation] = useState(true)

    const handleEmailInput = (e : React.ChangeEvent<HTMLInputElement>) => {
        setData(
            prevState => {
                return {...prevState, email : e.target.value}
            }
        )
    }

    const handleUsernameInput = (e : React.ChangeEvent<HTMLInputElement>) => {
        setData(
            prevState => {
                return {...prevState, username : e.target.value}
            }
        )
    }

    const handlePassInput = (e : React.ChangeEvent<HTMLInputElement>) => {
        setData(
            prevState => {
                return {...prevState, password : e.target.value}
            }
        )
    }

    const handleFormSubmit = (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }

    const handlePassConfirmation = (e : React.ChangeEvent<HTMLInputElement>) => {
        if(e.target.value === registData.password){
            setConfirmation(true)
        } else {setConfirmation(false)}
    }


  return (
    <>
        <Form method='POST' className={Style.auth} onSubmit={handleFormSubmit}>
            <Text type='email' name='email' label='Email :' onChange={handleEmailInput} placeholder='Email' className='label__light' />
            <Text type='text' name='username' label='Username :' onChange={handleUsernameInput} placeholder='Username' className='label__light' />
            <Password name='password' label='Password :' onChange={handlePassInput} placeholder='Password' className='label__light' />
            <Password name='confirmPass' label='Confirm Password :' onChange={handlePassConfirmation} placeholder='Re-type Password' className='label__light' alert={`${!passConfirm && 'alert'}`} />
            <Button type='submit' className='submit'>
                Sign Up
            </Button>
        </Form>
    </>
  )
}

export default SignupForm