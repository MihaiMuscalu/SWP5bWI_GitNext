import { Car } from '@/lib/types/types'
import React from 'react'
import Card from './Card'

type Props = {cars: Car[]}

export default function CarsList({cars}: Props) {
  return (
    <div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
        {cars.map((car: Car) => <Card key={car.motor.serialNumber} car={car} />)}
      </div>
    </div>
  )
}