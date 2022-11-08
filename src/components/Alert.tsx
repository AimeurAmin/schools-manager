import React, { useEffect, useState } from 'react'
import { MdCancel } from 'react-icons/md';

enum AlertTypes {
  error,
  warning,
  success
}

interface AlertProps {
  message: string,
  type: 'error' | 'warning' | 'success'
}

function getAlertType(type: string) {
  switch (type) {
    case 'error':
      return <MdCancel className='text-white-100 mr-5 text-3xl'/>
    case 'warning':
      return <MdCancel className='text-white-100 mr-5 text-3xl'/>
    case 'success':
      return <MdCancel className='text-white-100 mr-5 text-3xl'/>
  }
}

const Alert = ({message, type}: AlertProps) => {
  const [on, setOn] = useState(false)
  useEffect(() => {
    setOn(true);
    setTimeout(() => {
      setOn(false);
    }, 5000);
  }, [])


  
  return (
    <div onClick={() => setOn(false)} className={`cursor-pointer flex justify-start items-center bg-red-600 text-white-90 w-6/12 py-3 px-6 text-lg rounded absolute ${on? 'bottom-0 translate-y-0' : 'bottom-0 translate-y-96'} mb-12 transition ease duration-1000`}>
      {getAlertType(type)}
      <p>{message}</p>
    </div>
  )
}

export default Alert