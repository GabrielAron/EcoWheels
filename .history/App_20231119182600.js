import React from 'react';
import { ReservaProvider } from './ReservaContext';
import Routes from './src/Paginas/routes';

export default function App() {
  return (
    <ReservaProvider>
      <Routes />
    </ReservaProvider>
  );
}
