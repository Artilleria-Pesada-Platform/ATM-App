import { useEffect } from 'react'
import { useSetRecoilState } from 'recoil';
import { iconStatus } from '../atoms/menuBurger';
import { PackedBubble } from '../components/shared/charts/PackedBubble';
import { Pie } from '../components/shared/charts/Pie';
import { depositoPorDivision, retirosPorDivision, topCincoTransaccionesEstados, transaccionesPorTipo } from '../components/gerencia/pieCharts';
import { MapBBVA } from '../components/BBVA/MapBBVA';
import { tecnicos } from '../data/tecnicos';
import { DashboardTopBBVA } from '../components/shared/DashboardTopBBVA';

export const BBVA = () => {

  const setIconsStatus = useSetRecoilState(iconStatus);

  useEffect(() => {
    setIconsStatus((anterior) => ({
      ...anterior,
      "BBVA": true,
      "Gerencia": false,
      "Cliente": false,
      "Mapas": false
    }
    ))
  }, [])

  return (
    <div className='flex flex-col text-tb'>

      <DashboardTopBBVA data={tecnicos} />

      <div className='flex flex-row h-96 w-6/6 mx-3 space-x-3'>

        <MapBBVA></MapBBVA>
        <div className='rounded-lg bg-auxiliar h-96 w-4/12'>
          <PackedBubble />
        </div>

      </div>

      <div className='flex flex-row h-3/12 w-6/6 space-x-3 m-3'>

      </div>

    </div>
  )
}
