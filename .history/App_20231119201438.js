import React from 'react';
import Routes from './src/Paginas/routes';
import { ReservaProvider } from './src/Paginas/ReservaContext';


function App() {
  return (
    <ReservaProvider>
      <Routes />
    </ReservaProvider>
  );
}

export default App;