import React from 'react';
import Routes from './src/Paginas/routes';
import { ReservaProvider } 


function App() {
  return (
    <ReservaProvider>
      <Routes />
    </ReservaProvider>
  );
}

export default App;