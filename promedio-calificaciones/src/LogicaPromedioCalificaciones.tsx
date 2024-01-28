// Define la función `calcularPromedioCalificaciones` que recibe un arreglo de alumnos y devuelve el promedio de las calificaciones.
export const calcularPromedioCalificaciones = (alumnos: any[]): number => {
    // Calcula el promedio de las calificaciones.
    const totalCalificaciones = alumnos.reduce((total, alumno) => total + alumno.calificacion, 0);
    // Retorna el promedio de las calificaciones.
    const promedio = totalCalificaciones / alumnos.length;
    // Retorna el promedio de las calificaciones.
    return promedio;
  };
  