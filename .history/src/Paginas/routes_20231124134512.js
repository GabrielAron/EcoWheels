import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

import Home from './Home';
import Explorar from './Carros';
import Ajuda from './Ajuda';
import Reservas from './Locacoes';
import Recarga from './Mapa';
import pagamento from './Pagamento/pagamento';

const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          showLabel: false, // Oculta as etiquetas de texto das guias
          tabBarStyle: {
            position: 'absolute',
            backgroundColor: '#7A8D6D',
            height:700,
          },
          tabStyle: {
            elevation: 0,
          },
          inactiveBackgroundColor: '#7A8D6D',
          activeBackgroundColor: '#5A6851',
        }}
      >
        <Tab.Screen
          name="Reservas"
          component={Reservas}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size, focused }) => {
              if (focused) {
                return <Ionicons name="md-car" size={23} color="#FFF" />;
              } else {
                return <Ionicons name="md-car-outline" size={23} color="#000000" />;
              }
            },
          }}
        />
        <Tab.Screen
          name="Explorar"
          component={Explorar}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size, focused }) => {
              if (focused) {
                return <Ionicons name="md-search" size={23} color="#FFF" />;
              } else {
                return <Ionicons name="md-search-outline" size={23} color="#000000" />;
              }
            },
          }}
        />
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size, focused }) => {
              if (focused) {
                return <Ionicons name="md-home" size={23} color="#FFF" />;
              } else {
                return <Ionicons name="md-home-outline" size={23} color="#000000" />;
              }
            },
          }}
        />
        <Tab.Screen
          name="Ajuda"
          component={Ajuda}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size, focused }) => {
              if (focused) {
                return <Ionicons name="md-help" size={23} color="#FFF" />;
              } else {
                return <Ionicons name="md-help-outline" size={23} color="#000000" />;
              }
            },
          }}
        />
        <Tab.Screen
          name="Recarga"
          component={Recarga}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size, focused }) => {
              if (focused) {
                return <Ionicons name="md-map" size={23} color="#FFF" />;
              } else {
                return <Ionicons name="md-map-outline" size={23} color="#000000" />;
              }
            },
          }}
        />
         <Tab.Screen
          name="Pagamento"
          component={Pagamento}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size, focused }) => {
              if (focused) {
                return <Ionicons name="md-car" size={23} color="#FFF" />;
              } else {
                return <Ionicons name="md-car-outline" size={23} color="#000000" />;
              }
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}