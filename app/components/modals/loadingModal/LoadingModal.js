import React from 'react';
import { ActivityIndicator } from 'react-native';
import Modal from 'react-native-modal';
import { styles } from './style';

export function LoadingModal({ visible }) {
  return (
    <Modal
      isVisible={visible}
      animationIn="slideInLeft"
      animationOut="slideOutLeft"
      style={[styles.modal]}
    >
      <ActivityIndicator size={'large'} color={'#2ABEC0'} />
    </Modal>
  );
}
