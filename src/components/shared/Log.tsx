import { faRightToBracket } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { NavLink } from 'react-router-dom'

export const Log = () => {
  return (
    <div className='text-white'>
        <div className='flex flex-row font-normal w-32'>
            <span className='my-7 mr-8'>Usuario</span>
            <NavLink to = "/">
              <FontAwesomeIcon className='my-8 mr-8 absolute right-0' icon={faRightToBracket}/>
            </NavLink>
            
        </div>
        
    </div>
  )
}
