import React, { useEffect } from 'react'
import { useSetRecoilState } from 'recoil';
import { iconStatus } from '../atoms/menuBurger';
import { DashboardTop } from '../components/shared/DashboardTop';
import {GoogleMap, useLoadScript, Marker} from "@react-google-maps/api"

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
  return (
    <div className='flex flex-col h-10/12 text-tb'>
      <DashboardTop/>
      <div className='flex flex-row h-11/12 w-6/6 m-3 space-x-3'>
        {/* MAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA */}
        <div className='rounded-lg bg-auxiliar w-full'> 
          <GoogleMap zoom = {10} center = {{lat:44, lng:-80}} mapContainerClassName = "h-full w-full"></GoogleMap>
        </div>
      </div>

    </div>
  )
}
