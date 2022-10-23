import React from 'react'
import { DashboardTopBox } from './DashboardTopBox'

export const DashboardTop = () => {
    return (
        <div className='flex flex-row h-24 w-6/6 space-x-3 m-3'>
            <DashboardTopBox numero = {"703"}/>
            <DashboardTopBox numero = {"335"}/>
            <DashboardTopBox numero = {"7244"}/>
            <DashboardTopBox numero = {"72.84 %"}/>
            <DashboardTopBox numero = {"91"}/>
            <DashboardTopBox numero = {"4 mins"}/>
        </div>
    )
}
