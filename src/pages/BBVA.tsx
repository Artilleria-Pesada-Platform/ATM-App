import React, { useEffect } from 'react'
import { useSetRecoilState } from 'recoil'
import { iconStatus } from '../atoms/menuBurger'

export const BBVA = () => {

  const setIconsStatus= useSetRecoilState(iconStatus);

  useEffect(()=> {
    setIconsStatus((anterior) => ({
      ...anterior,
      "BBVA":true,
      "Gerencia": false,
      "Cliente": false,
      "Mapas": false
    }
    ))
  }, [])

  return (
    <div className='flex flex-col h-screen text-tb'>
      <div className='flex flex-row h-1/6 w-6/6 space-x-3 m-3'>
        <div className='rounded-lg bg-auxiliar w-1/3'>
            <span>ATMS activos</span>
        </div>
        <div className='rounded-lg bg-auxiliar w-1/3'>
            <span>ATMS con fallas</span>
        </div>
        <div className='rounded-lg bg-auxiliar w-1/3'>
            <span>ATMS con fallas</span>
        </div>
      </div>
      <div className='flex flex-row h-1/2 w-6/6 m-3 space-x-3'>
        <div className='rounded-lg bg-auxiliar w-2/3'>
          <span>Datos de fallas por región</span>
        </div>
        <div className='rounded-lg bg-auxiliar w-1/3'>
          <span>Gráfico de fallas por mes</span>
        </div>

      </div>
      <div className='h-1/3 rounded-lg bg-auxiliar w-6/6 m-3'>
        <span>Top 3 fallas</span>
      </div>
    </div>
  )
}
