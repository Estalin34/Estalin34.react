import React, { useState } from 'react';
import './VistaSumarArreglo.css';

interface VistaSumarArregloProps {
  arreglo: number[];
}

const VistaSumarArreglo: React.FC<VistaSumarArregloProps> = ({ arreglo }) => {
  const [inputArreglo, setInputArreglo] = useState<string>('');
  const arregloIngresado = inputArreglo
    .split(',')
    .map((numero) => parseFloat(numero.trim()))
    .filter((numero) => !isNaN(numero));

  return (
    <div className="container">
      <h2>Suma de elementos del arreglo:</h2>
      <label>
        Ingrese el arreglo (separado por comas):
        <input type="text" value={inputArreglo} onChange={(e) => setInputArreglo(e.target.value)} />
      </label>
      <p>{`Arreglo ingresado: [${arregloIngresado.join(', ')}]`}</p>
      <p>{`Suma: ${arregloIngresado.reduce((total, numero) => total + numero, 0)}`}</p>
    </div>
  );
};

export default VistaSumarArreglo;
