"use client"

import Form from '@/components/elements/FormControl/Form'
import React, { useState } from 'react'
import Style from '@/styles/component/form.module.scss'
import { Password, Text } from '@/components/elements/Input/index'
import Route from '@/components/elements/Link/Route/Route'
import Button from '@/components/elements/Button/Button'
import { ILoginData } from '@/utils/interface/interface'

const LoginForm = () => {

    const [loginData, setData] = useState<ILoginData>({
        userID : "",
        password : ""
    })
    
    // set user identification
    const handleIDInput = (e : React.ChangeEvent<HTMLInputElement>) => {
        setData(
            prevState => {return {...prevState, userID : e.target.value}}
        )
    }

    // set user password
    const handlePassInput = (e : React.ChangeEvent<HTMLInputElement>) => {
        setData(
            prevState => {return {...prevState, password : e.target.value}}
        )
    }

    // handle form submit event
    const handleFormSubmit = (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }

  return (
    <>
        <Form method='POST' onSubmit={handleFormSubmit} className={Style.auth}>
            <Text type='text' name='userId' label='Email or Username :' onChange={handleIDInput} placeholder='Email or Username' className='label__light' />
            <Password name='userPass' label='Password :' onChange={handlePassInput} placeholder='Password' className='label__light' />
            <Route href={"/password-reset"} className='sec__underline'>
                Forgot Your Password ?
            </Route>
            <Button type='submit' className='submit'>
                Login
            </Button>
        </Form>
    </>
  )
}

export default LoginForm