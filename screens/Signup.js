import { View, Text, Image, Pressable, TextInput, TouchableOpacity, ScrollView, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from "react-native-safe-area-context";
import COLORS from '../constants/colors';
import { Ionicons } from "@expo/vector-icons";
import Checkbox from "expo-checkbox"
import Button from '../components/Button';
import { TextInputMask } from 'react-native-masked-text';
import { StatusBar } from 'expo-status-bar';
import { useTranslation } from "react-i18next";


const Signup = ({ navigation }) => {
    const [isPasswordShown, setIsPasswordShown] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    const [cpf, setCpf] = useState('')
    const [dataNascimento, setDataNascimento] = React.useState('');
    const { t } = useTranslation();
    
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
          <ScrollView>
            <View style={{ flex: 1, marginHorizontal: 22 }}>
                <View style={{ marginVertical: 22 }}>
                    <Text style={{
                        fontSize: 22,
                        fontWeight: 'bold',
                        marginVertical: 12,
                        color: COLORS.primary
                    }}>
                        {t("signup-title")}
                    </Text>

                    <Text style={{
                        fontSize: 16,
                        color: COLORS.black
                    }}>{t("signup-desc")}</Text>
                </View>

                {/* NOME COMPLETO */}
                <View style={{ marginBottom: 12 }}>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: 400,
                        marginVertical: 8
                    }}>{t("signup-nomecompleto")}</Text>

                    <View style={{
                        width: "100%",
                        height: 48,
                        borderColor: COLORS.primary,
                        borderWidth: 1,
                        borderRadius: 8,
                        alignItems: "center",
                        justifyContent: "center",
                        paddingLeft: 22
                    }}>
                        <TextInput
                            placeholder={t("signup-nomecompletoplaceholder")}
                            placeholderTextColor={COLORS.black}
                            keyboardType='default'
                            style={{
                                width: "100%"
                            }}
                        />
                    </View>
                </View>

                {/* NOME SOCIAL */}
                <View style={{ marginBottom: 12 }}>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: 400,
                        marginVertical: 8
                    }}>{t("signup-nomesocial")}</Text>

                    <View style={{
                        width: "100%",
                        height: 48,
                        borderColor: COLORS.primary,
                        borderWidth: 1,
                        borderRadius: 8,
                        alignItems: "center",
                        justifyContent: "center",
                        paddingLeft: 22
                    }}>
                        <TextInput
                            placeholder={t("signup-nomesocialplaceholder")}
                            placeholderTextColor={COLORS.black}
                            keyboardType='default'
                            style={{
                                width: "100%"
                            }}
                        />
                    </View>
                </View>

                {/* CPF */}
                <View style={{ marginBottom: 12 }}>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: 400,
                        marginVertical: 8
                    }}>{t("signup-cpf")}</Text>

                    <View style={{
                        width: "100%",
                        height: 48,
                        borderColor: COLORS.primary,
                        borderWidth: 1,
                        borderRadius: 8,
                        alignItems: "center",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        paddingLeft: 22
                    }}>

                        <TextInputMask 
                          style={{width: "80%"}}
                          placeholder={t("signup-cpfplaceholder")}
                          placeholderTextColor={COLORS.black}
                          type={'cpf'}
                          value={cpf}
                          onChangeText={text => setCpf(text)}
                        />
                    </View>
                </View>

                {/* DATA DE NASCIMENTO */}
                <View style={{ marginBottom: 12 }}>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: 400,
                        marginVertical: 8
                    }}>{t("signup-datanascimento")}</Text>

                    <View style={{
                        width: "100%",
                        height: 48,
                        borderColor: COLORS.primary,
                        borderWidth: 1,
                        borderRadius: 8,
                        alignItems: "center",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        paddingLeft: 22
                    }}>

                    <TextInputMask
                              style={{ width: '80%' }}
                              placeholder={t("signup-datanascimentoplaceholder")}
                              placeholderTextColor={COLORS.black}
                              keyboardType='numeric'
                              type={'datetime'}
                              options={{
                                format: 'DD/MM/YYYY'
                              }}
                              value={dataNascimento}
                              onChangeText={text => setDataNascimento(text)}
                            />
                    </View>
                </View>
                
                {/* EMAIL */}
                <View style={{ marginBottom: 12 }}>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: 400,
                        marginVertical: 8
                    }}>{t("signup-email")}</Text>

                    <View style={{
                        width: "100%",
                        height: 48,
                        borderColor: COLORS.primary,
                        borderWidth: 1,
                        borderRadius: 8,
                        alignItems: "center",
                        justifyContent: "center",
                        paddingLeft: 22
                    }}>
                        <TextInput
                            placeholder={t("signup-emailplaceholder")}
                            placeholderTextColor={COLORS.black}
                            keyboardType='email-address'
                            style={{
                                width: "100%"
                            }}
                        />
                    </View>
                </View>

                {/* SENHA */}
                <View style={{ marginBottom: 12 }}>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: 400,
                        marginVertical: 8
                    }}>{t("signup-senha")}</Text>

                    <View style={{
                        width: "100%",
                        height: 48,
                        borderColor: COLORS.primary,
                        borderWidth: 1,
                        borderRadius: 8,
                        alignItems: "center",
                        justifyContent: "center",
                        paddingLeft: 22
                    }}>
                        <TextInput
                            placeholder={t("signup-senhaplaceholder")}
                            placeholderTextColor={COLORS.black}
                            secureTextEntry={isPasswordShown}
                            style={{
                                width: "100%"
                            }}
                        />

                        <TouchableOpacity
                            onPress={() => setIsPasswordShown(!isPasswordShown)}
                            style={{
                                position: "absolute",
                                right: 12
                            }}
                        >
                            {
                                isPasswordShown == true ? (
                                    <Ionicons name="eye-off" size={24} color={COLORS.black} />
                                ) : (
                                    <Ionicons name="eye" size={24} color={COLORS.black} />
                                )
                            }

                        </TouchableOpacity>
                    </View>
                </View>
                {/* SENHA */}
                <View style={{ marginBottom: 12 }}>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: 400,
                        marginVertical: 8
                    }}>{t("signup-repitasenha")}</Text>

                    <View style={{
                        width: "100%",
                        height: 48,
                        borderColor: COLORS.primary,
                        borderWidth: 1,
                        borderRadius: 8,
                        alignItems: "center",
                        justifyContent: "center",
                        paddingLeft: 22
                    }}>
                        <TextInput
                            placeholder={t("signup-repitasenhaplaceholder")}
                            placeholderTextColor={COLORS.black}
                            secureTextEntry={isPasswordShown}
                            style={{
                                width: "100%"
                            }}
                        />

                        <TouchableOpacity
                            onPress={() => setIsPasswordShown(!isPasswordShown)}
                            style={{
                                position: "absolute",
                                right: 12
                            }}
                        >
                            {
                                isPasswordShown == true ? (
                                    <Ionicons name="eye-off" size={24} color={COLORS.black} />
                                ) : (
                                    <Ionicons name="eye" size={24} color={COLORS.black} />
                                )
                            }

                        </TouchableOpacity>
                    </View>
                </View>

                {/* TERMOS */}
                <View style={{
                    flexDirection: 'row',
                    marginVertical: 6
                }}>
                    <Checkbox
                        style={{ marginRight: 8, borderRadius:5 }}
                        value={isChecked}
                        onValueChange={setIsChecked}
                        color={isChecked ? COLORS.primary : undefined}
                    />
                    <Pressable
                        onPress={() => navigation.navigate("Termos")}
                    >
                    <Text>{t("signup-termos")}<Text style={{fontFamily: "Inter_700Bold", color: "#007BFF",}}>{t("signup-termosdestaque")}</Text></Text>
                    </Pressable>
                </View>

                {/* LOGIN */}
                <Button
                    title={t("signup-cadastrar")}
                    filled
                    style={{
                        marginTop: 18,
                        marginBottom: 4,
                    }}
                />
                {/* CADASTRO ALTERNATIVO */}
                <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 20 }}>
                    <View
                        style={{
                            flex: 1,
                            height: 1,
                            backgroundColor: COLORS.grey,
                            marginHorizontal: 10
                        }}
                    />
                    <Text style={{ fontSize: 14 }}>{t("signup-cadastroalternativo")}</Text>
                    <View
                        style={{
                            flex: 1,
                            height: 1,
                            backgroundColor: COLORS.grey,
                            marginHorizontal: 10
                        }}
                    />
                </View>

                {/* FACEBOOK & GOOGLE */}
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'center'
                }}>
                    <TouchableOpacity
                        onPress={() => console.log("Pressed")}
                        style={{
                            flex: 1,
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexDirection: 'row',
                            height: 52,
                            borderWidth: 1,
                            borderColor: COLORS.grey,
                            marginRight: 4,
                            borderRadius: 10
                        }}
                    >
                        <Image
                            source={require("../assets/facebook.png")}
                            style={{
                                height: 36,
                                width: 36,
                                marginRight: 8
                            }}
                            resizeMode='contain'
                        />

                        <Text>Facebook</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => console.log("Pressed")}
                        style={{
                            flex: 1,
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexDirection: 'row',
                            height: 52,
                            borderWidth: 1,
                            borderColor: COLORS.grey,
                            marginRight: 4,
                            borderRadius: 10
                        }}
                    >
                        <Image
                            source={require("../assets/google.png")}
                            style={{
                                height: 36,
                                width: 36,
                                marginRight: 8
                            }}
                            resizeMode='contain'
                        />

                        <Text>Google</Text>
                    </TouchableOpacity>
                </View>

                {/* JÁ TENHO UMA CONTA */}
                <View style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    marginVertical: 22
                }}>
                    <Text style={{ fontSize: 16, color: COLORS.black }}>{t("signup-possuiconta")}</Text>
                    <Pressable
                        onPress={() => navigation.navigate("Login")}
                    >
                        <Text style={{
                            fontSize: 16,
                            color: COLORS.primary,
                            fontWeight: "bold",
                            marginLeft: 6
                        }}>{t("signup-possuicontadestaque")}</Text>
                    </Pressable>
                </View>
            </View>
          </ScrollView>
          <StatusBar style="dark" />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 20,
  }
});

export default Signup