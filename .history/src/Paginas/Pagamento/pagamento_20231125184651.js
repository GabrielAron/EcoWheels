import { View, Text, ImageBackground, Image, StyleSheet } from 'react-native';
import Fundo from '/imagens/fundoverde.jpg';
import Imagem from '/imagens'; // Importe a imagem aqui

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
        <Image source={Imagem} style={styles.imagem} /> {/* Adicione a imagem aqui */}
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
    justifyContent: 'center', // Centraliza o conteúdo verticalmente
  },
  title: {
    fontSize: 25,
    color: '#000',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 50,
  },
  card: {
    flex: 0.6, // Torna o cartão maior
    flexDirection: 'row',
    backgroundColor: 'rgba(169,169,169,0.5)', // Cinza semi-transparente
    margin: 20,
    borderRadius: 10,
    justifyContent: 'space-around', // Distribui as colunas uniformemente
    alignItems: 'center', // Centraliza as colunas horizontalmente
    marginBottom: 10, // Reduz a margem inferior para 10px
  },
  column: {
    flex: 1,
    padding: 10,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15, // Adiciona espaço entre as linhas de texto
  },
  cardText: {
    fontSize: 16,
    marginBottom: 15, // Adiciona espaço entre as linhas de texto
  },
  imagem: {
    width: '100%', // A imagem ocupa toda a largura disponível
    height: 200, // Ajuste a altura conforme necessário
    marginTop: 10, // Adiciona uma margem superior de 10px
  },
});
