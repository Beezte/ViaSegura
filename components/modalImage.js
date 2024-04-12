import React from 'react';
import { Modal, View, Image, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import COLORS from '../constants/colors';
import { useTranslation } from 'react-i18next';


const modalImage = ({ isVisible, imageUri, onClose }) => {
    const { t } = useTranslation();

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
            <Text style={{fontFamily: 'Inter_500Medium', color: COLORS.primary, marginBottom: 20, alignSelf: 'center', fontSize: 20}}>{t("home-denuncia-modalpreview-title")}</Text>
            <Image source={{ uri: imageUri }} style={styles.image} />
            <TouchableOpacity style={styles.closeButton} onPress={onClose}>
                <View style={styles.closeButtonContent}>
                    {/* <AntDesign name="close" size={16} color={COLORS.white}/>  */}
                    <Text style={styles.closeButtonText}>{t("home-denuncia-modalpreview-fechar")}</Text>
                </View>
            </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // fundo escuro transparente
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
  },
  image: {
    width: 320,
    height: 320,
    borderRadius: 5,
    resizeMode: 'cover',
    marginBottom: 10,
  },
  closeButton: {
    alignSelf: 'center', // Alinha o botão à direita
    marginLeft: 10,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginTop: 10,
    marginBottom: 20,
    backgroundColor: COLORS.softred,
    borderRadius: 15,
  },
  closeButtonContent: {
    flexDirection: 'row', // Coloca o ícone e o texto na mesma linha
    alignItems: 'center', // Alinha os itens verticalmente no centro
  },
  closeButtonText:{
    color: COLORS.whitew,
  },
});

export default modalImage;
