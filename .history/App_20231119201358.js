import React from 'react';
import Routes from './src/Paginas/routes';
import { ReservaProvider } from ''


function App() {
  return (
    <ReservaProvider>
      <Routes />
    </ReservaProvider>
  );
}

export default App;