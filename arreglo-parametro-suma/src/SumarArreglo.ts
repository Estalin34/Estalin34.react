// Importa la biblioteca React.
import React from 'react';

// Define la función `sumarArreglo` que recibe un arreglo y devuelve la suma de sus elementos.
export const sumarArreglo = (arreglo: number[]): number => {
  return arreglo.reduce((total, numero) => total + numero, 0);
};
