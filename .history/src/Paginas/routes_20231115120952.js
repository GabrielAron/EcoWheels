import React from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

import Home from './Home';
import Explorar from './Carros';
import Ajuda from './Ajuda';
import Reservas from './Locacoes';
import Recarga from './Mapa';

const Tab = createBottomTabNavigator();

function ScreenWithTabBarPadding({ children }) {
  return (
    <View style={{ flex: 1, paddingBottom: 30 }}>
      {children}
    </View>
  );
}

export default function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          showLabel: false,
          tabBarStyle: {
            position: 'absolute',
            backgroundColor: '#7A8D6D',
            paddingBottom: 30,
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
          component={() => (
            <ScreenWithTabBarPadding>
              <Reservas />
            </ScreenWithTabBarPadding>
          )}
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
          component={() => (
            <ScreenWithTabBarPadding>
              <Explorar />
            </ScreenWithTabBarPadding>
          )}
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
          component={() => (
            <ScreenWithTabBarPadding>
              <Home />
            </ScreenWithTabBarPadding>
          )}
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
          component={() => (
            <ScreenWithTabBarPadding>
              <Ajuda />
            </ScreenWithTabBarPadding>
          )}
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
          component={() => (
            <ScreenWithTabBarPadding>
              <Recarga />
            </ScreenWithTabBarPadding>
          )}
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
      </Tab.Navigator>
    </NavigationContainer>
  );
}
