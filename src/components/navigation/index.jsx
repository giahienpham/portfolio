"use client"
import { BtnList } from '@/app/data'
import React from 'react'
import NavButton from './NavButton';

const Navigation = () => {
  const angleIncrement = 360/BtnList.length;
  return (
    <div className=' w-full fixed h-screen items-center flex justify-center'>
      <div className='flex items-center justify-center relative hover:pause animate-spin-slow group'> 
          {
              BtnList.map((btn, index) => {
                  const angleInRad = (index * angleIncrement * Math.PI)/180
                  const radius = 'calc(20vw - 1rem)'
                  const x = `calc(${radius}*${Math.cos(angleInRad)})`;
                  const y = `calc(${radius}*${Math.sin(angleInRad)})`;
                  return <NavButton key = {btn.label} NavButton x={x} y={y} {...btn} />
              })
          }
      </div>
    </div>
  )
}

export default Navigation