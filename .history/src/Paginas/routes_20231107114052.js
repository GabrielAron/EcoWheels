import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import Home from './Home';
import Carros from './Carros';
import Ajuda from './Ajuda';
import Reservas from './Locacoes';
import Mapa from './Mapa';
import Procurar from './Procurar';


const Tab = createBottomTabNavigator();

export default function Routes() {
    

    return (
        <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} />
            ]
            <Tab.Screen name="Carros" component={Carros} />

            <Tab.Screen name="Ajuda" component={Ajuda} />
            
            <Tab.Screen name="Reservas" component={Reservas} />
            <Tab.Screen name="Mapa" component={Mapa} />
            <Tab.Screen name="Procurar" component={Procurar} />
        </Tab.Navigator>
    </NavigationContainer>
    )
}