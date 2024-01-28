// Importa la biblioteca React.
import React from 'react';
import { sumarArreglo } from './SumarArreglo';
import VistaSumarArreglo from './VistaSumarArreglo';

// Define el arreglo que se utilizará.
const arregloEjemplo = [1, 2, 3, 4, 5];

// Define el componente funcional `App`.
const App: React.FC = () => {
  // Calcula la suma del arreglo utilizando la función `sumarArreglo`.
  const suma = sumarArreglo(arregloEjemplo);

  // Retorna la representación visual del componente, llamando al componente `VistaSumarArreglo` con el arreglo y la suma calculada.
  return (
    <div>
      <VistaSumarArreglo arreglo={arregloEjemplo} />
    </div>
  );
};

// Exporta el componente `App`.
export default App;
