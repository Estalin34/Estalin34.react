import React, { useState } from 'react';

// Define la función `LogicaAcumulador` que gestiona el estado del acumulador.
export const LogicaAcumulador = () => {
  // Utiliza el estado local `acumulador` y la función `setAcumulador` para manejar el estado del acumulador.
  const [acumulador, setAcumulador] = useState<number>(0);

  // Define la función `incrementar` que incrementa el valor del acumulador.
  const incrementar = () => {
    setAcumulador(acumulador + 5);
  };

  // Define la función `disminuir` que disminuye el valor del acumulador.
  const disminuir = () => {
    setAcumulador(acumulador - 5);
  };

  // Retorna el estado actual del acumulador y las funciones para incrementar y disminuir.
  return { acumulador, incrementar, disminuir };
};
