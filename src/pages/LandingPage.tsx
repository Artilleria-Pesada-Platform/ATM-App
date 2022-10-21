import React from 'react'
import { DashboardBox } from '../components/landing/DashboardBox'
import LogoAP from "./../assets/LogoAP.svg"
import placa from "./../assets/placa.svg"

export const LandingPage = () => {
  return (
    <>
      <div className='bg-white h-screen w-full flex flex-col justify-between bold'>
        <div className='h-20 bg-blueDark text-white w-full flex mb-14'>
          <div className='w-20 my-1'>
            <img src={LogoAP}></img>
          </div>
          <span className='m-auto text-xl uppercase font-monstserrat'>Artillería Pesada ATM</span>
        </div>

        <div className=' h-4/6 w-120 sm:w-150 md:w-175 m-auto flex flex-col justify-around font-sansef'>
          <div className='h-1/2 flex flex-col sm:flex-row justify-around items-center '>
            <DashboardBox titulo='1'></DashboardBox>
            <DashboardBox titulo='2'></DashboardBox>
          </div>
          <div className='h-1/2 flex flex-col sm:flex-row justify-around items-center'>
            <DashboardBox titulo='3'></DashboardBox>
            <DashboardBox titulo='4'></DashboardBox>
          </div>
        </div> 
        <footer className="static bg-blueDark h-14 rounded-t-full flex">
          <span className='text-white m-auto text-4xl uppercase font-monstserrat'>hackatón bbva-artillería pesada</span>
        </footer>
      </div>
      
    </>

  )
}
