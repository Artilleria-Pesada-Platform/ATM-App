import { useRecoilState } from "recoil";
import { iconStatus } from "../atoms/menuBurger";


type iconOptions = {
  "Analisis": false,
  "Gerencia": false,
  "Cliente": false,
  "Mapas": false,
}

let tipe:iconOptions ;

interface props {
  name: keyof typeof tipe;
  icon:string
}

export const ItemsIcons = ({icon, name}:props) => {

  const [iconsStatus, setIconsStatus] = useRecoilState(iconStatus)

  return (
    <div className= {`pl-5 w-17 hover:bg-light ${iconsStatus[name] ? "bg-light": "" }`}>
        <img className='w-7' src={icon}></img>
    </div>
  )
}