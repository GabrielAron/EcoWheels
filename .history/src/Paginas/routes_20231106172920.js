import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './Home/index';
import Carros from './Carros/index';
import Ajuda from './Ajuda/index';
import Locacoes from './Locacoes/index';
import Mapa from './Mapa/index';
import Procurar from './Procurar/index';


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

