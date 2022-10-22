import { faRightToBracket } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export const Log = () => {
  return (
    <div className='bg-slate-500'>
        <div className='flex flex-row'>
            <span>Nombre de Usuario</span>
            <FontAwesomeIcon className='my-8 mr-8 absolute right-0' icon={faRightToBracket}/>
        </div>
        
    </div>
  )
}
