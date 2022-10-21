import React from 'react'
import { DashboardBox } from '../components/landing/DashboardBox'

export const LandingPage = () => {
  return (
    <div className='bg-white h-full w-full font-sans'>
        <div className='h-20 bg-card text-white w-full flex mb-20'>
            <span className='m-auto text-xl'>Artillería Pesada ATM</span>
        </div>

        <div className=' h-4/6 w-120 sm:w-150 md:w-175 m-auto flex flex-col justify-around'>
            <div className='h-1/2 flex flex-col sm:flex-row justify-around items-center '>
              <DashboardBox titulo='1'></DashboardBox>
              <DashboardBox titulo='2'></DashboardBox>
            </div>
            <div className='h-1/2 flex flex-col sm:flex-row justify-around items-center'>
              <DashboardBox titulo='3'></DashboardBox>
              <DashboardBox titulo='4'></DashboardBox>
            </div>
        </div>
    </div>
  )
}
