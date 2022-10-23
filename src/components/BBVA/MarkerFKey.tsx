import { GoogleMap, LoadScript, MarkerF } from "@react-google-maps/api"
import { fallaATM } from "../../data/fallaATM"

export const MarkerFKey = () => {
  return (
    <>
        {fallaATM.location.map((location, index):any=>{
            console.log(index,location)
            const position = {lat: parseFloat(location.lat), lng: parseFloat(location.lng)}
            return <MarkerF key={index} position={position}/>
        })}
    
    </>
  )
}
