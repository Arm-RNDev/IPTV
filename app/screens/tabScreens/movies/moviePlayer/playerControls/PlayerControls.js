import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';

import VideoSkipBack from 'app/assets/images/palayerIcons/backward.png';
import VideoSkipForward from 'app/assets/images/palayerIcons/forward.png';
import VideoPause from 'app/assets/images/palayerIcons/pause.png';
import VideoPlay from 'app/assets/images/palayerIcons/playvid.png';
import Next from 'app/assets/images/palayerIcons/next.png';
import Prev from 'app/assets/images/palayerIcons/prev.png';

import { styles } from './style';

export const PlayerControls = ({
  playing,
  onPlay,
  onPause,
  skipForwards,
  skipBackwards,
  isTv,
  onNext,
  onPrev,
}) => {
  return (
    <View style={styles.wrapper}>
      {!isTv && skipBackwards && (
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.7}
          hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
          onPress={skipBackwards}
        >
          <Image source={VideoSkipBack} style={styles.icon} />
        </TouchableOpacity>
      )}
      {isTv && (
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.7}
          hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
          onPress={onPrev}
        >
          <Image source={Prev} style={styles.icon} />
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

      {!isTv && skipForwards && (
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.7}
          hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
          onPress={skipForwards}
        >
          <Image source={VideoSkipForward} style={styles.icon} />
        </TouchableOpacity>
      )}
      {isTv && (
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.7}
          hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
          onPress={onNext}
        >
          <Image source={Next} style={styles.icon} />
        </TouchableOpacity>
      )}
    </View>
  );
};
