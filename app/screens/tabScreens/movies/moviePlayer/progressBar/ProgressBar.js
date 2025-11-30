import React, { useCallback } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  useWindowDimensions,
} from 'react-native';
import Slider from '@react-native-community/slider';
import { myFonts } from 'app/constants';
import { SeasonsEpisodes } from 'app/components';
import voulumeIcon from 'app/assets/images/palayerIcons/volume.png';
import audioIcon from 'app/assets/images/palayerIcons/audio.png';
import ccIcon from 'app/assets/images/palayerIcons/cc.png';
import resolutionIcon from 'app/assets/images/palayerIcons/resolution.png';
import egpIcon from 'app/assets/images/palayerIcons/egp.png';
import hcIcon from 'app/assets/images/palayerIcons/hc.png';
import { styles } from './style';

export const ProgressBar = React.memo(
  ({
    currentTime,
    duration,
    onSlideStart,
    onSlideComplete,
    onSlideCapture,
    fullscreen,
    onAudioPress,
    onResolutionPress,
    streamType,
    onChannelPres,
    onEgpPress,
    egpData,
    children,onVolumeChange
  }) => {
    const { width, height } = useWindowDimensions();
    const isLandscape = width > height;
    const formatTime = useCallback(time => {
      const hours = Math.floor(time / 3600);
      const minutes = Math.floor((time % 3600) / 60);
      const seconds = Math.floor(time % 60);
      return `${hours.toString().padStart(2, '0')}:${minutes
        .toString()
        .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }, []);

    const handleOnSlide = time => {
      onSlideCapture({ seekTime: time });
    };

    return (
      <View style={fullscreen ? styles.fullscreenWrapper : styles.wrapper}>
        <View style={styles.timeWrapper}>
          <Text
            style={[isLandscape ? styles.timeTextLandscape : styles.timeText]}
          >
            {formatTime(currentTime)}
          </Text>
          <Slider
            value={currentTime}
            minimumValue={0}
            maximumValue={duration}
            step={1}
            onValueChange={handleOnSlide}
            onSlidingStart={onSlideStart}
            onSlidingComplete={onSlideComplete}
            minimumTrackTintColor="#29BEBF"
            maximumTrackTintColor="#575757"
            thumbTintColor="#29BEBF"
            style={isLandscape ? { width: '70%' } : { width: '50%' }}
          />
          <Text style={styles.timeText}>{formatTime(duration)}</Text>
        </View>
        <View style={styles.btnView}>
          {/* {streamType && (
            <TouchableOpacity style={styles.iconView}>
              <Image source={voulumeIcon} style={styles.icon} />
              <Text style={styles.iconText}>Sound</Text>
            </TouchableOpacity>
          )} */}
          {streamType && (
            <TouchableOpacity style={styles.iconView} onPress={onAudioPress}>
              <Image source={audioIcon} style={styles.icon} />
              <Text style={styles.iconText}>Audio</Text>
            </TouchableOpacity>
          )}
          {streamType && (
            <TouchableOpacity style={styles.iconView}>
              <Image source={ccIcon} style={styles.icon} />
              <Text style={styles.iconText}>Subtitles</Text>
            </TouchableOpacity>
          )}
          {streamType && (
            <TouchableOpacity
            style={styles.iconView}
            onPress={onResolutionPress}
            >
              <Image source={resolutionIcon} style={styles.icon} />
              <Text style={styles.iconText}>Resolutions</Text>
            </TouchableOpacity>
          )}
          {!streamType && egpData && (
            <TouchableOpacity style={styles.iconView} onPress={onEgpPress}>
              <Image source={egpIcon} style={styles.icon} />
              <Text style={styles.iconText}>Program Guide</Text>
            </TouchableOpacity>
          )}
          {!streamType && (
            <TouchableOpacity style={styles.iconView} onPress={onChannelPres}>
              <Image source={hcIcon} style={styles.icon} />
              <Text style={styles.iconText}>Channels</Text>
            </TouchableOpacity>
          )}
        </View>
         {children}
      </View>
    );
  },
);
