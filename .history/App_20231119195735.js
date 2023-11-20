import React from 'react';
import Routes from './src/Paginas/routes';
import { ReservaProvider } from './ReservaContext';
import Routes from './src/Paginas/routes';

function App() {
  return (
    <ReservaProvider>
      <Routes />
    </ReservaProvider>
  );
}

export default App;