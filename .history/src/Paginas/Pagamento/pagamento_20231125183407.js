import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import Fundo from '/imagens/fundoverde.jpg';

export default function pagamento() {
  return (
    <View style={styles.container}>
      <ImageBackground source={Fundo} style={styles.image}>
        <Text style={styles.title}>Pagamento</Text>
        <View style={styles.card}>
          <View style={styles.column}>
            <Text style={styles.cardTitle}>Título</Text>
            <Text style={styles.cardText}>Local de retirada do veículo</Text>
            <Text style={styles.cardText}>Data de retirada</Text>
            <Text style={styles.cardText}>Data de entrega</Text>
            <Text style={styles.cardText}>Carros</Text>
            <Text style={styles.cardText}>Valor geral</Text>
            <Text style={styles.cardText}>Impostos de Serviço</Text>
            <Text style={styles.cardText}>Taxa de entrega</Text>
            <Text style={styles.cardText}>Você tem um cupom</Text>
          </View>
          <View style={styles.column}>
            <Text style={styles.cardTitle}>Variáveis</Text>
            <Text style={styles.cardText}>1</Text>
            <Text style={styles.cardText}>14</Text>
            <Text style={styles.cardText}>14</Text>
            <Text style={styles.cardText}>3</Text>
            <Text style={styles.cardText}>R$ 300,00</Text>
            <Text style={styles.cardText}>R$ 35,00</Text>
            <Text style={styles.cardText}>R$ 20,00</Text>
            <Text style={styles.cardText}>2</Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 25,
    color: '#000',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 50,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: 'rgba(169,169,169,0.5)', // Cinza semi-transparente
    margin: 20,
    marginTop: 70, // 20px abaixo do título
    marginBottom: 70, // 20px acima da barra de abas
    borderRadius: 10,
  },
  column: {
    flex: 1,
    padding: 10,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  cardText: {
    fontSize: 16,
    marginBottom: 5,
  },
});
