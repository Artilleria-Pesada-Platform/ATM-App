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

export const Items = ({icon, name}:props) => {

  const [iconsStatus, setIconsStatus] = useRecoilState(iconStatus)

  return (
    <div className={`flex flex-row content-center ml-5 w-28 hover:bg-light  ${iconsStatus[name] ? "bg-light": "" }`}>
        <div>
            <img className='w-7  mr-2' src={icon}></img>
        </div>
        <div className='w-4 pt-1'>
          <span className='text-white'>{name}</span>
        </div>
        
    </div>
  )
}
