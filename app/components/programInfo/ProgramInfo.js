import { View, Text } from 'react-native';
import React from 'react';
import { styles } from './style';
import moment from 'moment';

const decodeBase64 = encoded => {
  try {
    return atob(encoded);
  } catch (e) {
    return 'Title';
  }
};

export function ProgramInfo({ item }) {
  const isNowPlaying = item.now_playing === 1;
  const startTime = moment(item.start).format('HH:mm');
  const hasArchive = item.has_archive;
  const dotColor = isNowPlaying
    ? '#FF0000'
    : hasArchive
    ? '#00FF00'
    : '#FFFFFF';
  return (
    <View style={styles.programItem}>
      <View style={styles.programLeft}>
        <View style={[styles.dot, { backgroundColor: dotColor }]} />
        <Text
          style={[styles.programTitle, isNowPlaying && styles.nowPlayinText]}
          numberOfLines={4}
        >
          {decodeBase64(item.title)}
        </Text>
      </View>
      <View style={styles.programRight}>
        <Text
          style={[styles.programTime, isNowPlaying && styles.nowPlayinText]}
        >
          {startTime}
        </Text>
      </View>
    </View>
  );
}
