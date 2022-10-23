import React, { useEffect } from 'react'
import { useSetRecoilState } from 'recoil';
import { iconStatus } from '../atoms/menuBurger';
import { DashboardTop } from '../components/shared/DashboardTop';

export const Mapas = () => {

  const setIconsStatus = useSetRecoilState(iconStatus);

  useEffect(() => {
    setIconsStatus((anterior) => ({
      ...anterior,
      "Mapas": true,
      "Gerencia": false,
      "Cliente": false,
      "BBVA": false
    }
    ))
  }, [])
  return (
    <div className='flex flex-col h-10/12 text-tb'>
      <DashboardTop/>
      <div className='flex flex-row h-11/12 w-6/6 m-3 space-x-3'>
        <div className='rounded-lg bg-auxiliar w-full'>
          <span>Datos de fallas por región</span>
        </div>
      </div>

    </div>
  )
}
