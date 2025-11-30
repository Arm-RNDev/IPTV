import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { styles } from './style';

export function BorderButton({
  onPress,
  title,
  noBg,
  isActive,
  img,
  customStyle,
  textStyle,
}) {
  return (
    <View style={[{ width: '100%' }, customStyle]}>
      <TouchableOpacity
        disabled={isActive}
        onPress={onPress}
        style={[
          styles.container,
          noBg && { backgroundColor: 'transparent' },
          isActive && { backgroundColor: '#C8C8C8' },
        ]}
      >
        {img && <Image source={img} style={styles.icon} />}
        <Text style={[styles.title, noBg && { color: '#212121' }, textStyle]}>
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
