import { Car } from "./car";
import React, { useState } from 'react';

export function App() {
  const [car1Data, setCar1Data] = useState({ carModel: '', year: '', color: '' });

  return (
    <div>
      <Car initialData={car1Data} key="car1" />
    </div>
  );
}