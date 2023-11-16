
import { View, Text, Image, StyleSheet,} from 'react-native';

export default function Ajuda(){
return(
    <View style={styles.container}>
        <text style={styles.text}>Pagina Home</text>
    </View>
);
}

const styles = SteyleSheet.create({
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