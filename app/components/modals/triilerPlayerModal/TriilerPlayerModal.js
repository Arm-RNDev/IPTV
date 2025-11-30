import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native';
import Modal from 'react-native-modal';
import { styles } from './style';
import closeIc from 'app/assets/images/Close.png';
import YoutubePlayer from 'react-native-youtube-iframe';
import { SafeAreaView } from 'react-native-safe-area-context';

export function TriilerPlayerModal({ visible, videoId, onClose }) {
  const playerRef = useRef();
  return (
    <Modal
      isVisible={visible}
      animationIn="slideInLeft"
      animationOut="slideOutLeft"
      onBackdropPress={onClose}
      style={styles.modal}
      statusBarTranslucent
    >
      <SafeAreaView style={[styles.modalContent]}>
        <TouchableOpacity onPress={onClose} style={styles.closeBtn}>
          <Image source={closeIc} style={styles.closeIcon} />
        </TouchableOpacity>
        <View style={styles.titleView}></View>
        <View style={{ width: '100%', backgroundColor: '#000' }}>
          <YoutubePlayer
            ref={playerRef}
            height={250}
            play={true}
            videoId={videoId}
          />
        </View>
      </SafeAreaView>
    </Modal>
  );
}
