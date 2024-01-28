import React from 'react';
import './VistaAcumulador.css';

// Importa la función `LogicaAcumulador` desde el archivo `LogicaAcumulador`.
import { LogicaAcumulador } from './LogicaAcumulador';

// Define el componente funcional `VistaAcumulador`.
const VistaAcumulador: React.FC = () => {
  // Utiliza la función `LogicaAcumulador` para obtener el estado del acumulador y las funciones para incrementar y disminuir.
  const { acumulador, incrementar, disminuir } = LogicaAcumulador();

  // Retorna la representación visual del componente que muestra el valor del acumulador y dos botones para incrementar y disminuir.
  return (
    <div className="container">
      <h2>Acumulador</h2>
      <p>{`Valor actual: ${acumulador}`}</p>
      <button onClick={incrementar}>+5</button>
      <button onClick={disminuir}>-5</button>
    </div>
  );
};

// Exporta el componente para que pueda ser utilizado en otros archivos.
export default VistaAcumulador;
