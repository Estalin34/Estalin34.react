import React, { useState } from 'react';
import VistaAreaCuadrado from './VistaAreaCuadrado';
import './App.css';

// Define el componente funcional `App`.
const App: React.FC = () => {
  // Define el estado `sideLength` y `area` utilizando el hook `useState`.
  const [sideLength, setSideLength] = useState<number>(0);
  // define el estado `area` utilizando el hook `useState`.
  const [area, setArea] = useState<number | null>(null);

  // Define la función `handleCalculateArea` que se encarga de actualizar el estado `area` con el área calculada.
  const handleCalculateArea = (calculatedArea: number) => {
    setArea(calculatedArea);
  };

  // Define la función `handleInputChange` que se encarga de actualizar el estado `sideLength` con el valor ingresado en el input.
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = Number(event.target.value);
    setSideLength(inputValue);
  };

  // Retorna la representación visual del componente, llamando al componente `VistaAreaCuadrado` con el lado del cuadrado, el área y las funciones `handleInputChange` y `handleCalculateArea`.
  return (
    <VistaAreaCuadrado
      sideLength={sideLength}
      area={area}
      onInputChange={handleInputChange}
      onCalculateArea={handleCalculateArea}
    />
  );
};

export default App;
