import Alert from '@components/Alert';
import Input from '@components/Input';
import { useFormik } from 'formik';
import { useRouter } from 'next/router';
import React, { useState } from 'react'
import { AiOutlineUser } from 'react-icons/ai';
import { BiLockAlt } from 'react-icons/bi';
import { useDispatch } from 'react-redux';
import { setCredentials } from 'src/features/authentication/auth.slice';
import {useLoginMutation} from '../../src/features/authentication/authApi.slice';

const Login = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [login, { isLoading, error }] = useLoginMutation();
  const [err, setErr] = useState<string | undefined>(undefined);


  const validate = (values: any) => {
    const errors: {email?: string; password?: string} = {};
   
    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }
  
    if (!values.password) {
      errors.password = 'Required';
    } else if (values.password.length >= 20 || values.password.length < 6) {
      errors.password = 'Must be between 6 and 20 characters';
    }
  
  
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validate,
    onSubmit: async ({email, password}: {email: string; password: string;}) => {
      if(isLoading) return null;
      try {
        const {data, error} = await login({email, password});
        if(error) throw new Error(JSON.stringify(error));
        
        
        dispatch(setCredentials({...data}));
        setErr(undefined);
        router.push('/');
        
      }catch(err: any) {
        
        const error = JSON.parse(err.message);
        console.log(error);
        if(error.status === 401) {
          setErr('Email or Password entered are incorrect')
        }else {
          setErr('Something went wrong! please try again.')
        }
      }

    },
  });

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-dark-100">
      {error  && <Alert message={`${error.status === 401 ? 'E-mail ou mot de passe incorrect!' : 'Erreur inconnue!'}`} type='error'/>}

      <form onSubmit={formik.handleSubmit} className="bg-dark-90 text-dark-90 p-10 flex flex-col justify-center items-center w-5/12 rounded-2xl">
        <div className="flex flex-col relative pb-6 mb-3 w-7/12">
          <Input>
            <AiOutlineUser size={26}/>
            <input 
              type="text" placeholder='Veuillez saisir votre adresse e-mail.' name='email' id='email'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`bg-transparent w-full outline-none ml-2`}
            />
          </Input>  
          {formik.touched.email && formik.errors.email ? (
            <div 
              className='text-red-600 text-sm absolute bottom-0'  
            >{formik.errors.email}</div>
            ) : null
          }
        </div>
        <div className="flex flex-col relative pb-6 mb-3 w-7/12">
          <Input>
            <BiLockAlt size={26}/>
            <input 
              type="password" placeholder='Veuillez saisir votre mot de passe.' name='password' id='password'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`bg-transparent w-full outline-none ml-2`}
            />
          </Input>  
          {formik.touched.password && formik.errors.password ? (
            <div 
              className='text-red-600 text-sm absolute bottom-0'  
            >{formik.errors.password}</div>
            ) : null}
        </div>
        <button
          className='border-none rounded bg-blue-500 text-white-100 font-bold py-3 px-10'
        >{isLoading ? 'loading...' : 'Connectez-vous'}</button>
        <br />
        
        {err}
      </form>
    </div>
  )
}

export default Login