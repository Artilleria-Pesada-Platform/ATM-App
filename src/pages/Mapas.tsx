import React, { useEffect } from 'react'
import { useSetRecoilState } from 'recoil';
import { iconStatus } from '../atoms/menuBurger';

export const Mapas = () => {
  
  const setIconsStatus= useSetRecoilState(iconStatus);

  useEffect(()=> {
    setIconsStatus((anterior) => ({
      ...anterior,
      "Mapas":true,
      "Gerencia": false,
      "Cliente": false,
      "BBVA": false
    }
    ))
  }, [])
  return (
    <div>Mapas</div>
  )
}
