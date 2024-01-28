// Importa la biblioteca React.
import React from 'react';
import { dividirPor5 } from './LogicaDividirPor5';
import VistaDividirPor5 from './VistaDividirPor5';

// Define el arreglo que se utilizará.
const arregloEjemplo = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];

// Define el componente funcional `App`.
const App: React.FC = () => {
  // Calcula el nuevo arreglo utilizando la función `dividirPor5`.
  const resultado = dividirPor5(arregloEjemplo);

  // Retorna la representación visual del componente, llamando al componente `VistaDividirPor5` con el resultado calculado.
  return (
    <div>
      <VistaDividirPor5 resultado={resultado} />
    </div>
  );
};

// Exporta el componente `App`.
export default App;
