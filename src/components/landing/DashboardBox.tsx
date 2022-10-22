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
      <div className='bg-card text-white h-24 w-60 rounded-md sm:hover:mb-5 ease-in duration-300 ease-out p-6'>
      <span>
        {titulo}
      </span>
      
      <div className=''>
        <img className = "h-20"src = {logo}></img>
      </div>
      
    </div>
    </NavLink>
    
  )
}
