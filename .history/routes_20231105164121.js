import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './Paginas/Home';
import Cars from './Paginas/Cars';
import Help from './Paginas/Help';
import Locations from './Paginas/Locations';
import Maps from './Paginas/Maps';
import Search from './Paginas/Search';

const Tab = createBottomTabNavigator();

export default function Routes() {

    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Cars" component={Cars} />
            <Tab.Screen name="Help" component={Help} />
            <Tab.Screen name="Locations" component={Locations} />
            <Tab.Screen name="" component=e} />
            <Tab.Screen name="Home" component={Home} />
        </Tab.Navigator>
    )
}