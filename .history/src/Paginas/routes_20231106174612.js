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
            <Stack.Navigator initialRouteName="Index">
                <Stack.Screen name="Index" component={IndexScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    </SafeAreaView>


    )
}