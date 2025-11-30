import { View, Text } from 'react-native';
import React from 'react';
import star from 'app/assets/images/star.png';
import { Rating } from '@kolking/react-native-rating';
import { styles } from './style';

export function ItemRetings({ rating }) {
  return (
    <View
      style={styles.container}
    >
      <Rating size={20} maxRating={5} rating={rating || 0} disabled={true} />
    </View>
  );
}
