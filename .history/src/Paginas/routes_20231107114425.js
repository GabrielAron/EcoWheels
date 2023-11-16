import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import Home from './Home';
import Explorar from './Carros';
import Ajuda from './Ajuda';
import Reservas from './Locacoes';
import Recarga from './Mapa';



const Tab = createBottomTabNavigator();

export default function Routes() {


    return (
        <NavigationContainer>
            <Tab.Navigator>

                <Tab.Screen name="Reservas" component={Reservas} />

                <Tab.Screen name="Explorar" component={Explorar} />
                <Tab.Screen name="Home" component={Home} />
                <Tab.Screen name="Ajuda" component={Ajuda} />

                <Tab.Screen name="Recarga" component={Recarga} />

                
            </Tab.Navigator>
        </NavigationContainer>
    )
}