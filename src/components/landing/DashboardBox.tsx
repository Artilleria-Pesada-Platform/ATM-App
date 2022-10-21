import React from 'react'
type propType = {
  titulo:string,
}

export const DashboardBox = ({titulo}:propType) => {
  return (
    <div className='bg-slate-700 h-10 w-60 m-auto'>
      <span>
        DashboardBox
      </span>
      {titulo}
    </div>
  )
}
