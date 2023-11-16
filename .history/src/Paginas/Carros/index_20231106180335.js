import { View, Text, Image, StyleSheet,} from 'react-native';

export default function Carros(){
return(
    <View style={styles.container}>
        <Text style={styles.text}>asdasdas</Text>
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