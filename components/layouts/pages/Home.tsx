import { Blocks } from '@/components/blocks'
import React from 'react'
import Style from '@/styles/layout/home.module.scss'
import Route from '@/components/elements/Link/Route/Route'

const HomeLayout = () => {
  return (
    <main className={Style.layout}>
      <Blocks.BgImg />
      <section className={Style.homeBlock}>
        <h1>
          event organizer app
        </h1>
        <Route href={'/login'} className='primary'>
          Login To Dashboard
        </Route>
        <div className={Style.divider}>
          <span></span>
          <p>Or</p>
          <span></span>
        </div>
        <Route href={'/login/scanner'} className='secondary'>
          Login As Scanner
        </Route>
      </section>
    </main>
  )
}

export default HomeLayout