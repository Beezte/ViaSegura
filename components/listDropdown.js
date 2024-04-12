import React, { useState } from 'react';
import { View, Text, TextInput, Modal, FlatList, StyleSheet, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import { useTranslation } from 'react-i18next';
import COLORS from '../constants/colors';

const ListDropdown = ({ options, onSelect, placeholder }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const { t } = useTranslation();
  const [inputValue, setInputValue] = useState(t("home-denuncia-tipoplaceholder"));
  const dynamicStyles = {
    color: COLORS.whitew, // Defina os estilos dinâmicos desejados aqui
    fontFamily: 'Inter_300Light',
    fontSize: 14,
    // Outros estilos conforme necessário
  };
  const handleSelect = (item) => {
    onSelect(item);
    setInputValue(item.label);
    setShowDropdown(false);
  };

  const handleModalClose = () => {
    setShowDropdown(false);
  };

  return (
    <View>
      <TextInput
        style={[styles.input, dynamicStyles]}
        placeholder={inputValue || placeholder}
        value={inputValue}
        onTouchStart={() => setShowDropdown(true)}
        editable={false}
      />
      <Modal
        visible={showDropdown}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setShowDropdown(false)}>
        <TouchableWithoutFeedback onPress={handleModalClose}>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <FlatList
                data={options}
                renderItem={({ item }) => (
                  <TouchableOpacity style={styles.option} onPress={() => handleSelect(item)}>
                    <Text style={styles.optionText}>
                      {item.label}
                    </Text>
                  </TouchableOpacity>
                )}
                keyExtractor={item => item.value.toString()}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: COLORS.primary,
    backgroundColor: COLORS.primary,
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: COLORS.primary,
    padding: 20,
    borderRadius: 10,
    maxHeight: 250,
    width: '90%',
  },
  option: {
    color: COLORS.whitew,
    marginVertical: 5,
    padding: 10,
    margin: 5,
    borderColor: "#043366",
    backgroundColor: COLORS.darkblue,
    borderWidth: 8,
    borderRadius: 10,
  },
  optionText: {
    color: COLORS.whitew,
  }
});

export default ListDropdown;
