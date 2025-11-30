import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { styles } from './style';
import FastImage from 'react-native-fast-image';

export function MovieItem({ title, picture, onPress,formatText }) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      {picture && (
        <FastImage
          source={{ uri: picture, priority: FastImage.priority.low }}
          style={styles.picture}
          resizeMode={FastImage.resizeMode.contain}
        />
      )}
      <Text style={styles.nameText}>{title}</Text>
    </TouchableOpacity>
  );
}
