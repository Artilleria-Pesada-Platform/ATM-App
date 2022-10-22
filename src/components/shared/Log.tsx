import { faRightToBracket } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export const Log = () => {
  return (
    <div className='bg-white text-blueDark'>
        <div className='flex flex-row font-normal '>
            <span>Nombre de Usuario</span>
            <FontAwesomeIcon className='my-8 mr-8 absolute right-0' icon={faRightToBracket}/>
        </div>
        
    </div>
  )
}
