import React from 'react'

import IconAnalisis from '../../assets/media/Icon.svg';
import IconGerente from '../../assets/media/Icon_Gerente.svg';
import IconCliente from '../../assets/media/Icon_Client.svg';
import IconMapas from '../../assets/media/Icon_Maps.svg';
import { ItemsIcons } from '../../helpers/ItemsIcons';

export const SideBarIcons = () => {
  return (
    <div className='mt-5 space-y-5 flex flex-col justify-center'>
        <ItemsIcons icon = {IconAnalisis} name="BBVA"></ItemsIcons>
        <ItemsIcons icon = {IconGerente} name="Cliente"></ItemsIcons>
        <ItemsIcons icon = {IconCliente} name="Gerencia"></ItemsIcons>
        <ItemsIcons icon = {IconMapas} name="Mapas"></ItemsIcons>
    </div>
  )
}