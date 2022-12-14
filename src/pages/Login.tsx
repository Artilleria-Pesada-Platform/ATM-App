import React, { useEffect } from 'react'
import { FormLogin } from '../components/login/FormLogin';
import LogoAP from "../assets/LogoAP.svg";
import poweredBy from "../assets/media/poweredBy.svg"
import createdBy from "../assets/media/createdBy.svg"
import { Footer } from '../components/login/Footer';

// const profiles = ["eduardo-david-acosta-cuellar", "janzaldo", "luisbarreramx"];
// type profReactprops = {params:string}

// const profReact = ({params}:any) => {
//   <div className='text-white m-auto font-hairline text-sm flex h-10'>
//     <a href={`https://www.linkedin.com/in/${params}`} className='hover:font-normal'>@{params}</a>
//     <p>&nbsp;|aaaaaaa&nbsp;</p>
//   </div>
// }

// const prueba:any = () => {profiles.map((params, index) => profReact(params[index]))};

export const Login = () => {

  useEffect(() => {
    document.title = "Login"
  });

  return (
    <>
    <div className="overflow-y-hidden h-full">
        <div className="flex h-full overflow-hidden">
          <div className='bg-blueDark w-0 sm:w-1/2 flex flex-col justify-center items-center'>
            <img className ="sm:w-5/6 md:w-4/6 lg:w-1/2"src ={LogoAP} ></img>
            <img className ="sm:w-5/6 md:w-4/6 lg:w-1/2"src ={createdBy} ></img>
          </div>
          <div className='w-full sm:w-1/2 flex'>
            <div className=' h-70 w-80 rounded-lg m-auto'>
              <div className='bg-blue-100 h-70 w-80 rounded-lg p-2 m-auto'>
                <FormLogin />
              </div>
              <img className = "mt-4" src = {poweredBy}></img>
            </div>
            
          </div>
        </div>
        <Footer></Footer>
      </div>
    </>
  )
}
