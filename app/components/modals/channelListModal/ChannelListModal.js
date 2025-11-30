import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StatusBar,
  FlatList,
} from 'react-native';
import Modal from 'react-native-modal';
import { styles } from './style';
import closeIc from 'app/assets/images/Close.png';
import {
  SafeAreaView,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import { LiveStreamItem } from 'app/components/liveStreamItem';

export function ChannelListModal({ visible, onPress, onClose, data }) {
  const insets = useSafeAreaInsets();

  return (
    <Modal
      isVisible={visible}
      animationIn="slideInLeft"
      animationOut="slideOutLeft"
      onBackdropPress={onClose}
      style={styles.modal}
      statusBarTranslucent
    >
      <View style={[styles.modalContent, { paddingTop: insets.top }]}>
        <View style={styles.titleView}>
          <TouchableOpacity onPress={onClose} style={styles.closeBtn}>
            <Image source={closeIc} style={styles.closeIcon} />
          </TouchableOpacity>
          <Text style={styles.title}>TV Channels</Text>
        </View>
        <FlatList
          data={data}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => item.stream_id.toString()}
          renderItem={({ item }) => (
            <LiveStreamItem
              picture={item?.stream_icon}
              title={item?.name}
              onPress={() => onPress(item, data)}
              egp={item.epg_channel_id}
            />
          )}
          contentContainerStyle={styles.gridContainer}
        />
      </View>
    </Modal>
  );
}
