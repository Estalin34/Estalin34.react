// importar React desde la biblioteca de React.
import React from 'react';

// definir la interfaz `AreaCuadradoProps`
interface AreaCuadradoProps {
  sideLength: number;  // Propiedad que representa el lado del cuadrado.
  onCalculateArea: (area: number) => void;  // Función que se ejecutará cuando se calcule el área del cuadrado.
}

// Define el componente funcional `AreaCuadrado` que acepta las propiedades definidas en la interfaz `AreaCuadradoProps`.
const AreaCuadrado: React.FC<AreaCuadradoProps> = ({ sideLength, onCalculateArea }) => {
  // Define la función `calculateArea` que se encarga de calcular el área del cuadrado y llamar a la función `onCalculateArea`.
  const calculateArea = () => {
    // Calcula el área del cuadrado.
    const area = sideLength * sideLength; // A = l * l
    onCalculateArea(area); // Llama a la función `onCalculateArea` con el área calculada.
  };

  // Retorna la representación visual del componente.
  return (
    <div>
      {/* Realiza la operación al dar clic en el boton */}
      <button onClick={calculateArea}>Calcular Área</button>
    </div>
  );
};

// Exporta el componente para que pueda ser utilizado en otros archivos.
export default AreaCuadrado;
