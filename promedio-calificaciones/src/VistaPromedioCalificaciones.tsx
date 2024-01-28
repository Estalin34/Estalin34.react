import React from 'react';
import './VistaPromedioCalificaciones.css';

interface VistaPromedioCalificacionesProps {
  alumnos: any[];
  promedio: number;
}

const VistaPromedioCalificaciones: React.FC<VistaPromedioCalificacionesProps> = ({ alumnos, promedio }) => {
  return (
    <div className="container">
      <ul>
        {alumnos.map((alumno, index) => (
          <li key={index}>
            {`${alumno.name} - Edad: ${alumno.edad} - Calificación: ${alumno.calificacion}`}
          </li>
        ))}
      </ul>
      <p>{`Promedio: ${promedio.toFixed(2)}`}</p>
    </div>
  );
};

export default VistaPromedioCalificaciones;
