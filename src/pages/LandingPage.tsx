import { DashboardBox } from '../components/landing/DashboardBox'
import LogoAP from "./../assets/LogoAP.svg"
import logoPl from "./../assets/logo-pl.png";
import 'primeicons/primeicons.css';
import { Log } from '../components/shared/Log';

export const LandingPage = () => {
  return (
    <>
      <div className='bg-white h-screen w-full flex flex-col justify-between'>
        <div className='h-20 bg-blueDark text-white w-full flex'>
          <div className='w-20 my-1'>
            <img src={LogoAP} alt = "ArtilleriaPesadaLogo"></img>
          </div>
          <span className='m-auto text-xl uppercase  font-normal'>Trinchera de cajeros APP</span>
          <Log></Log>
        </div>
        <div className=' h-4/6 w-120 sm:w-150 md:w-200 m-auto flex flex-col justify-around'>
          <div className='h-1/2 flex flex-col sm:flex-row justify-around items-center '>
            <DashboardBox titulo='Gerente de Mantenimiento' logo={logoPl} link = "/Gerencia"></DashboardBox>
            <DashboardBox titulo='Análisis de Fallas' logo={logoPl} link = "/BBVA"></DashboardBox>
          </div>
          <div className='h-1/2 flex flex-col sm:flex-row justify-around items-center'>
            <DashboardBox titulo='Cliente Empresarial' logo={logoPl} link = "/Cliente"></DashboardBox>
            <DashboardBox titulo='Mapas' logo={logoPl} link = "/Mapas"></DashboardBox>
          </div>
        </div> 
        <footer className="static bg-blueDark h-10 rounded-t-full flex">
          <span className='text-white m-auto font-hairline'>Created with &#128151; by Artillería Pesada</span>
        </footer>
      </div>
      
    </>

  )
}
