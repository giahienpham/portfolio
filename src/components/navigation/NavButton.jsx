import React from 'react'
import Link from 'next/link'
import {Home} from 'lucide-react'

const getIcon = (icon) => {
  switch (icon){
    case "home":
      return <Home className='w-full h-auto' strokeWidth={1.5}/>
      break;
    default:
      return <Home className='w-full h-auto' strokeWidth={1.5}/>
  }
}

const NavButton = ({x, y, label, link, icon, newTab}) => {
  return (
    <div className='absolute cursor-pointer z-50'
    style={{transform: `translate(${x}, ${y})`}}
    >
      <Link href={link} target={newTab ? '_blank' : '_self'} className='text-foreground rounded-full flex items-center justify-center' 
            aria-label={label} name={label}>
              <span className='relative w-14 h-14 p-4'>
                {getIcon(icon)}
              </span>
      </Link>
    </div>
  )
}

export default NavButton