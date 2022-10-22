import React, { useEffect } from 'react'
import { useSetRecoilState } from 'recoil';
import { iconStatus } from '../atoms/menuBurger';

export const Cliente = () => {

  const setIconsStatus= useSetRecoilState(iconStatus);

  useEffect(()=> {
    setIconsStatus((anterior) => ({
      ...anterior,
      "Cliente":true,
      "Gerencia": false,
      "Analisis": false,
      "Mapas": false
    }
    ))
  }, [])

  return (
    <div>Cliente</div>
  )
}
