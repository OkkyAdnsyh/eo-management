import React from 'react'
import Style from '@/styles/layout/home.module.scss'
import { Blocks } from '@/components/blocks'
import Route from '@/components/elements/Link/Route/Route'
import SignupForm from '@/components/modules/Form/SignupForm'

const SignupLayout = () => {
  return (
    <main className={Style.layout}>
        <Blocks.BgImg/>
        <section className={Style.auth}>
            <h1>
                Sign Up
            </h1>
            <SignupForm />
            <article className={Style.footer}>
                <p>
                Already have an account ? <span><Route href={"/login"} className='primary__underline'>Login</Route></span>
                </p>
            </article>
        </section>
    </main>
  )
}

export default SignupLayout