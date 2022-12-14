import LogoAP from "./../assets/LogoAP.svg"
import LogoMenu from "./../assets/media/MenuIcon.svg"
import 'primeicons/primeicons.css';
import { useRecoilState, useSetRecoilState } from "recoil";
import { SideBar } from "../components/navigation/SideBar";
import { SideBarIcons } from "../components/navigation/SideBarIcons";
import { iconStatus, menuBurgerStatus } from "../atoms/menuBurger";
import { Outlet } from "react-router-dom";


export const Navigation = () => {


    const [menuStatus, setMenuStatus] = useRecoilState(menuBurgerStatus)

    const [iconsStatus, setIconsStatus] = useRecoilState(iconStatus);

    const Titulo = () => {
        if(iconsStatus.BBVA){
            return "Análisis de Fallas"
        }
        if(iconsStatus.Gerencia){
            return "Gerencia de Mantenimiento"
        }
        if(iconsStatus.Cliente){
            return "Cliente Empresarial"
        }
        if(iconsStatus.Mapas){
            return "Mapas"
        }
    }

    const cambiarMenuStatus = () => {
        setMenuStatus(!menuStatus)
        console.log(menuStatus)
    }
    return (
        <div className="flex">

            <div className={`flex h-screen flex-col ${menuStatus ? 'w-48' : 'w-20'} transition-all duration-500 sticky top-0 z-10`}>
                <div className='h-20 bg-blueDark text-white w-full flex '>
                    <div className='w-20 my-auto mx-auto'>
                        <img src={LogoMenu} className='h-7 m-auto content-center' onClick={cambiarMenuStatus}></img>
                    </div>
                </div>

                <div className="bg-blueDark h-full">
                    {
                        (menuStatus)
                            ? (<SideBar></SideBar>)
                            : (<SideBarIcons></SideBarIcons>)
                    }
                </div>
            </div>

            <div className="w-full">
                <div className='h-20 bg-blueDark text-white w-full flex sticky top-0  z-10'>
                    {/* <div className='my-5 ml-10'>
                    <i className="pi pi-bars invisible" style={{'fontSize': '2em'}} onClick={cambiarMenuStatus}></i>
                </div> */}
                    <span className='m-auto text-xl uppercase'>{Titulo()}</span>
                </div>
                <Outlet></Outlet>
            </div>


        </div>
    )
}
