import { Text, View, StyleSheet, Image, Dimensions, ScrollView} from "react-native";
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from "react-native-safe-area-context";
import COLORS from '../constants/colors';
import React, { useRef, useState } from "react";
import { useTranslation } from "react-i18next";

const imageWidth = Dimensions.get("window").width;

const Termos = () => {

  const scrollViewRef = useRef(null);
  const [contentHeight, setContentHeight] = useState(0);
  const { t } = useTranslation();


  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
        <ScrollView>
          <View style={styles.container}>
            <Image
              source={require("../assets/header-termos.png")}
              style={{ ...styles.image, width: imageWidth }}
              resizeMode="contain"
            />
            <Text style={styles.title}>Termos e Condições</Text>
            <Text style={styles.desc}>
            Estes Termos e Condições de Uso regem o uso do aplicativo de denúncias
            de trânsito ("Aplicativo") oferecido pela nossa empresa. Ao acessar ou
            utilizar o Aplicativo, você concorda em ficar vinculado a estes
            Termos. Se você não concordar com algum destes Termos, não utilize o
            Aplicativo.
            </Text>

            <Text style={styles.subjects}>1. Uso do Aplicativo</Text>
            <Text style={styles.content}>
            <Text style={styles.topico}>1.1</Text> Ao usar o Aplicativo, você concorda em fornecer informações
              verdadeiras, precisas, atuais e completas sobre si mesmo conforme
              solicitado pelo formulário de denúncia.
              {"\n"}
              {"\n"}
              <Text style={styles.topico}>1.2</Text> Você é responsável por manter a confidencialidade de qualquer
              senha fornecida para acessar o Aplicativo e é totalmente responsável
              por todas as atividades que ocorrerem sob sua senha.
              {"\n"}
              {"\n"}
              <Text style={styles.topico}>1.3</Text> Você concorda em não usar o Aplicativo para qualquer finalidade
              ilegal ou não autorizada.
            </Text>

            <Text style={styles.subjects}>2. Propriedade Intelectual</Text>
            <Text style={styles.content}>
            <Text style={styles.topico}>2.1</Text> Todo o conteúdo do Aplicativo, incluindo, mas não se limitando a,
              texto, gráficos, logotipos, ícones de botões, imagens, clipes de
              áudio, downloads digitais e compilações de dados, é propriedade da
              nossa empresa e está protegido pelas leis de direitos autorais e
              outras leis de propriedade intelectual.
              {"\n"}{"\n"}
              <Text style={styles.topico}>2.2</Text> Você concorda em não
              reproduzir, duplicar, copiar, vender, revender ou explorar qualquer
              parte do Aplicativo sem a permissão expressa por escrito da nossa
              empresa.
            </Text>

            <Text style={styles.subjects}>3. Limitação de Responsabilidade</Text>
            <Text style={styles.content}>
            <Text style={styles.topico}>3.1</Text> O Aplicativo é fornecido "no estado em que se encontra" e
              "conforme disponível" sem garantias de qualquer tipo, expressas ou
              implícitas.
              {"\n"}{"\n"}
              <Text style={styles.topico}>3.2</Text> A nossa empresa não será responsável por quaisquer
              danos diretos, indiretos, incidentais, especiais, consequenciais ou
              exemplares resultantes do uso ou incapacidade de uso do Aplicativo.
            </Text>

            <Text style={styles.subjects}>4. Modificações nos Termos</Text>
            <Text style={styles.content}>
            <Text style={styles.topico}>4.1</Text> Reservamo-nos o direito de modificar estes Termos a qualquer
              momento. A versão revisada dos Termos entrará em vigor assim que for
              publicada no Aplicativo.
              {"\n"}{"\n"}
              <Text style={styles.topico}>4.2</Text> Ao continuar a acessar ou usar o
              Aplicativo após as modificações entrarem em vigor, você concorda em
              ficar vinculado aos Termos revisados.
            </Text>

            <Text style={styles.subjects}>5. Privacidade</Text>
            <Text style={styles.content}>
            <Text style={styles.topico}>5.1</Text> Ao usar o Aplicativo, você concorda com a coleta, uso e divulgação
              de suas informações pessoais de acordo com nossa Política de
              Privacidade.
              {"\n"}{"\n"}
              <Text style={styles.topico}>5.2</Text> Nossa empresa se compromete a proteger a privacidade
              dos usuários e a manter suas informações pessoais confidenciais.
            </Text>

            <Text style={styles.subjects}>6. Denúncias de Trânsito</Text>
            <Text style={styles.content}>
            <Text style={styles.topico}>6.1</Text> As denúncias de trânsito enviadas através do Aplicativo serão
              analisadas pela equipe responsável, que tomará as medidas adequadas de
              acordo com as políticas e regulamentos aplicáveis.
              {"\n"}{"\n"}
              <Text style={styles.topico}>6.2</Text> Você reconhece
              e concorda que a nossa empresa não garante ações específicas com base
              em qualquer denúncia enviada pelo Aplicativo.
            </Text>

            <Text style={styles.subjects}>7. Contato</Text>
            <Text style={styles.contentfinal}>
            <Text style={styles.topico}>7.1</Text> Se você tiver alguma dúvida ou preocupação sobre estes Termos ou
              sobre o Aplicativo, entre em contato conosco através dos meios de
              contato disponíveis no Aplicativo. Estes são os Termos e Condições de
              Uso completos para o nosso aplicativo de denúncias de trânsito. Se
              você tiver alguma dúvida ou precisar de esclarecimentos adicionais,
              não hesite em nos contatar.
            </Text>

            <Text style={styles.disclaimer}>
              A ViaSegura reserva-se o direito de realizar alterações nos{" "}
              <Text style={styles.destaque}>Termos e Condições</Text> sempre que
              achar necessário.
            </Text>
          </View>
        <StatusBar style="dark" />
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    justifyContent: "flex-start",
    // alignItems: "center",
    backgroundColor: "#FFF7FC",
  },
  image: {
    marginTop: -170,
    borderRadius: 25,
  },

  title: {
    fontSize: 26,
    fontFamily: "Inter_900Black",
    marginTop: -140,
    alignSelf: "center",
    color: "#000"
  },
  desc: {
    fontFamily: "Inter_200ExtraLight",
    fontSize: 9,
    marginTop: 7,
    marginHorizontal: 15,
    textAlign: "justify",
  },
  subjects: {
    fontFamily: "Inter_900Black",
    fontSize: 16,
    textAlign: "left",
    marginTop: 15,
    marginStart: 15,
    color: "#007BFF",
  },

  content: {
    fontFamily: "Inter_400Regular",
    fontSize: 8,
    marginHorizontal: 15,
    textAlign: "justify",
    marginTop: 5,
    marginBottom: 5
  },
  contentfinal: {
    fontFamily: "Inter_400Regular",
    fontSize: 8,
    color: "#1E1E1E",
    marginHorizontal: 15,
    textAlign: "justify",
    marginTop: 5,
    marginBottom: 40,
  },
  disclaimer: {
    fontFamily: "Inter_500Medium",
    fontSize: 8,
    marginHorizontal: 15,
    textAlign: "center",
    marginTop: 5,
    marginBottom: 80,
  },
  destaque: {
    fontFamily: "Inter_700Bold",
    fontSize: 8,
    marginHorizontal: 15,
    textAlign: "center",
    marginTop: 5,
    marginBottom: 80,
    color: "#007BFF",
  },
  topico: {
    fontFamily: "Inter_700Bold",
    color: "#333",
  },
});
export default Termos;
