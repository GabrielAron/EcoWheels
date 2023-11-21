import React, { useState } from 'react';
import { View, Text, ImageBackground, TouchableOpacity, Modal, StyleSheet } from 'react-native';

const texts = [
  { title: 'Agências', info: 'As agências de carros elétricos desempenham um papel crucial na aceleração da adoção de veículos elétricos, proporcionando aos consumidores acesso a uma gama diversificada de opções de transporte sustentável e contribuindo para a construção de um futuro mais limpo e ecologicamente responsável.' },
  { title: 'Proteções de Carro e Cobertura de Terceiros', info: 'Viaje com confiança, sabendo que seu carro elétrico está protegido por um conjunto abrangente de coberturas. Escolha a segurança, escolha a tranquilidade, escolha nossas opções de proteção líderes de mercado. Seu carro, sua jornada, nossa prioridade.' },

  { title: 'Localização Rápida', info: 'Nunca mais perca tempo procurando seu carro elétrico. Com nosso sistema de localização rápida, você está sempre no controle, aproveitando o máximo de conveniência em cada viagem. Seu carro, sua localização, sua tranquilidade.' },

  { title: 'Frotas e Modelos', info: 'Eleve o padrão da sua frota com carros elétricos. Além de proporcionar eficiência operacional, sua empresa estará na vanguarda da inovação e da responsabilidade ambiental. Transforme sua frota hoje e impulsione seu negócio para o futuro.' },

  { title: 'Aluguel Mensal Flex', info: 'Descubra uma forma inovadora e flexível de mobilidade com nosso Aluguel Mensal Flex de Carro Elétrico. Liberte-se das restrições, experimente a condução elétrica e abrace um estilo de vida mais sustentável. Sua liberdade começa aqui!' },

  { title: 'Pré-requisitos e Formas de Pagamento', info: 'Em sua jornada em direção a uma mobilidade mais sustentável, tornamos o processo de aluguel de carros elétricos simples e acessível. Antes de embarcar nessa experiência eco-friendly, é importante entender nossos pré-requisitos e opções de pagamento para garantir uma transição suave para a condução elétrica.Idade Mínima: Para alugar um carro elétrico, os condutores devem ter a idade mínima Carteira de Motorista Válida: Todos os locatários devem possuir uma carteira de motorista Verificação de Crédito: Pode ser necessário passar por uma verificação de crédito para concluir o processo de aluguel. Isso é comum em muitas locadoras e ajuda a garantir uma transação segura.' },
  { title: 'Pré-requisitos e Formas de Pagamento', info: 'Em sua jornada em direção a uma mobilidade mais sustentável, tornamos o processo de aluguel de carros elétricos simples e acessível. Antes de embarcar nessa experiência eco-friendly, é importante entender nossos pré-requisitos e opções de pagamento para garantir uma transição suave para a condução elétrica.Idade Mínima: Para alugar um carro elétrico, os condutores devem ter a idade mínima Carteira de Motorista Válida: Todos os locatários devem possuir uma carteira de motorista, Verificação de Crédito: Pode ser necessário passar por uma verificação de crédito para concluir o processo de aluguel. Isso é comum em muitas locadoras e ajuda a garantir uma transação segura.' },

  { title: 'Programa Fidelidade', info: 'Celebre sua escolha sustentável e seja recompensado a cada curva do caminho. Com nosso Programa de Fidelidade para Carros Elétricos, sua lealdade é valorizada e premiada. Junte-se a nós na construção de um futuro mais sustentável e desfrute dos benefícios de dirigir um carro elétrico com estilo.' },

  { title: 'Promoções', info: 'Embarque em uma jornada emocionante em direção a um futuro mais verde com nossas ofertas especiais de aluguel de carros elétricos. Na vanguarda da inovação e comprometidos com a sustentabilidade, oferecemos opções que não apenas economizam dinheiro, mas também fazem parte da mudança para um estilo de vida mais ecológico sobre rodas.' },

  { title: 'Reservas de Carros', info: 'Reserve seu carro conosco e inicie sua jornada com confiança. Explore, descubra e aproveite cada momento, sabendo que temos o compromisso de tornar sua experiência de aluguel de carros excepcional. Sua aventura começa aqui!' },

  { title: 'Acidente, Pane, Furto e Roubo', info: 'Escolha a proteção que se alinha às suas necessidades e tenha a confiança de que, aconteça o que acontecer, estamos aqui para garantir que sua jornada continue suave e segura. Sua segurança é nossa prioridade.' },

  { title: 'Opcionais', info: 'Personalize sua experiência elétrica com nossos opcionais exclusivos, que não apenas atendem às suas necessidades práticas, mas também elevam o prazer de dirigir a novos patamares. Embrace o futuro da mobilidade com inovações que definem o padrão. Seu carro elétrico, sua jornada única.' },

  { title: 'Uber', info: 'Faça parte dessa revolução verde. Escolha um Uber com carro elétrico e ajude a moldar o futuro da mobilidade urbana de forma sustentável. Sua viagem, sua escolha, nosso planeta.' },

  { title: 'Carros Adaptados', info: 'Descubra uma nova era de mobilidade, onde a inclusão é a prioridade. Nossos carros adaptados elétricos não são apenas veículos; são meios de libertação, permitindo que cada indivíduo siga seu próprio caminho com dignidade e autonomia.' },

  { title: 'Prorrogação do Aluguel Diário', info: 'Condições se aplicam. Sujeito a disponibilidade. Tarifas de prorrogação podem variar. Entre em contato para mais detalhes.' },

  { title: 'Tarifas', info: 'Certifique-se de fornecer informações claras e detalhadas sobre o que está incluído em cada tarifa, evitando surpresas desagradáveis para os clientes. Ademais, a flexibilidade na estrutura de preços pode ser uma vantagem competitiva ao atrair uma variedade de clientes com diferentes necessidades e preferências.' },

  { title: 'Tag de Pagamento', info: 'Simplifique sua experiência de carregamento com a Tag de Pagamento. Mais do que uma forma de pagamento, é a chave para uma mobilidade elétrica eficiente, transparente e adaptada às suas necessidades. Sua jornada elétrica agora é mais fácil do que nunca.' },

  { title: 'Emergências', info: 'Viaje com confiança sabendo que, em qualquer emergência, estamos ao seu lado. Nosso compromisso é garantir que sua experiência com carros elétricos seja não apenas eficiente e sustentável, mas também segura em todas as circunstâncias. Sua segurança é nossa prioridade.' },
];

const Reservas = () => {
  const [selectedText, setSelectedText] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const handleTextPress = (text) => {
    setSelectedText(text);
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setSelectedText('');
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={require('./fundoverde.jpg')} style={styles.backgroundImage}>
        <View style={styles.overlay}>
          <Text style={styles.header}>Ajuda</Text>

          <View style={styles.textContainer}>
            {texts.map((text, index) => (
              <TouchableOpacity key={index} onPress={() => handleTextPress(text)}>
                <View style={styles.textRow}>
                  <Text style={styles.text}>{text.title}</Text>
                  <View style={styles.line} />
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <Modal animationType="slide" transparent={true} visible={modalVisible}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalText}>{selectedText.title}</Text>
            <Text style={styles.modalInfo}>{selectedText.info}</Text>
            <TouchableOpacity onPress={handleCloseModal}>
              <Text style={styles.closeButton}>Voltar</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  //caixa branca
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    padding: 15,
    paddingTop: 10,
    borderRadius: 10,
  },
  header: {
    color: 'black',
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center', // Centraliza o texto
    textDecorationLine: 'underline', // Adiciona sublinhado
  },
  textContainer: {
    marginTop: 20,
  },
  textRow: {
    flexDirection: '',
    alignItems: '',
    marginBottom: 12,
  },
  text: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 13,
  },
  line: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    flex: 1,
    marginLeft: 5,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    padding: 20,
  },
  modalText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 15,
    textAlign: 'center', // Centraliza o texto no modal
 
  },
  modalInfo: {
    color: 'white',
    fontSize: 13,
    marginBottom: 15,
  },
  closeButton: {
    color: 'white',
    fontSize: 12,
  },
});

export default Reservas;

