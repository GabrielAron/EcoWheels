import { View, Text, Image, StyleSheet,} from 'react-native';

export default function Reservas(){
return(
    <View style={styles.container}>
        <Text style={styles.Text}>Pagina Home</Text>
    </View>
);
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
     text:{
        fontSize:25,
        color:"#000",
        fontWeight:'bold',
     }
    
});