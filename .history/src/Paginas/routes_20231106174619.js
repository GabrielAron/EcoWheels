import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaView } from "react-native-safe-area-context";

import Home from './Home/index';
import Carros from './Carros/index';
import Ajuda from './Ajuda/index';
import Locacoes from './Locacoes/index';
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