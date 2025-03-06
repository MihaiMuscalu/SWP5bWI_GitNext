"use client"
import { Car } from '@/lib/types/types';
import React, { useState } from 'react'
import { isatty } from 'tty';

type Props = {car: Car}

export default function Card({car}: Props) {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={`shadow-lg p-4 ${isActive ? "bg-red-500" : "bg-green-500"}`} onClick={()=>setIsActive(!isActive)}>
      <h2 className='font-bold'>{car.name}</h2>
      <div>{car.color}</div>
      
    </div>
  );
}