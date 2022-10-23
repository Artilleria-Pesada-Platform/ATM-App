import { Button } from 'primereact/button';
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
      "BBVA": false,
      "Mapas": false
    }
    ))
  }, [])

  return (
    <div className='h-96 w-full flex justify-center items-center'>
      <a href="http://34.174.250.232/mapas/mapas/empresariales.html"> <Button className= "h-16" label="Ir al mapa"></Button> </a>
  </div>
  )
}
