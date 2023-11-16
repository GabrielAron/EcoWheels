import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './src/Paginas/Home';
import Carros from './src/Paginas/Carros';
import Ajuda from './src/Paginas/Ajuda';
import Locacoes from './src/Paginas/Locacoes';
import Mapa from './src/Paginas/Mapa';
import Procurar from './src/Paginas/Procurar';


const Tab = createBottomTabNavigator();

export default function Routes() {

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
} pera e