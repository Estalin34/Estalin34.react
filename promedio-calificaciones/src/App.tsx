// Importa la biblioteca React.
import React from 'react';
import { calcularPromedioCalificaciones } from './LogicaPromedioCalificaciones';
import VistaPromedioCalificaciones from './VistaPromedioCalificaciones';
import './App.css';

// Define el arreglo de alumnos que se utilizará.
const alumnosEjemplo = [
  { name: 'Viviana', edad: 19, calificacion: 10 },
  { name: 'Wendy', edad: 20, calificacion: 8 },
  { name: 'Gerson', edad: 18, calificacion: 9 },
];

// Define el componente funcional `App`.
const App: React.FC = () => {
  // Calcula el promedio de calificaciones utilizando la función `calcularPromedioCalificaciones`.
  const promedio = calcularPromedioCalificaciones(alumnosEjemplo);

  // Retorna la representación visual del componente, llamando al componente `VistaPromedioCalificaciones` con el arreglo de alumnos y el promedio calculado.
  return (
    <div>
      <VistaPromedioCalificaciones alumnos={alumnosEjemplo} promedio={promedio} />
    </div>
  );
};

// Exporta el componente `App`.
export default App;
