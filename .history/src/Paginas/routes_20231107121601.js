import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import Home from './Home';
import Explorar from './Carros';
import Ajuda from './Ajuda';
import Reservas from './Locacoes';
import Recarga from './Mapa';

import {Ionicons} from '@expo/vector-icons' //react-native-vector-icons biblitoteca de icones  

const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          showLabel: false, // Oculta as etiquetas de texto das guias
          style: {
            position: 'absolute',
            borderTopWidth: 0,
            elevation: 0,
            backgroundColor: '#7A8D6D',
            height: 60,
            borderRadius: 10,
            bottom: 14,
            left: 14,
            right: 14,
          },
          tabStyle: {
            elevation: 0,
          },
          inactiveBackgroundColor: '#7A8D6D',
          activeBackgroundColor: '#5A6851',
        }}
      >
        <Tab.Screen name="Reservas" component={Reservas}
        options={{
            headerShown:false,
            tabBarIcon
        }} />
        
        <Tab.Screen name="Explorar" component={Explorar}
        options={{
            headerShown:false,
        }} />
        <Tab.Screen name="Home" component={Home} 
        options={{
            headerShown:false,
        }}/>
        <Tab.Screen name="Ajuda" component={Ajuda}
        options={{
            headerShown:false,
        }} />
        <Tab.Screen name="Recarga" component={Recarga} 
        options={{
            headerShown:false,
        }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}