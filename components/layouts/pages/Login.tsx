import React from 'react'
import Style from '@/styles/layout/home.module.scss'
import { Blocks } from '@/components/blocks'
import LoginForm from '@/components/modules/Form/LoginForm'
import Route from '@/components/elements/Link/Route/Route'

const LoginLayout = () => {
  return (
    <main className={Style.layout}>
      <Blocks.BgImg/>
      <section className={Style.auth}>
        <h1>
          Login
        </h1>
        <LoginForm />
        <article className={Style.footer}>
          <p>
            Don't have an account ? <span><Route href={"/signup"} className='primary__underline'>Sign Up</Route></span>
          </p>
        </article>
      </section>
    </main>
  )
}

export default LoginLayout