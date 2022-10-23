import React, { useEffect } from 'react'
import { useSetRecoilState } from 'recoil';
import { iconStatus } from '../atoms/menuBurger';
import { DashboardTop } from '../components/shared/DashboardTop';
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api"
import { PackedBubble } from '../components/shared/charts/PackedBubble';
import { BarBasic } from '../components/shared/charts/BarBasic';
import { transacciones } from '../data/transacciones';

export const Gerencia = () => {

  const setIconsStatus = useSetRecoilState(iconStatus);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyCOvMQg6_0WDVnvGYP4jqgR0domTcKIvOk"
  });

  useEffect(() => {
    setIconsStatus((anterior) => ({
      ...anterior,
      "Gerencia": true,
      "BBVA": false,
      "Cliente": false,
      "Mapas": false
    }
    ))
  }, [])

  return isLoaded ? (
    <div className='flex flex-col text-tb'>

      <DashboardTop data = {transacciones}/>

      <div className='flex flex-row h-96 w-6/6 mx-3 space-x-3'>

        <div className='rounded-lg bg-auxiliar h-96 w-8/12'>
          <GoogleMap zoom={5} center={{ lat: 22, lng: -101 }} mapContainerClassName="h-full w-full"></GoogleMap>
        </div>
        <div className='rounded-lg bg-auxiliar h-96 w-4/12'>
          <PackedBubble />
        </div>

      </div>
      
      <div className='flex flex-row h-3/12 w-6/6 space-x-3 m-3'>

        <div className='rounded-lg bg-auxiliar w-1/4'>
          <BarBasic/>
        </div>
        <div className='rounded-lg bg-auxiliar w-1/4'>
          <BarBasic/>
        </div>
        <div className='rounded-lg bg-auxiliar w-1/4'>
          <BarBasic/>
        </div>
        <div className='rounded-lg bg-auxiliar w-1/4'>
          <BarBasic/>
        </div>
        
      </div>

    </div>
  ) :
    (<div>Is Loading...</div>)
}
