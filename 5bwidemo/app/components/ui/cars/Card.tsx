"use client"
import { Car } from '@/lib/types/types';
import React, { useState } from 'react'

type Props = {car: Car}

export default function Card({car}: Props) {
  const [isActive, setIsActive] = useState(false);

  return (
    <div 
      className={`shadow-lg p-6 rounded-lg ${
        isActive 
          ? "bg-gradient-to-br from-blue-500 to-purple-500" 
          : "bg-gradient-to-br from-blue-300 to-purple-300"
      } hover:scale-105 transition-all duration-300 hover:shadow-xl cursor-pointer`} 
      onClick={()=>setIsActive(!isActive)}
    >
      <h2 className='font-bold text-xl text-white mb-2'>{car.name}</h2>
      <p className='text-white'>{car.type}</p>
      <p className='text-white/80'>{car.color}</p>
      <div className='mt-2 text-white/80'>
        <p>HP: {car.motor.hp}</p>
        <p>S/N: {car.motor.serialNumber}</p>
      </div>
    </div>
  );
}