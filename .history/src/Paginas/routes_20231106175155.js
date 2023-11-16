import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from '@react-navigation/native';

import Home from './Home';
import Carros from './Carros';
import Ajuda from './Ajuda';
import Locacoes from './Locacoes';
import Mapa from './Mapa/index';
import Procurar from './Procurar/index';


const Tab = createBottomTabNavigator();

export default function Routes() {
    

    return (
    <SafeAreaView style={{flex:1}}>
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Home" component={Home} />
                <Tab.Screen name="Carros" component={Carros} />
                <Tab.Screen name="Ajuda" component={Ajuda} />
                <Tab.Screen name="Locacoes" component={Locacoes} />
                <Tab.Screen name="Mapa" component={Mapa} />
                <Tab.Screen name="Procurar" component={Procurar} />
            </Tab.Navigator>
        </NavigationContainer>
    </SafeAreaView>

    )
}