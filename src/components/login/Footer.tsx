import React from 'react'

export const Footer = () => {
  return (
    <footer className="static bg-blueDark h-8 flex sticky bottom-0">
        <div className='text-white m-auto font-hairline text-sm flex'>
            <p>Pelotón:&nbsp;&nbsp; </p>
            <a href={`https://www.linkedin.com/in/eduardo-david-acosta-cuellar`} className='hover:font-normal'>@eduardo-david-acosta-cuellar</a>
            <p>&nbsp;|&nbsp;</p>
            <a href={`https://www.linkedin.com/in/ivan-anzaldo`} className='hover:font-normal'>@ivan-anzaldo</a>
            <p>&nbsp;|&nbsp;</p>
            <a href={`https://www.linkedin.com/in/janzaldo`} className='hover:font-normal'>@janzaldo</a>
            <p>&nbsp;|&nbsp;</p>
            <a href={`https://www.linkedin.com/in/luisbarreramx`} className='hover:font-normal'>@luisbarreramx</a>
            <p>&nbsp;|&nbsp;</p>
            <a href={`https://www.linkedin.com/in/humberto-chávez`} className='hover:font-normal'>@humberto-chávez</a>
            <p>&nbsp;|&nbsp;</p>
            <a href={`https://www.linkedin.com/in/ricardo-drr`} className='hover:font-normal'>@ricardo-drr</a>
          </div>
        </footer>
  )
}
