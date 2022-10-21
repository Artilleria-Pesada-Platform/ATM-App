import React from 'react'
type propType = {
  titulo:string,
}

export const DashboardBox = ({titulo}:propType) => {
  return (
    <div className='bg-card text-white h-10 w-60 rounded-md sm:hover:mb-5 ease-in duration-300 ease-out p-6'>
      <span>
        DashboardBox
      </span>
      {titulo}
    </div>
  )
}
