import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/Paginas/routes';


export default function App() {
  return (
    <>
    Vai toma no tu
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </>
  );

}

