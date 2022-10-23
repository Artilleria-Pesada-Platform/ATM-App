import React from 'react'

type itemBoxProps = {
    numero:string
}
export const DashboardTopBox = ({numero}:itemBoxProps) => {
  return (
    <div className='rounded-lg bg-auxiliar w-1/6 flex '>
        <span className='m-auto'>{numero}</span>
    </div>
  )
}
