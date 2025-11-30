import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StatusBar } from 'react-native';
import Modal from 'react-native-modal';
import { styles } from './style';
import closeIc from 'app/assets/images/Close.png';
import checkIc from 'app/assets/images/done.png';
import { 
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

export function ListModal({ visible, onPress, onClose, data, title }) {
  const insets = useSafeAreaInsets();

  return (
    <Modal
      isVisible={visible}
      animationIn="slideInLeft"
      animationOut="slideOutLeft"
      onBackdropPress={onClose}
      style={[styles.modal]}
    >
      <View style={[styles.modalContent, { paddingTop: insets.top }]}>
        <View style={styles.titleView}>
          <Text style={styles.title}>{title}</Text>
          <TouchableOpacity onPress={onClose} style={styles.closeBtn}>
            <Image source={closeIc} style={styles.closeIcon} />
          </TouchableOpacity>
        </View>
        {data.map((it, ind) => (
          <TouchableOpacity
            key={it.id}
            onPress={() => onPress(it)}
            style={styles.langButton}
          >
            <View style={styles.checkView}>
              {ind === 0 && <Image source={checkIc} style={styles.checkIc} />}
            </View>

            <Text style={styles.langText}>{it?.type}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </Modal>
  );
}
