import React from 'react'

interface InputProps {
  className?: string,
  children?: any
}

const Input = ({className, children}: InputProps) => {
  return (
    <div className={`${className} bg-white-100 rounded px-3 py-2 w-full flex items-center`}>
      {children}
    </div>
  )
}

export default Input