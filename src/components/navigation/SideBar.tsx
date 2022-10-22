import React from 'react'
import { Items } from '../../helpers/Items'
import IconAnalisis from '../../assets/media/Icon.svg';
import IconGerente from '../../assets/media/Icon_Gerente.svg';
import IconCliente from '../../assets/media/Icon_Client.svg';
import IconMapas from '../../assets/media/Icon_Maps.svg';

export const SideBar = () => {
  return (
    <div className='mt-5 space-y-5'>
        <Items icon = {IconAnalisis} name = "Analisis"></Items>
        <Items icon = {IconGerente} name = "Gerencia"></Items>
        <Items icon = {IconCliente} name = "Cliente"></Items>
        <Items icon = {IconMapas} name = "Mapas"></Items>
    </div>
  )
}
