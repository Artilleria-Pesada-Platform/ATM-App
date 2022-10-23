import React from 'react'
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api"

export const MapGerencia = () => {

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyCOvMQg6_0WDVnvGYP4jqgR0domTcKIvOk"
  });

  return isLoaded ? (
    <div className='rounded-lg bg-auxiliar h-96 w-8/12'>
      <GoogleMap zoom={5} center={{ lat: 22, lng: -101 }} mapContainerClassName="h-full w-full"></GoogleMap>
    </div>
  )
  :
  (<div>Is Loading...</div>)
}
