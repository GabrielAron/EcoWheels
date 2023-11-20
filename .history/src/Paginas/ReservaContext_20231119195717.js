import React, { createContext, useState } from 'react';

export const ReservaContext = createContext();

export const ReservaProvider = ({ children }) => {
  const [reservas, setReservas] = useState([]);

  return (
    <ReservaContext.Provider value={{ reservas, setReservas }}>
      {children}
    </ReservaContext.Provider>
  );
};
