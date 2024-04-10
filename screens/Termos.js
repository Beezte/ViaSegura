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
            <Text style={styles.title}>{t("termos-title")}</Text>
            <Text style={styles.desc}>
            {t("termos-desc")}
            </Text>

            <Text style={styles.subjects}>{t("termos-termoumtitle")}</Text>
            <Text style={styles.content}>
            <Text style={styles.topico}>1.1</Text> {t("termos-termoum11")}
              {"\n"}
              {"\n"}
              <Text style={styles.topico}>1.2</Text> {t("termos-termoum12")}
              {"\n"}
              {"\n"}
              <Text style={styles.topico}>1.3</Text>  {t("termos-termoum13")}
            </Text>

            <Text style={styles.subjects}>{t("termos-termodoistitle")}</Text>
            <Text style={styles.content}>
            <Text style={styles.topico}>2.1</Text> {t("termos-termodois21")}
              {"\n"}
              {"\n"}
              <Text style={styles.topico}>2.2</Text> {t("termos-termodois22")}
            </Text>

            <Text style={styles.subjects}>{t("termos-termotrestitle")}</Text>
            <Text style={styles.content}>
            <Text style={styles.topico}>3.1</Text> {t("termos-termotres31")}
              {"\n"}
              {"\n"}
              <Text style={styles.topico}>3.2</Text> {t("termos-termotres32")}
            </Text>

            <Text style={styles.subjects}>{t("termos-termoquatrotitle")}</Text>
            <Text style={styles.content}>
            <Text style={styles.topico}>4.1</Text> {t("termos-termoquatro41")}
              {"\n"}
              {"\n"}
              <Text style={styles.topico}>4.2</Text> {t("termos-termoquatro42")}
            </Text>

            <Text style={styles.subjects}>{t("termos-termocincotitle")}</Text>
            <Text style={styles.content}>
            <Text style={styles.topico}>5.1</Text> {t("termos-termocinco51")}
              {"\n"}
              {"\n"}
              <Text style={styles.topico}>5.2</Text> {t("termos-termocinco52")}
            </Text>

            <Text style={styles.subjects}>{t("termos-termoseistitle")}</Text>
            <Text style={styles.content}>
            <Text style={styles.topico}>6.1</Text> {t("termos-termoseis61")}
              {"\n"}
              {"\n"}
              <Text style={styles.topico}>6.2</Text> {t("termos-termoseis62")}
            </Text>

            <Text style={styles.subjects}>{t("termos-termosetetitle")}</Text>
            <Text style={styles.contentfinal}>
            <Text style={styles.topico}>7.1</Text> {t("termos-termosete71")}
            </Text>

            <Text style={styles.disclaimer}>
              {t("termos-disclaimer")}{" "}
              <Text style={styles.destaque}>{t("termos-disclaimerdestaque")}</Text> {t("termos-disclaimercontinuacao")}
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
