import React, { useEffect } from 'react'
import { useSetRecoilState } from 'recoil'
import { iconStatus } from '../atoms/menuBurger'

type props = {
  name:string
}

export const Construccion = () => {

  const setIconsStatus= useSetRecoilState(iconStatus);

  useEffect(()=> {
    setIconsStatus({
      "Analisis":false,
      "Gerencia": false,
      "Cliente": false,
      "Mapas": false
    }
    )
  }, [])

  return (
    <div className='p-16'>
        <span className='text-xl'>{"Lo sentimos, esta página sigue en construcción..."}</span>
    </div>
  )
}
