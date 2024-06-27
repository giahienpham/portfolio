"use client"
import { BtnList } from '@/app/data'
import React from 'react'

const Navigation = () => {
  const angleIncrement = 360/BtnList.length;
  return (
    <div className=' w-full fixed h-screen items-center flex justify-center'>
      <div className='flex items-center justify-between relative'> 
          {
              BtnList.map((btn, index) => {
                  const angleInRad = (index * angleIncrement * Math.PI)/180
                  const radius = 'calc(20vw - 1rem)'
                  const x = `calc(${radius}*${Math.cos(angleInRad)})`;
                  const y = `calc(${radius}*${Math.sin(angleInRad)})`;
                  return <button key={index} style={{
                    transform: `translate(${x}, ${y})`,
                    position:'absolute'
                  }}>{btn.label}</button>
              })
          }
      </div>
    </div>
  )
}

export default Navigation