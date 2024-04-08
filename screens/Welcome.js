import {View, Image, StyleSheet } from "react-native";
import React from "react";
import Button from "../components/Button";
import COLORS from "../constants/colors";
import { StatusBar } from 'expo-status-bar';


const Welcome = ( {navigation} ) => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/Welcome-bg.png")}
        style={styles.image}
        
      />
        <Button title="Vamos nessa!"
        onPress={()=> navigation.navigate("Singup")}
        style={{ width: "80%", top:150, backgroundColor: COLORS.white, fontWeight: '900'}} 
        />
      
        <StatusBar style="light" />
    </View>

);
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#007BFF',
  },
  image: {
    flex: 1,
    width: "100%",
    height: "100%",
    position: "absolute"
  },
});

export default Welcome;
