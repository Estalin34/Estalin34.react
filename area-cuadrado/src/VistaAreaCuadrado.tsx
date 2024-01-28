import React from 'react';
import AreaCuadrado from './AreaCuadrado';

interface VistaAreaCuadradoProps {
  sideLength: number;
  area: number | null;
  onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onCalculateArea: (calculatedArea: number) => void;
}

const VistaAreaCuadrado: React.FC<VistaAreaCuadradoProps> = ({ sideLength, area, onInputChange, onCalculateArea }) => {
  return (
    <div className="container">
      <h1>Aplicación React con TypeScript</h1>
      <label>
        Digite un lado del cuadrado:
        <input type="number" onChange={onInputChange} />
      </label>
      <AreaCuadrado sideLength={sideLength} onCalculateArea={onCalculateArea} />
      {area !== null && <p>Área del cuadrado: {area}</p>}
    </div>
  );
};

export default VistaAreaCuadrado;
