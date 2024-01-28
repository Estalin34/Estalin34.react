import React from 'react';
import VistaAcumulador from './VistaAcumulador';
import './App.css';

// Define el componente funcional `App`.
const App: React.FC = () => {
  // Retorna la representación visual del componente, llamando al componente `VistaAcumulador`.
  return (
    <div>
      <VistaAcumulador />
      
    </div>
  );
};

// Exporta el componente `App`.
export default App;
