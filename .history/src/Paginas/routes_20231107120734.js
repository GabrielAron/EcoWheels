import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import Home from './Home';
import Explorar from './Carros';
import Ajuda from './Ajuda';
import Reservas from './Locacoes';
import Recarga from './Mapa';

const Tab = createBottomTabNavigator();

export default function Routes() {
  const tabBarOptions = {
    showLabel: false, // Oculta as etiquetas de texto das guias
    position:'absolute',
    borderTopWidth:0,
    style:{elevation:0},
    inactiveBackgroundColor: "#7A8D6D",
    activeBackgroundColor: "#5A6851",

    bottom:14,
    left:14,
    rigth:14,
    elevation:0,
    borderRadius:10
    
  };

  return (
    <NavigationContainer>
      <Tab.Navigator tabBarOptions={tabBarOptions}>
        <Tab.Screen name="Reservas" component={Reservas} />
        <Tab.Screen name="Explorar" component={Explorar} />
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Ajuda" component={Ajuda} />
        <Tab.Screen name="Recarga" component={Recarga} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}