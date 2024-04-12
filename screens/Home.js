import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, ScrollView, Platform, TextInput, Button,TouchableOpacity, Modal } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import COLORS from '../constants/colors';
import { useTranslation } from 'react-i18next';
import ListDropdown from '../components/listDropdown';
import ModalImage from '../components/modalImage';
import { TextInputMask } from 'react-native-masked-text';
import Buttonn from '../components/Button';
import * as ImagePicker from 'expo-image-picker';
import { Feather, FontAwesome, FontAwesome6 } from '@expo/vector-icons';

const Home = () => {
  const { t } = useTranslation();
  const options = [
    { label: t("home-denuncia-motivos-1"), value: 1 },
    { label: t("home-denuncia-motivos-2"), value: 2 },
    { label: t("home-denuncia-motivos-3"), value: 3 },
    { label: t("home-denuncia-motivos-4"), value: 4 },
    { label: t("home-denuncia-motivos-5"), value: 5 },
    { label: t("home-denuncia-motivos-6"), value: 6 },
    { label: t("home-denuncia-motivos-7"), value: 7 },
    { label: t("home-denuncia-motivos-8"), value: 8 },
    { label: t("home-denuncia-motivos-9"), value: 9 }
  ];

  const [selectedOption, setSelectedOption] = useState(null);
  const handleSelect = (option) => {
    setSelectedOption(option);
  };

  const [text, setText] = useState('');
  const [dataNascimento, setDataNascimento] = React.useState('');
  const [images, setImages] = useState([]);
  const [showButton2, setShowButton2] = useState(false);


  const pickImages = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: false,
      aspect: [4, 3],
      quality: 1,
      multiple: true, // Permitir seleção de múltiplas imagens
    });

    console.log(result);

    if (!result.cancelled) {
      setImages([...images, ...result.assets.map(asset => asset.uri)]);
      setShowButton2(true);
    };
  };
  const removeImage = (index) => {
    const newImages = [...images];
    newImages.splice(index, 1);
    setImages(newImages);
    setShowButton2(newImages.length >= 1);
  };

  const showButton = images.length === 0; // Verifica se não há imagens adicionadas
  
  // MODAL DO PREVIEW DAS IMAGENS
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (imageUri) => {
    setSelectedImage(imageUri);
    setModalVisible(true);
  };
  
  const closeModal = () => {
    setSelectedImage(null);
    setModalVisible(false);
  };


  return (
    <View style={styles.container}>
      
      {/* <View style={styles.gradientBottom} /> */}
      
      <SafeAreaView edges={["top"]} style={styles.topBar} />
      <ScrollView contentContainerStyle={styles.scrollViewContent}>

        <View style={styles.content}>
          {/* HEADER VIEW */}
          <View style={{backgroundColor: COLORS.whitew}}>

            {/* HEADER IMAGE */}
            <View style={styles.headerView}>
              <Image
                source={require("../assets/viaLogo.png")}
                style={{ width: 120, height: 120, margin: 5 }}
                resizeMode="contain"
              />
            </View>

            {/* TITULO PAGINA */}
            <View>
              <Text style={{fontFamily: 'Inter_700Bold', fontSize: 24, marginLeft: 15, marginTop: 30}}>{t("home-title")}</Text>
              <Text style={{fontFamily: 'Inter_300Light', fontSize: 12, marginLeft: 15, marginRight: 15, marginTop: 5, marginBottom: 30, textAlign: "justify"}}>{t("home-desc")}</Text>
            </View>
          </View>

          <View style={styles.denunciacontainer}>
            <View style={styles.denunciabg}>

              {/* TIPO DE DENÚNCIA */}
              <Text style={styles.denuncialabel}>{t("home-denuncia-tipo")}</Text>
              <ListDropdown
                options={options}
                onSelect={handleSelect}
              />

              {/* TEXTO DA DENÚNCIA */}
              <View>
                <Text style={styles.denuncialabel}>{t("home-denuncia-descrevaocorrido")}</Text>
                <TextInput
                  style={styles.textArea}
                  multiline={true}
                  numberOfLines={4}
                  value={text}
                  onChangeText={setText}
                  borderColor= {COLORS.primary}
                  borderRadius={10}
                  borderWidth={1.1}
                  placeholder={t("home-denuncia-descrevaocorridoplaceholder")}
                  placeholderTextColor={COLORS.darkblue}
                />
              </View>

              {/* LOCAL DA DENÚNCIA */}
              <View>
                <Text style={styles.denuncialabel}>{t("home-denuncia-local")}</Text>
                <View style={{
                  width: "100%",
                  height: 48,
                  borderColor: COLORS.primary,
                  borderWidth: 1,
                  borderRadius: 8,
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 20
                }}>
                  <TextInput
                    placeholder={t("home-denuncia-localplaceholder")}
                    placeholderTextColor={COLORS.darkblue}
                    keyboardType='ascii-capable'
                    style={{ 
                        width: "100%",
                        color: COLORS.darkblue,
                        fontFamily: 'Inter_300Light',
                        padding: 10
                    }}
                  />
                </View>
              </View>

              {/* DATA DA DENÚNCIA */}
              <View>
                <Text style={styles.denuncialabel}>{t("home-denuncia-data")}</Text>
                <View style={{
                  width: "100%",
                  height: 48,
                  borderColor: COLORS.primary,
                  borderWidth: 1,
                  borderRadius: 8,
                  alignItems: "center",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  paddingLeft: 10,
                  marginBottom: 20
                }}>
                  <TextInputMask
                    style={{ width: '80%', fontFamily: 'Inter_300Light'}}
                    placeholder={t("home-denuncia-dataplaceholder")}
                    placeholderTextColor={COLORS.darkblue}
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

            { /* PROVAS DO OCORRIDO */}
              <View>
                <Text style={styles.denuncialabel}>{t("home-denuncia-provas")}</Text>
                <View style={styles.denunciaprovascontainer}>
                    {showButton && (
                    <TouchableOpacity style={styles.btnprova} onPress={pickImages}>
                      <Feather name="image" size={80} color={COLORS.primary} style={{paddingTop: 20}}/>
                      <Text style={{ fontFamily: 'Inter_400Regular', color: COLORS.primary, fontSize: 14 }}>{t("home-denuncia-provadesc")}</Text>
                    </TouchableOpacity>
                    )}

                    <ScrollView contentContainerStyle={styles.imageContainer}>
                      {showButton2 && (
                        <TouchableOpacity style={styles.btnprova}>
                          <TouchableOpacity
                            style={styles.buttonadicionarimagem} onPress={pickImages}>
                            <Text style={styles.buttonadicionarimagemText}>
                              {t("home-denuncia-provamaisimagem")}
                            </Text>
                          </TouchableOpacity>
                        </TouchableOpacity>
                      )}

                      {images.map((imageUri, index) => (
                        <View key={index} style={styles.imageWrapper}>
                            <Image source={{ uri: imageUri }} style={styles.image} />
                            <View style={styles.actionscontainer}>

                              <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }} onPress={() => removeImage(index)}>
                                <FontAwesome name="trash-o" size={24} color={COLORS.softred} />
                                <Text style={{fontFamily: 'Inter_300Light', marginLeft: 5, color: COLORS.softred}}>Deletar</Text>
                              </TouchableOpacity>

                              <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }} onPress={() => { setModalVisible(true); setSelectedImage(imageUri); }}>
                                <FontAwesome6 name="expand" size={24} color={COLORS.darkgray} />
                                <Text style={{fontFamily: 'Inter_300Light', marginLeft: 5, color: COLORS.darkgray}}>Ver imagem</Text>
                                <ModalImage
                                  isVisible={modalVisible}
                                  imageUri={selectedImage}
                                  onClose={() => setModalVisible(false)}
                                />
                              </TouchableOpacity>

                            </View>
                        </View>
                        ))}
                    </ScrollView>
                </View>
              </View>
            
            {/* BOTÃO DE ENVIAR DENUNCIA */}
              <View>
              <Buttonn
                    title={t("home-denuncia-enviar")}
                    filled
                    style={{
                        marginTop: 18,
                        marginBottom: 4,
                    }}
                    onPress={() => console.log("Pressed")}
                />
              </View>

            </View>
          </View>

          <View style={styles.denuciahistoricocontainer}>
            {/* HEADER VIEW */}
            <View>
              <View style={{justifyContent: 'center', alignItems: 'center',}}>
                <Text style={{fontFamily: 'Inter_700Bold', fontSize: 24, marginLeft: 15, marginTop: 50}}>{t("home-denuncia-historico-title")}</Text>
                <Text style={{fontFamily: 'Inter_300Light', fontSize: 12, marginLeft: 15, marginRight: 15, marginTop: 5, marginBottom: 30, textAlign: "justify"}}>{t("home-denuncia-historico-desc")}</Text>
              </View>

              {/* HISTORICO DENUNCIAS */}
              <View>
                <View style={{flexDirection: 'column', alignItems: 'center'}}>

                  <View style={styles.denunciahistoricobg}>
                    <View style={styles.denunciahistoricocontent}>

                      <Text style={styles.denunciahistoricocontentText}>{t("home-denuncia-historico-motivo")}
                      <Text style={styles.denunciahistoricocontenttextResposta}>Ultrapassagem</Text>
                      </Text>

                      <Text style={styles.denunciahistoricocontentText}>{t("home-denuncia-historico-acusado")}
                      <Text style={styles.denunciahistoricocontenttextResposta}>Pedro Lins da Silva</Text>
                      </Text>

                      <Text style={styles.denunciahistoricocontentText}>{t("home-denuncia-historico-status")}
                      <Text style={styles.denunciahistoricocontenttextResposta}>
                        <FontAwesome name="circle" size={12} color={COLORS.softred} style={styles.denunciahistoricocontenttextStatus} />
                      </Text>
                      </Text>
                    </View>
                  </View>

                  <View style={styles.denunciahistoricobg}>
                    <View style={styles.denunciahistoricocontent}>

                      <Text style={styles.denunciahistoricocontentText}>{t("home-denuncia-historico-motivo")}
                      <Text style={styles.denunciahistoricocontenttextResposta}>Ultrapassagem</Text>
                      </Text>

                      <Text style={styles.denunciahistoricocontentText}>{t("home-denuncia-historico-acusado")}
                      <Text style={styles.denunciahistoricocontenttextResposta}>Pedro Lins da Silva</Text>
                      </Text>

                      <Text style={styles.denunciahistoricocontentText}>{t("home-denuncia-historico-status")}
                      <Text style={styles.denunciahistoricocontenttextResposta}>
                        <FontAwesome name="circle" size={12} color={COLORS.softgreen} style={styles.denunciahistoricocontenttextStatus} />
                      </Text>
                      </Text>
                    </View>
                  </View>

                  <View style={styles.denunciahistoricobg}>
                    <View style={styles.denunciahistoricocontent}>

                      <Text style={styles.denunciahistoricocontentText}>{t("home-denuncia-historico-motivo")}
                      <Text style={styles.denunciahistoricocontenttextResposta}>Ultrapassagem</Text>
                      </Text>

                      <Text style={styles.denunciahistoricocontentText}>{t("home-denuncia-historico-acusado")}
                      <Text style={styles.denunciahistoricocontenttextResposta}>Pedro Lins da Silva</Text>
                      </Text>

                      <Text style={styles.denunciahistoricocontentText}>{t("home-denuncia-historico-status")}
                      <Text style={styles.denunciahistoricocontenttextResposta}>
                        <FontAwesome name="circle" size={12} color={COLORS.gold} style={styles.denunciahistoricocontenttextStatus} />
                      </Text>
                      </Text>
                    </View>
                  </View>

                  <View style={styles.denunciahistoricobg}>
                    <View style={styles.denunciahistoricocontent}>

                      <Text style={styles.denunciahistoricocontentText}>{t("home-denuncia-historico-motivo")}
                      <Text style={styles.denunciahistoricocontenttextResposta}>Ultrapassagem</Text>
                      </Text>

                      <Text style={styles.denunciahistoricocontentText}>{t("home-denuncia-historico-acusado")}
                      <Text style={styles.denunciahistoricocontenttextResposta}>Pedro Lins da Silva</Text>
                      </Text>

                      <Text style={styles.denunciahistoricocontentText}>{t("home-denuncia-historico-status")}
                      <Text style={styles.denunciahistoricocontenttextResposta}>
                        <FontAwesome name="circle" size={12} color={COLORS.softgreen} style={styles.denunciahistoricocontenttextStatus} />
                      </Text>
                      </Text>
                    </View>
                  </View>

                  <View style={styles.denunciahistoricobg}>
                    <View style={styles.denunciahistoricocontent}>

                      <Text style={styles.denunciahistoricocontentText}>{t("home-denuncia-historico-motivo")}
                      <Text style={styles.denunciahistoricocontenttextResposta}>Ultrapassagem</Text>
                      </Text>

                      <Text style={styles.denunciahistoricocontentText}>{t("home-denuncia-historico-acusado")}
                      <Text style={styles.denunciahistoricocontenttextResposta}>Pedro Lins da Silva</Text>
                      </Text>

                      <Text style={styles.denunciahistoricocontentText}>{t("home-denuncia-historico-status")}
                      <Text style={styles.denunciahistoricocontenttextResposta}>
                        <FontAwesome name="circle" size={12} color={COLORS.softgreen} style={styles.denunciahistoricocontenttextStatus} />
                      </Text>
                      </Text>
                    </View>
                  </View>

                  <View style={styles.denunciahistoricobg}>
                    <View style={styles.denunciahistoricocontent}>

                      <Text style={styles.denunciahistoricocontentText}>{t("home-denuncia-historico-motivo")}
                      <Text style={styles.denunciahistoricocontenttextResposta}>Ultrapassagem</Text>
                      </Text>

                      <Text style={styles.denunciahistoricocontentText}>{t("home-denuncia-historico-acusado")}
                      <Text style={styles.denunciahistoricocontenttextResposta}>Pedro Lins da Silva</Text>
                      </Text>

                      <Text style={styles.denunciahistoricocontentText}>{t("home-denuncia-historico-status")}
                      <Text style={styles.denunciahistoricocontenttextResposta}>
                        <FontAwesome name="circle" size={12} color={COLORS.gold} style={styles.denunciahistoricocontenttextStatus} />
                      </Text>
                      </Text>
                    </View>
                  </View>

                  <View style={styles.denunciahistoricobg}>
                    <View style={styles.denunciahistoricocontent}>

                      <Text style={styles.denunciahistoricocontentText}>{t("home-denuncia-historico-motivo")}
                      <Text style={styles.denunciahistoricocontenttextResposta}>Ultrapassagem</Text>
                      </Text>

                      <Text style={styles.denunciahistoricocontentText}>{t("home-denuncia-historico-acusado")}
                      <Text style={styles.denunciahistoricocontenttextResposta}>Pedro Lins da Silva</Text>
                      </Text>

                      <Text style={styles.denunciahistoricocontentText}>{t("home-denuncia-historico-status")}
                      <Text style={styles.denunciahistoricocontenttextResposta}>
                        <FontAwesome name="circle" size={12} color={COLORS.softred} style={styles.denunciahistoricocontenttextStatus} />
                      </Text>
                      </Text>
                    </View>
                  </View>


                </View>
              </View>

            </View>
          </View>

        </View>

      </ScrollView>
      <SafeAreaView edges={["bottom"]} style={styles.bottomBar} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.whitew
  },
  topBar: {
    flex: 0,
    backgroundColor: COLORS.primary,
  },
  gradientBottom: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 660,
    backgroundColor: COLORS.whitew, // Cor de fundo inferior
  },
  content: {
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  bottomBar: {
    flex: 0,
    backgroundColor: "#fff",
  },
  headerView: {
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    justifyContent: 'center'
  },
  denunciacontainer: {
    backgroundColor: COLORS.whitew,
    justifyContent: 'center',
    alignItems: 'center',
  },
  denunciabg: {
    padding: 25,
    backgroundColor: COLORS.whitew,
    borderRadius: 10,
    width: 400,
    height: 'auto',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  textArea: {
    color: COLORS.darkblue,
    fontFamily: 'Inter_300Light',
    paddingTop: 10,
    paddingHorizontal: 10,
    minHeight: 110,
    marginBottom: 20,
  },
  denuncialabel: {
    fontFamily: 'Inter_300Light',
    marginBottom: 10,
  },
  denunciaprovascontainer: {
    // alignItems: "center",
    // justifyContent: "center",
    borderWidth: 1,
    borderColor: COLORS.primary,
    borderRadius: 10,
    padding: 10,
    height: 'auto'
  },
  btnprova: {
    alignSelf: 'center',
    paddingBottom: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonadicionarimagem: {
    backgroundColor: COLORS.primary,
    paddingHorizontal: 50,
    paddingVertical: 10,
    borderRadius: 10,
    fontFamily: 'Inter_300Light',
  },

  buttonadicionarimagemText: {
    color: COLORS.whitew,
    fontFamily: 'Inter_300Light',
  },


  imageContainer: {
    alignItems: 'center',
    marginTop: 15,
  },
  actionscontainer: {
    // flexDirection: 'row',
    // alignItems: 'center',
    gap: 10
  },
  imageWrapper: {
    backgroundColor: COLORS.whitew,
    paddingHorizontal: 10,
    paddingVertical: 10,
    width: "95%",
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.15,
        shadowRadius: 3.84,
      },
      android: {
        elevation: 5,
      },
    }),
    
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 5,
    marginRight: 20,
    marginLeft: 5
  },
  removeButton: {
    marginLeft: 'auto',
  },
  denuciahistoricocontainer:{
    backgroundColor: COLORS.whitew,
    marginTop: 10
  },
  denunciahistoricobg: {
    backgroundColor: COLORS.primary,
    paddingVertical: 20,
    width: "90%",
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.15,
        shadowRadius: 3.84,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  denunciahistoricocontent: {
    flexDirection: 'row',
    gap: 7,
  },
  denunciahistoricocontentText: {
    fontFamily: 'Inter_700Bold',
    color: COLORS.whitew,
    fontSize: 10,
  },
  denunciahistoricocontenttextResposta: {
    fontFamily: 'Inter_300Light',
    color: COLORS.whitew,
    fontSize: 10,
  },
  denunciahistoricocontenttextStatus: {
    fontFamily: 'Inter_300Light',
    fontSize: 10,
  },
});

export default Home;