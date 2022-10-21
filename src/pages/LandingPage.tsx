import React from 'react'
import { DashboardBox } from '../components/landing/DashboardBox'

export const LandingPage = () => {
  return (
    <div className='h-full w-full'>
        <div className='h-10 bg-slate-200 w-full flex'>
            <span className='bg-slate-500 m-auto'>Artillería Pesada ATM</span>
        </div>

        <div className='bg-slate-500 h-5/6 w-120 sm:w-150 md:w-175 m-auto flex flex-col justify-around '>
            <DashboardBox></DashboardBox>
            <DashboardBox></DashboardBox>
            <DashboardBox></DashboardBox>
            <DashboardBox></DashboardBox>
        </div>
    </div>
  )
}
