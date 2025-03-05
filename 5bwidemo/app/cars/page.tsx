import React from "react";
import Card from "../components/ui/cars/Card";
import { Car } from "@/lib/types/types";


type Props = {};

const cars: Car[] = [
  {
    name: "Super Car",
    type: "BMW X3",
    color: "green",
    motor: {
      serialNumber: 1234,
      hp: 200,
    }
  },
  {
    name: "Thunder",
    type: "Mercedes AMG",
    color: "black",
    motor: {
      serialNumber: 1235,
      hp: 450,
    }
  },
  {
    name: "City Runner",
    type: "Audi A4",
    color: "silver",
    motor: {
      serialNumber: 1236,
      hp: 180,
    }
  },
  {
    name: "Eco Beast",
    type: "Tesla Model 3",
    color: "white",
    motor: {
      serialNumber: 1237,
      hp: 350,
    }
  },
  {
    name: "Mountain King",
    type: "Range Rover Sport",
    color: "blue",
    motor: {
      serialNumber: 1238,
      hp: 380,
    }
  }
];

export default function page({}: Props)
{
  return (
  <div>
    <h1>Cars</h1>
    {cars.map((car: Car)=><Card car = {car}/>)}
  </div>
  );
  
}