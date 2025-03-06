import React from "react";
import CarsList from "../components/ui/cars/CarsList";
import { Car } from "@/lib/types/types";


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

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 pt-20">
      <div className="max-w-6xl mx-auto p-8">
        <div className="bg-white/50 backdrop-blur-sm rounded-xl shadow-lg border border-white/20 p-8">
          <h1 className="text-4xl mb-8 font-bold text-center text-blue-900">Our Cars Collection</h1>
          <CarsList cars={cars} />
        </div>
      </div>
    </div>
  );
}
