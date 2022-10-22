import React from 'react'
import { DashboardBox } from '../components/landing/DashboardBox'
import LogoAP from "./../assets/LogoAP.svg"
import logoPl from "./../assets/logo-pl.png";
import { NavLink } from 'react-router-dom';

export const LandingPage = () => {
  return (
    <>
      <div className='bg-white h-screen w-full flex flex-col justify-between bold'>
        <div className='h-20 bg-blueDark text-white w-full flex mb-14'>
          <div className='w-20 my-1'>
            <img src={LogoAP}></img>
          </div>
          <span className='m-auto text-xl uppercase font-roboto'>Artillería Pesada ATM</span>
        </div>

        <div className=' h-4/6 w-120 sm:w-150 md:w-175 m-auto flex flex-col justify-around font-sansef'>
          <div className='h-1/2 flex flex-col sm:flex-row justify-around items-center '>
            <DashboardBox titulo='1' logo={logoPl} link = "/dashboard1"></DashboardBox>
            <DashboardBox titulo='2' logo={logoPl} link = "/dashboard2"></DashboardBox>
          </div>
          <div className='h-1/2 flex flex-col sm:flex-row justify-around items-center'>
            <DashboardBox titulo='3' logo={logoPl} link = "/dashboard3"></DashboardBox>
            <DashboardBox titulo='4' logo={logoPl} link = "/dashboard4"></DashboardBox>
          </div>
        </div> 
        <footer className="static bg-blueDark h-10 rounded-t-full font-roboto flex">
          <span className='text-white m-auto font-roboto'>Created with ♥ by Artillería Pesada</span>
        </footer>
      </div>
      
    </>

  )
}
