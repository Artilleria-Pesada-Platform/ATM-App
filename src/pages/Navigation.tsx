import LogoAP from "./../assets/LogoAP.svg"
import 'primeicons/primeicons.css';
import { useRecoilState } from "recoil";
import { menuBurgerStatus } from "../atoms/menuBurger";
import { SlideMenu } from "primereact/slidemenu";

export const Navigation = () => {

    const [menuStatus, setMenuStatus] = useRecoilState(menuBurgerStatus)

    const cambiarMenuStatus =  () => {
        setMenuStatus(!menuStatus)
        console.log(menuStatus)
    }
    return (
        <div className="flex">

            <div className={`flex flex-col ${menuStatus ? 'w-48':'w-20'} transition-all duration-300`}>
                <div className='h-20 bg-blueDark text-white w-full flex '>
                    <div className='w-20 my-1 mx-auto'>
                        <img src={LogoAP}></img>
                    </div>
                </div>
                <div className="bg-blueDark h-screen ">
                        {
                            menuStatus
                            ? (<SlideMenu model = {""} className = "w-48 border-0 rounded-none" easing="ease-in"></SlideMenu>)
                            : (<SlideMenu className = "w-20 border-0 rounded-none" easing="ease-in"></SlideMenu>)
                        }
                </div>

            </div>

            <div className='h-20 bg-blueDark text-white w-full flex'>
                <div className='my-5 ml-10'>
                    <i className="pi pi-bars" style={{'fontSize': '2em'}} onClick={cambiarMenuStatus}></i>
                </div>
                <span className='m-auto text-xl uppercase font-roboto'>Artillería Pesada ATM</span>
            </div>

        </div>
    )
}