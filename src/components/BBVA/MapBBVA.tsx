import React, { useMemo } from 'react'
import { GoogleMap, LoadScript, MarkerF, MarkerClusterer } from "@react-google-maps/api"
import { fallaATM } from '../../data/fallaATM';
import { MarkerFKey } from './MarkerFKey';



export function MapBBVA() {

  const ATMNumerico = () => {
    const locationNumeric = fallaATM.location.map((location, index): any => {
      const position = { lat: parseFloat(location.lat), lng: parseFloat(location.lng) }
      return position
    })
    return locationNumeric;
  }

  const listLocations = ATMNumerico();
  console.log(listLocations)

const containerStyle = {
  width: '100%',
  height: '100%'
};

return (
  <div className='rounded-lg bg-auxiliar h-96 w-8/12'>
    <LoadScript
      googleMapsApiKey="AIzaSyCOvMQg6_0WDVnvGYP4jqgR0domTcKIvOk"
    >
      <GoogleMap zoom={5} center={{ lat: 22, lng: -101 }} mapContainerStyle={containerStyle}>
        <MarkerFKey></MarkerFKey>
      </GoogleMap>
    </LoadScript>

  </div>
)
}




//   const position = {lat: 22, lng: -101 };
//   const onLoad = (marker:any) => {
//     console.log('marker: ', marker)
//   }


// }
