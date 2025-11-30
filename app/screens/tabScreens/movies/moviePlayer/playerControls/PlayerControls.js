import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';

import VideoSkipBack from 'app/assets/images/palayerIcons/backward.png';
import VideoSkipForward from 'app/assets/images/palayerIcons/forward.png';
import VideoPause from 'app/assets/images/palayerIcons/pause.png';
import VideoPlay from 'app/assets/images/palayerIcons/playvid.png';
import { styles } from './style';

export const PlayerControls = ({
  playing,
  onPlay,
  onPause,
  skipForwards,
  skipBackwards,
}) => {
  return (
    <View style={styles.wrapper}>
      {skipBackwards && (
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.7}
          hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
          onPress={skipBackwards}
        >
          <Image source={VideoSkipBack} style={styles.icon} />
        </TouchableOpacity>
      )}

      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.7}
        hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
        onPress={playing ? onPause : onPlay}
      >
        <Image
          source={playing ? VideoPause : VideoPlay}
          style={[styles.icon, { width: 52, height: 52 }]}
        />
      </TouchableOpacity>

      {skipForwards && (
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.7}
          hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
          onPress={skipForwards}
        >
          <Image source={VideoSkipForward} style={styles.icon} />
        </TouchableOpacity>
      )}
    </View>
  );
};
