import { useEffect } from 'react'
import { useSetRecoilState } from 'recoil';
import { iconStatus } from '../atoms/menuBurger';
import { DashboardTop } from '../components/shared/DashboardTop';
import { PackedBubble } from '../components/shared/charts/PackedBubble';
import { transacciones } from '../data/transacciones';
import { Pie } from '../components/shared/charts/Pie';
import { depositoPorDivision, retirosPorDivision, topCincoTransaccionesEstados, transaccionesPorTipo } from '../components/gerencia/pieCharts';
import { MapGerencia } from '../components/gerencia/MapGerencia';
import { MapBBVA } from '../components/BBVA/MapBBVA';
import { PackedBubbleGerencia } from '../components/shared/charts/PackedBubbleGerencia';

export const Gerencia = () => {

  const setIconsStatus = useSetRecoilState(iconStatus);

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

  return (
    <div className='flex flex-col text-tb'>

      <DashboardTop data = {transacciones}/>

      <div className='flex flex-row h-96 w-6/6 mx-3 space-x-3'>

        <MapBBVA></MapBBVA>
        <div className='rounded-lg h-96 w-4/12'>
          <PackedBubbleGerencia />
        </div>

      </div>
      
      <div className='flex flex-row h-3/12 w-6/6 space-x-3 m-3'>

        <div className='rounded-lg w-1/4'>
          <Pie options = {transaccionesPorTipo} />
        </div>
        <div className='rounded-lg w-1/4'>
          <Pie options = {depositoPorDivision} />
        </div>
        <div className='rounded-lg w-1/4'>
          <Pie options = {retirosPorDivision} />
        </div>
        <div className='rounded-lg w-1/4'>
          <Pie options = {topCincoTransaccionesEstados} />
        </div>
        
      </div>

    </div>
  ) 
}
