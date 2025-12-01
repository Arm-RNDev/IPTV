import React, { useState, useRef, useEffect, useCallback } from 'react';
import {
  View,
  Pressable,
  useWindowDimensions,
  StatusBar,
  Image,
  TouchableOpacity,
  Text,
} from 'react-native';
import Video from 'react-native-video';
import { styles } from './style';
import {
  ChannelListModal,
  EgpListModal,
  ListModal,
  SeasonsEpisodes,
} from 'app/components';
import close from 'app/assets/images/Close.png';
import axiosInstance from 'app/networking/axiosInstance';
import { useSelector } from 'react-redux';
import moment from 'moment';
import { PlayerControls } from './playerControls';
import { ProgressBar } from './progressBar';
import Toast from 'react-native-toast-message';

export function MoviePlayer({ navigation, route }) {
  const userInfo = useSelector(store => store.userInfo.mainData);
  const streamType = route.params.data.stream_type;
  const [data, setData] = useState(route.params?.data);
  const [activeIndex, setActiveIndex] = useState(route.params?.activeIndex);
  const isLandscape = width > height;
  const { width, height } = useWindowDimensions();
  const videoRef = useRef(null);
  const hideTimeout = useRef(null);
  const lastProgressUpdate = useRef(0);
  const [audioModalVisible, setAudioModalVisible] = useState(false);
  const [resolutionModalVisible, setResolutionModalVisible] = useState(false);
  const [channelModalVisible, setChannelModalVisible] = useState(false);
  const [egpModalVisible, setEgpModalVisible] = useState(false);
  const [muted, setMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [play, setPlay] = useState(streamType === 'live' ? true : false);
  const [showControl, setShowControl] = useState(true);
  const [fullscreen, setFullscreen] = useState(false);
  const [url, setUrl] = useState(``);
  const [egpData, setEgpData] = useState([]);
  const [activeData, setActiveData] = useState(route.params?.activeData);
  const [videoKey, setVideoKey] = useState(Date.now());

  useEffect(() => {
    updateUrl();
    getEGP();
  }, [data]);

  const updateUrl = () => {
    let updateUrl = `http://bmcmedia.live/${
      data.stream_type || 'series'
    }/HotescuCatalin24/2ayk851pl8ouhls/${data.stream_id || data.id}.${
      streamType === 'live' ? 'm3u8' : data.container_extension
    }`;
    setUrl(updateUrl);
  };

  const getEGP = async () => {
    try {
      if (streamType !== 'live') return;
      const res = await axiosInstance.get(
        `player_api.php?username=${userInfo?.user_info?.username}&password=${userInfo?.user_info?.password}&action=get_live_streams&action=get_simple_data_table&stream_id=${data?.stream_id}`,
      );
      const map = {};
      for (let i = 0; i < res.data.epg_listings.length; i++) {
        const item = res.data.epg_listings[i];
        const date = moment(item.start).format('YYYY-MM-DD');
        if (!map[date]) {
          map[date] = [];
        }
        map[date].push(item);
      }
      const newData = Object.keys(map).map(date => ({
        title: date,
        data: map[date],
      }));
      setEgpData([...newData]);
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: error.response.data.message,
      });
    }
  };

  const resetHideControlsTimer = useCallback(() => {
    if (!play) return;
    if (audioModalVisible) return;
    if (channelModalVisible) return;
    if (egpModalVisible) return;
    if (hideTimeout.current) clearTimeout(hideTimeout.current);
    hideTimeout.current = setTimeout(() => setShowControl(false), 2000);
  }, [audioModalVisible, play, channelModalVisible, egpModalVisible]);

  const toggleControls = useCallback(() => {
    setShowControl(prev => !prev);
    if (
      !showControl &&
      !audioModalVisible &&
      !channelModalVisible &&
      !egpModalVisible
    )
      resetHideControlsTimer();
  }, [
    showControl,
    resetHideControlsTimer,
    audioModalVisible,
    channelModalVisible,
    egpModalVisible,
  ]);

  const handlePlayPause = useCallback(() => {
    setPlay(prev => !prev);
    setShowControl(true);
    if (!audioModalVisible || !channelModalVisible || !egpModalVisible)
      resetHideControlsTimer();
  }, [
    resetHideControlsTimer,
    audioModalVisible,
    channelModalVisible,
    egpModalVisible,
  ]);

  const skipBackward = useCallback(() => {
    const time = Math.max(currentTime - 10, 0);
    videoRef.current.seek(time);
    setCurrentTime(time);
    if (!audioModalVisible || !channelModalVisible || !egpModalVisible)
      resetHideControlsTimer();
  }, [
    currentTime,
    resetHideControlsTimer,
    audioModalVisible,
    channelModalVisible,
    egpModalVisible,
  ]);

  const skipForward = useCallback(() => {
    const time = Math.min(currentTime + 10, duration);
    videoRef.current.seek(time);
    setCurrentTime(time);
    if (!audioModalVisible || !channelModalVisible || !egpModalVisible)
      resetHideControlsTimer();
  }, [
    currentTime,
    duration,
    resetHideControlsTimer,
    audioModalVisible,
    channelModalVisible,
    egpModalVisible,
  ]);

  const onLoadEnd = useCallback(data => {
    setDuration(data.duration);
    setCurrentTime(data.currentTime);
  }, []);

  const onProgress = useCallback(data => {
    const now = Date.now();
    if (now - lastProgressUpdate.current > 500) {
      setCurrentTime(data.currentTime);
      lastProgressUpdate.current = now;
    }
  }, []);

  const onSeek = useCallback(data => {
    videoRef.current.seek(data.seekTime);
    setCurrentTime(data.seekTime);
  }, []);

  const onEnd = useCallback(() => {
    setPlay(false);
    videoRef.current.seek(0);
    setShowControl(true);
  }, []);

  const handleMute = useCallback(() => {
    setMuted(prev => !prev);
  }, []);

  const handleFullscreen = useCallback(() => {
    setFullscreen(prev => !prev);
  }, []);

  useEffect(() => {
    if (!audioModalVisible && !channelModalVisible && !egpModalVisible)
      resetHideControlsTimer();
    return () => hideTimeout.current && clearTimeout(hideTimeout.current);
  }, [
    resetHideControlsTimer,
    audioModalVisible,
    channelModalVisible,
    egpModalVisible,
  ]);

  const onNext = useCallback(() => {
    setVideoKey(Date.now());
    setActiveIndex(prev => {
      const nextIndex = prev + 1 < route.params.channels.length ? prev + 1 : 0;
      setData(route.params.channels[nextIndex]);
      return nextIndex;
    });
  }, []);

  const onPrev = useCallback(() => {
    setVideoKey(Date.now());
    setActiveIndex(prev => {
      const nextIndex =
        prev - 1 >= 0 ? prev - 1 : route.params.channels.length - 1;
      setData(route.params.channels[nextIndex]);
      return nextIndex;
    });
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar hidden={isLandscape} backgroundColor={'#000'} />
      <Video
        key={videoKey}
        style={styles.video}
        source={{
          uri: url,
          bufferConfig: {
            minBufferMs: 15000,
            maxBufferMs: 60000,
            bufferForPlaybackMs: 3000,
            bufferForPlaybackAfterRebufferMs: 3000,
          },
        }}
        automaticallyWaitsToMinimizeStalling
        resizeMode={isLandscape ? 'cover' : 'contain'}
        poster={
          streamType !== 'live' &&
          (data?.stream_icon || data?.info?.movie_image)
        }
        ref={videoRef}
        paused={!play}
        onLoad={onLoadEnd}
        onProgress={onProgress}
        onEnd={onEnd}
        muted={muted}
        ignoreSilentSwitch="ignore"
        onError={e => {
          if (e.errorCode === 23002) {
            setUrl('http://bazaarcorner.click/videos/offline.mp4');
          }
        }}
        onBuffer={e => console.log(e, 'bufferrr')}
        playInBackground={false}
        playWhenInactive={false}
        allowsExternalPlayback={false}
      />
      <Pressable
        style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0 }}
        onPress={toggleControls}
      />
      {showControl && (
        <View
          style={[!isLandscape ? styles.titleView : styles.titleViewLoundscape]}
        >
          <Text style={styles.title}>{data?.name}</Text>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.closeView}
          >
            <Image source={close} style={styles.close} />
          </TouchableOpacity>
        </View>
      )}
      {showControl && duration > 0 && (
        <View style={[styles.controlOverlay]} pointerEvents="auto">
          <View style={styles.fullscreenView}>
            <PlayerControls
              onPlay={handlePlayPause}
              onPause={handlePlayPause}
              playing={play}
              skipBackwards={skipBackward}
              skipForwards={skipForward}
              fullscreen={fullscreen}
              isSeries={route.params?.info?.seasons?.length > 0}
              isTv={streamType === 'live'}
              onNext={onNext}
              onPrev={onPrev}
            />
          </View>

          <ProgressBar
            currentTime={currentTime}
            duration={duration}
            onSlideStart={handlePlayPause}
            onSlideComplete={handlePlayPause}
            onSlideCapture={onSeek}
            fullscreen={fullscreen}
            handleFullscreen={handleFullscreen}
            handleMute={handleMute}
            onBuffer={() => console.log('buffering')}
            muted={muted}
            onMutePress={handleMute}
            onAudioPress={() => setAudioModalVisible(true)}
            onResolutionPress={() => setResolutionModalVisible(true)}
            onChannelPres={() => setChannelModalVisible(true)}
            onEgpPress={() => setEgpModalVisible(true)}
            streamType={streamType !== 'live'}
            egpData={egpData.length > 0}
          >
            <SeasonsEpisodes
              seasonData={route.params?.info?.seasons}
              episodeData={route.params?.info?.episodes}
              activeData={activeData}
              setActiveData={setActiveData}
              onSelectEpisode={episode => {
                const newUrl = `player_api.php?username=${userInfo?.user_info?.username}&password=${userInfo?.user_info?.password}/${episode.id}.${episode.container_extension}`;
                setUrl(newUrl);
                setData(episode);
                setPlay(false);
              }}
            />
          </ProgressBar>
          <ListModal
            title={'Audio'}
            visible={audioModalVisible}
            onPress={() => setAudioModalVisible(false)}
            onClose={() => setAudioModalVisible(false)}
            data={
              [
                // { id: 1, type: 'English' },
                // { id: 2, type: 'Russian' },
              ]
            }
          />
          <ListModal
            title={'Resolutions'}
            visible={resolutionModalVisible}
            onPress={() => setResolutionModalVisible(false)}
            onClose={() => setResolutionModalVisible(false)}
            data={
              [
                // { id: 1, type: 'Auto' },
                // { id: 2, type: '1080p HD - 60Hz' },
                // { id: 3, type: '1080p HD - 50Hz' },
                // { id: 4, type: '720p HD - 60Hz' },
                // { id: 5, type: '720p HD - 50Hz' },
                // { id: 6, type: '480p - 60Hz' },
                // { id: 7, type: '480p - 50Hz' },
              ]
            }
          />
          <ChannelListModal
            visible={channelModalVisible}
            data={route.params.channels}
            onClose={() => setChannelModalVisible(false)}
            onPress={(it, data) => {
              setUrl('');
              setChannelModalVisible(false);
              setData({ ...it });
            }}
          />
          <EgpListModal
            visible={egpModalVisible}
            data={egpData}
            onClose={() => setEgpModalVisible(false)}
            onPress={() => setEgpModalVisible(false)}
          />
        </View>
      )}
    </View>
  );
}
