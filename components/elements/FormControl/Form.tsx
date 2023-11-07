import React from 'react'

interface IFormProps {
    children : React.ReactNode,
    className? : string,
    action? : string,
    method : string,
    onSubmit : (e : React.FormEvent<HTMLFormElement>) => void
}

const Form = ({children, className, action, method, onSubmit} : IFormProps) => {
  return (
    <form action={action} method={method} onSubmit={onSubmit} className={className}>
        {children}
    </form>
  )
}

export default Form