import React from 'react'
import { NavLink } from 'react-router-dom'
type propType = {
  titulo:string,
  logo: string,
  link: string
}

export const DashboardBox = ({titulo, logo, link}:propType) => {
  const navigate = "/navigation" + link;
  return (
    <NavLink to={navigate} className="no-underline">
      <div className='bg-card text-white h-40 w-80 rounded-md sm:hover:mb-5 ease-in duration-300 ease-out p-6'>
      <span className='m-5'>
        BBVA
      </span>
      
      <div className='flex items-center justify-center space-x-6'>
        <img className = "h-20"src = {logo}></img>
        <span className='w-40'>{titulo}</span>
      </div>
      
    </div>
    </NavLink>
    
  )
}
