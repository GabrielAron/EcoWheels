import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from 'src/Paginas\Home\index';
import Carros from './src/Paginas/Carros/index.js';
import Ajuda from './src/Paginas/Ajuda/index.js';
import Locacoes from './src/Paginas/Locacoes/index.js';
import Mapa from './src/Paginas/Mapa/index.js';
import Procurar from './src/Paginas/Procurar/index.js';


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
} 