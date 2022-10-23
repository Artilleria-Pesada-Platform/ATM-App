import LogoAP from "./../assets/LogoAP.svg"
import 'primeicons/primeicons.css';
import { useRecoilState } from "recoil";
import { SideBar } from "../components/navigation/SideBar";
import { SideBarIcons } from "../components/navigation/SideBarIcons";
import { menuBurgerStatus } from "../atoms/menuBurger";
import { Outlet } from "react-router-dom";

export const Navigation = () => {


    const [menuStatus, setMenuStatus] = useRecoilState(menuBurgerStatus)

    const cambiarMenuStatus = () => {
        setMenuStatus(!menuStatus)
        console.log(menuStatus)
    }
    return (
        <div className="flex">

            <div className={`flex h-screen flex-col ${menuStatus ? 'w-48' : 'w-20'} transition-all duration-300 sticky top-0`}>
                <div className='h-20 bg-blueDark text-white w-full flex '>
                    <div className='w-20 my-1 mx-auto shadow-xl hover:shadow-2xl'>
                        <img src={LogoAP} onClick={cambiarMenuStatus}></img>
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
                <div className='h-20 bg-blueDark text-white w-full flex sticky top-0'>
                    {/* <div className='my-5 ml-10'>
                    <i className="pi pi-bars invisible" style={{'fontSize': '2em'}} onClick={cambiarMenuStatus}></i>
                </div> */}
                    <span className='m-auto text-xl uppercase'>Trinchera de cajeros APP</span>
                </div>
                <Outlet></Outlet>
            </div>


        </div>
    )
}
