import React from 'react';
import { View, StyleSheet, ImageBackground, Image, Text, TouchableOpacity } from 'react-native';

const PolíticaPri = () => {
  return (
    <ImageBackground
      source={require('./fundoverde.jpg')} // Caminho da sua imagem de fundo
      style={styles.background}
    >
      <View style={styles.container}>
        {/* Imagem no Topo */}
        <Image
          source={require('./Logo_EletriCar.png')}
          style={styles.topImage}
        />
        <View style={styles.content}>
          <Text style={styles.text}>A sua privacidade é importante para nós. Esta Política de Privacidade descreve como coletamos, usamos, divulgamos, transferimos e armazenamos suas informações pessoais. Por favor, leia com atenção esta política antes de fornecer qualquer informação pessoal.
Coleta de Informações
Podemos coletar informações pessoais quando você interage com nossos serviços. Isso pode incluir seu nome, endereço de e-mail, número de telefone, informações de pagamento e outros dados relevantes. Também podemos coletar informações não pessoais, como dados demográficos e preferências, de forma a melhorar nossos serviços e personalizar sua experiência.
Uso de Informações
Utilizamos suas informações pessoais para fornecer, manter, proteger e melhorar nossos serviços. Isso inclui o processamento de transações, o envio de comunicações relacionadas ao serviço, o atendimento ao cliente e a personalização de conteúdo. Também podemos utilizar suas informações para fins de análise e pesquisa, visando aprimorar nossos produtos e serviços.
Compartilhamento de Informações
Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros, exceto conforme descrito nesta Política de Privacidade. Podemos compartilhar suas informações com prestadores de serviços confiáveis que nos ajudam a operar nosso negócio e a fornecer serviços a você. Esses terceiros estão sujeitos a obrigações contratuais de confidencialidade e utilizam suas informações apenas para os fins específicos para os quais foram contratados.
Segurança
Implementamos medidas de segurança adequadas para proteger suas informações pessoais contra acesso não autorizado, divulgação, alteração ou destruição. No entanto, nenhum sistema de segurança é totalmente impenetrável, e não podemos garantir a segurança absoluta das informações durante a transmissão ou armazenamento.
Cookies e Tecnologias Semelhantes
Podemos usar cookies e tecnologias semelhantes para coletar informações e melhorar sua experiência em nosso site. Você pode gerenciar suas preferências de cookies nas configurações do seu navegador, mas observe que a desativação de cookies pode afetar a funcionalidade do site.
Links para Sites de Terceiros
Nosso site pode conter links para sites de terceiros. Não somos responsáveis pelas práticas de privacidade ou pelo conteúdo desses sites. Recomendamos que você leia as políticas de privacidade desses sites antes de fornecer suas informações pessoais.
</Text>
          <TouchableOpacity style={styles.button} onPress={() => alert('Botão Clicado')}>
            <Text style={styles.buttonText}>Voltar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  topImage: {
    width: '100%', // ou ajuste conforme necessário
    height: 80, // ou ajuste conforme necessário
    resizeMode: 'contain',
    marginTop: 10, // ou ajuste conforme necessário
    marginBottom: 20, // Adicione esta linha para afastar o logo do texto
  },
  content: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 15,
    borderRadius: 20,
    width: '93%',
    alignItems: 'center',
  },
  text: {
    fontSize: 10,
    color: 'black',
    marginBottom: 5,
  },
  button: {
    backgroundColor: 'gray',
    padding: 5,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 10,
  },
});

export default PolíticaPri;


