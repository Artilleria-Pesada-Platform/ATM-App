import React, { useEffect } from 'react'
import { useSetRecoilState } from 'recoil';
import { iconStatus } from '../atoms/menuBurger';
import { DashboardTop } from '../components/shared/DashboardTop';
import {GoogleMap, useLoadScript, Marker} from "@react-google-maps/api"

import LogoAP from "./../assets/LogoAP.svg"
import logoPl from "./../assets/logo-pl.png";
import 'primeicons/primeicons.css';
import { Log } from '../components/shared/Log';
import { DashboardBox } from '../mapas/DashboardBox';

export const Mapas = () => {

  const setIconsStatus = useSetRecoilState(iconStatus);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyCOvMQg6_0WDVnvGYP4jqgR0domTcKIvOk"
  });

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
  return  (
    <>
      <div className='bg-white h-screen w-full flex flex-col justify-between'>
        <div className='h-20 bg-blueDark text-white w-full flex'>
          <div className='w-20 my-1'>
            <img src={LogoAP} alt = "ArtilleriaPesadaLogo"></img>
          </div>
          <span className='m-auto text-xl uppercase  font-normal'>Trinchera de cajeros APP</span>
          <Log></Log>
        </div>
        <div className=' h-4/6 w-120 sm:w-150 md:w-200 m-auto flex flex-col justify-around'>
          <div className='h-1/2 flex flex-col sm:flex-row justify-around items-center '>
            <a href = "http://34.174.250.232/mapas/mapas/marcas.html" ><DashboardBox titulo='Marcas' logo={logoPl} link = "/Gerencia"></DashboardBox></a>
            <a href = "http://34.174.250.232/mapas/mapas/mapaFallas.html"><DashboardBox titulo='Mapa de Fallas' logo={logoPl} link = "/BBVA"></DashboardBox></a>
          </div>
          <div className='h-1/2 flex flex-col sm:flex-row justify-around items-center'>
            <a href = "http://34.174.250.232/mapas/mapas/proximosMantenimiento.html"><DashboardBox titulo='Proximo Mantenimiento' logo={logoPl} link = "/Cliente"></DashboardBox></a>
            <a href = "http://34.174.250.232/mapas/mapas/empresariales.html"><DashboardBox titulo='Mapas de Clientes Empresariales' logo={logoPl} link = "/Mapas"></DashboardBox></a>
          </div>
        </div> 
        
      </div>
      
    </>
  )
}
