import React from 'react'

type itemBoxProps = {
    numero:string,
    texto:string
}
export const DashboardTopBox = ({numero, texto}:itemBoxProps) => {
  return (
    <div className='rounded-lg bg-auxiliar w-1/6 flex flex-col'>
        <span className='m-auto'>{numero}</span>
        <span className='m-auto'>{texto}</span>
    </div>
  )
}
