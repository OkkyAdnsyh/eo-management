import Link, { LinkProps } from 'next/link'
import React from 'react'
import Style from '@/styles/component/link.module.scss'

interface IRouteProps extends LinkProps{
    className : string,
    children : React.ReactNode
}

const Route = ({className, children, ...rest} : IRouteProps ) => {
  return (
    <Link className={Style[className]} {...rest}>
        {children}
    </Link>
  )
}

export default Route