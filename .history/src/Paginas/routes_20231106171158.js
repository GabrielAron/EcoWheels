import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './Home/index';
import Home from './Carros/index';
import Home from './Ajuda/index';
import Home from './Locacoes/index';
import Home from './Home/index';




export default function Routes() {
    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Carros" component={Carros} />
            <Tab.Screen name="Ajuda" component={Ajuda} />
            <Tab.Screen name="Locacoes" component={Locacoes} />
            <Tab.Screen name="Mapa" component={Mapa} />
            <Tab.Screen name="Procurar" component={Procurar} />
        </Tab.Navigator>
    )
} 