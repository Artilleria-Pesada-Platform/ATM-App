import React from 'react'
import { dataProps } from '../../data/transacciones'
import { DashboardTopBox } from './DashboardTopBox'
interface dataUniqueProps  {
        "data": dataProps
}
export const DashboardTop = ({data}:dataUniqueProps) => {
    return (
        <div className='flex flex-row h-14 w-6/6 space-x-3 m-3'>
            <DashboardTopBox numero = {data.total_atms} texto = {"ATM Totales"}/>
            <DashboardTopBox numero = {data.total_atms_con_fallas_reportadas} texto = {"Con Falla"}/>
            <DashboardTopBox numero = {data.total_de_transacciones} texto = {"Transacciones"}/>
            <DashboardTopBox numero = {data.total_de_transacciones_por_tipo_deposito} texto = {"Depositos"}/>
            <DashboardTopBox numero = {data.total_de_transacciones_por_tipo_retiro} texto = {"Retiros"}/>
            <DashboardTopBox numero = {data.division_con_mas_fallas} texto = {"División: mas fallas"}/>
        </div>
    )
}
