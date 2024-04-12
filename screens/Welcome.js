import {View, Image, StyleSheet, Text, Modal, FlatList, TouchableOpacity, SafeAreaView } from "react-native";
import React, { useState } from "react";
import Button from "../components/Button";
import COLORS from "../constants/colors";
import { StatusBar } from 'expo-status-bar';
import i18next, { languageResources } from '../services/i18next'
import { useTranslation } from "react-i18next";
import { FontAwesome, MaterialIcons  } from '@expo/vector-icons';
import languageList from '../services/languagesList.json'
import { changeLanguage } from "i18next";


const Welcome = ({ navigation }) => {
  const [visible, setVisible] = useState(false);
  const { t } = useTranslation();
  const changeLng = pt => {
    i18next.changeLanguage(pt);
    setVisible(false);
  };


  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/Welcome-bg.png")}
        style={styles.image}
      />
      
      <TouchableOpacity style={styles.btnlang} onPress={() => setVisible(true)}>
        <MaterialIcons name="language" size={24} color="white" />
      </TouchableOpacity>

      <Text style={{ marginHorizontal:20, marginTop:100, marginBottom:15, fontFamily: "Inter_200ExtraLight", color: COLORS.white, fontSize: 20 }}>
        {t("welcome-slogan")}
        <Text style={{ fontFamily: "Inter_900Black", color: COLORS.white, fontSize: 20 }}>
          {t("welcome-slogandestaque")}
          </Text>
        </Text>

      <Text style={{ marginHorizontal:20, fontFamily: "Inter_200ExtraLight", color: COLORS.white, fontSize: 20 }}>
        {t("welcome-subslogan")}
        <Text style={{fontFamily: "Inter_900Black" , color: COLORS.white, fontSize: 20 }}>
          {t("welcome-subslogandestaque")}
          </Text>
        </Text>

      <Button
        title={t("welcome-continuarbtn")}
        onPress={() => navigation.navigate("Signup")}
        style={styles.button}
      />

      <Text style={{ fontFamily: 'Inter_300Light', color: COLORS.white, marginTop: 20, textAlign: "center" }}>{t("welcome-jatenhoconta")}</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
      <Text style={{ fontFamily: 'Inter_700Bold', color: COLORS.white, textAlign: "center", marginTop: 5, fontSize: 16 }}>{t("welcome-jatenhocontalogin")}</Text>
      </TouchableOpacity>
      
        <Modal visible={visible} onRequestClose={() => setVisible(false)}>
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.primary }}>
          <View style={styles.languagesList}>
            <Text style={{fontFamily: "Inter_400Regular", color: COLORS.white, fontSize: 20, alignSelf: 'center', marginTop: 20 }}>{t("lang-header")}</Text>
            <Text style={{fontFamily: "Inter_200ExtraLight", color: COLORS.white, fontSize: 16, alignSelf: 'center', marginBottom: 20,marginTop: 15, marginHorizontal: 10 }}>{t("lang-desc")}</Text>
            <FlatList data={Object.keys(languageResources)} renderItem={({item}) =>
            <TouchableOpacity style={styles.languageButton} onPress={() => changeLng(item)}>
              <Text style={styles.languageName}>
                {languageList[item].nativeName}
              </Text>
            </TouchableOpacity>}/>
          </View>
          </SafeAreaView>
        </Modal>
      <StatusBar style="light" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: COLORS.primary,
  },
  image: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  btnlang: {
    // backgroundColor: COLORS.primary,
    paddingHorizontal: 25,
    paddingVertical: 15,
    borderRadius: 15,
    position: "absolute",
    top: 60,
    right: 20,
  },
  button: {
    width: "80%",
    backgroundColor: COLORS.white,
    fontWeight: '900',
    alignSelf: "center",
    marginTop: 100,
  },
  languagesList: {
    flex: 1,
    justifyContent: "center",
    padding: 10,
    backgroundColor: COLORS.primary
  },
  languageButton: {
    padding: 10,
    margin: 5,
    borderColor: "#043366",
    backgroundColor: COLORS.darkblue,
    borderWidth: 5,
    borderRadius: 10,
  },
  languageName: {
    fontFamily: "Inter_300Light",
    fontSize: 16,
    color: COLORS.white,
  },
});

export default Welcome;
