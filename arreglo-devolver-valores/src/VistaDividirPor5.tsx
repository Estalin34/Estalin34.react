import React from 'react';
import './VistaDividirPor5.css';

interface VistaDividirPor5Props {
  resultado: number[];
}

const VistaDividirPor5: React.FC<VistaDividirPor5Props> = ({ resultado }) => {
  return (
    <div className="container">
      <h2>Nuevo arreglo con valores divididos por 5:</h2>
      <p>{`Resultado: [${resultado.join(', ')}]`}</p>
    </div>
  );
};

export default VistaDividirPor5;
