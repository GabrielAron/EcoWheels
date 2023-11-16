import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './src/Paginas/Home';
import Cars from './src/Paginas/Carros';
import Help from './src/Paginas/Ajuda';
import Locations from './src/Paginas/Locacoes';
import Maps from './src/Paginas/Mapa';
import Search from './src/Paginas/Procurar';


const Tab = createBottomTabNavigator();

export default function Routes() {

    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Carros" component={Cars} />
            <Tab.Screen name="Ajuda" component={Help} />
            <Tab.Screen name="Locacoes" component={Locacoes} />
            <Tab.Screen name="Mapa" component={Maps} />
            <Tab.Screen name="Procurar" component={Procurar} />
        </Tab.Navigator>
    )
}