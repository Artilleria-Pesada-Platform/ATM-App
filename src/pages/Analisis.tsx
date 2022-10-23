import React, { useEffect } from 'react'
import { useSetRecoilState } from 'recoil'
import { iconStatus } from '../atoms/menuBurger'

export const Analisis = () => {

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
    <div>Analisis</div>
  )
}
