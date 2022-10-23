import React from 'react'
import { dataProps } from '../../data/tecnicos'
import { DashboardTopBox } from './DashboardTopBox'
interface dataUniqueProps  {
        "data": dataProps
}
export const DashboardTopBBVA = ({data}:dataUniqueProps) => {
    return (
        <div className='flex flex-row justify-center h-28 w-6/6 space-x-3 m-3'>
            <DashboardTopBox numero = {data.f0_} texto = {"Tecnicos Disponibles"}/>
            <DashboardTopBox numero = {data.promedio_fallas_al_dia} texto = {"Promedio de Fallas al día"}/>
            <DashboardTopBox numero = {data.f1_} texto = {"Tecnicos Totales"}/>
            <DashboardTopBox numero = {data.promedio_mantenimientos_al_dia} texto = {"Promedio de mantenimientos al día"}/>
            <DashboardTopBox numero = {data.promedio_de_tiempo_resolucion_de_ticket} texto = {"Promedio de tiempo de resolucion de ticket"}/>
            <DashboardTopBox numero = {"23/10/2022"} texto = {"Ultima Fecha de mantenimiento"}/>
        </div>
    )
}
