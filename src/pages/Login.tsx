import React, { useEffect } from 'react'
import { FormLogin } from '../components/login/FormLogin';
import LogoAP from "../assets/LogoAP.svg";

export const Login = () => {

  useEffect(() => {
    document.title = "Login"
  });

  return (
    <>
        <div className="flex h-full font-sansef">
          <div className='bg-blueDark h-full w-0 sm:w-1/2 flex justify-center'>
            <img className ="sm:w-5/6 md:w-4/6 lg:w-1/2"src ={LogoAP} ></img>
          </div>
          <div className=' h-full w-full sm:w-1/2 flex'>
            <div className='bg-blue-100 h-70 w-80 rounded-lg p-2 m-auto'>
              <FormLogin />
            </div>
          </div>
        </div>
    </>
  )
}
