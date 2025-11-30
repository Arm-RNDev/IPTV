import {
  View,
  Text,
  ImageBackground,
  FlatList,
  TouchableOpacity,
  Image,
  Platform,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import {
  BgButton,
  ItemRetings,
  TabBgView,
  TopBarView,
  TriilerPlayerModal,
} from 'app/components';
import LinearGradient from 'react-native-linear-gradient';
import { styles } from './style';
import { BorderButton } from 'app/components/borderButton';
import playIc from 'app/assets/images/play.png';
import bg from 'app/assets/images/bgblure.png';
import { formatDuration } from 'app/hooks';
import FastImage from 'react-native-fast-image';
import { useSelector } from 'react-redux';

export function MovieInfo({ navigation, route }) {
 
  const [trilerModalVIsible, setTrilerModalVisible] = useState(false);
  const [activeData, setActiveData] = useState({
    chEpisode: 1,
    chSeason: 1,
  });
  const currentEpisodes =
    route.params?.info?.episodes?.[activeData?.chSeason] || [];
  console.log(currentEpisodes[0]);

  return (
    <TabBgView>
      <ImageBackground
        style={styles.poster}
        source={{
          uri: route.params?.data.stream_icon || route.params?.data.cover,
        }}
      >
        <TopBarView back={true} navigation={navigation} />
        <LinearGradient
          colors={['rgba(0,0,0,0.95)', 'rgba(0,0,0,0.4)', 'rgba(0,0,0,0)']}
          style={styles.topShadow}
        />
        <LinearGradient
          colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0.4)', 'rgba(0,0,0,0.85)']}
          style={styles.bottomShadow}
        />
        <ImageBackground source={bg} style={styles.bg}>
          <FlatList
            data={route.params?.info?.seasons}
            horizontal={false}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={() => (
              <View style={styles.mainView}>
                <Text style={styles.title}>{route.params?.data.name}</Text>
                <Text style={styles.gener}>{route.params?.data.genre}</Text>
                <ItemRetings rating={route.params?.data.rating_5based} />
                <View style={styles.btnView}>
                  <BgButton
                    title="Play"
                    customStyle={{ width: '35%' }}
                    img={playIc}
                    onPress={() =>
                      navigation.navigate('MoviePlayer', {
                        data: currentEpisodes[0] || route.params?.data,
                        info: route.params?.info || {},
                        activeData,
                      })
                    }
                  />
                  {route.params?.data.youtube_trailer && (
                    <BorderButton
                      title="Play trailer"
                      customStyle={{ width: '35%' }}
                      img={playIc}
                      onPress={() => setTrilerModalVisible(true)}
                    />
                  )}
                </View>

                <View style={styles.infoView}>
                  <Text style={styles.infoTitle}>Directed by: </Text>
                  <Text style={styles.infoText}>
                    {route.params?.data.director}
                  </Text>
                </View>

                {route.params?.data.duration_secs && (
                  <View style={styles.infoView}>
                    <Text style={styles.infoTitle}>Duration: </Text>
                    <Text style={styles.infoText}>
                      {formatDuration(route.params?.data.duration_secs)}
                    </Text>
                  </View>
                )}
                <Text style={styles.plotText}>{route.params?.data.plot}</Text>
                <FlatList
                  data={route.params?.info?.seasons}
                  horizontal
                  keyExtractor={it => it.id}
                  showsHorizontalScrollIndicator={false}
                  renderItem={({ item }) => (
                    <TouchableOpacity
                      key={item.id}
                      onPress={() =>
                        setActiveData({
                          ...activeData,
                          chSeason: item.season_number,
                        })
                      }
                      style={
                        activeData.chSeason === item.season_number
                          ? styles.seasonViewActive
                          : styles.seasonView
                      }
                    >
                      <Text
                        style={
                          activeData.chSeason === item.season_number
                            ? styles.seasonTextActive
                            : styles.seasonText
                        }
                      >
                        {item.name}
                      </Text>
                    </TouchableOpacity>
                  )}
                  contentContainerStyle={{
                    marginTop: 30,
                    paddingHorizontal: 16,
                  }}
                />
                <FlatList
                  data={currentEpisodes}
                  horizontal
                  keyExtractor={it => it.id}
                  showsHorizontalScrollIndicator={false}
                  renderItem={({ item }) => (
                    <TouchableOpacity
                      key={item.id}
                      onPress={() => {
                        setActiveData({
                          ...activeData,
                          chEpisode: item.episode_num,
                        });
                        navigation.navigate('MoviePlayer', {
                          data: item,
                          info: route.params?.info || {},
                          activeData,
                        });
                      }}
                      style={styles.episodeView}
                    >
                      <FastImage
                        source={{
                          uri: item.info.movie_image,
                          priority: FastImage.priority.low,
                        }}
                        resizeMode={FastImage.resizeMode.contain}
                        style={styles.episodePicture}
                      />
                    </TouchableOpacity>
                  )}
                  contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingBottom: Platform.OS === 'android' ? 60 : 120,
                    marginTop: 10,
                  }}
                />
              </View>
            )}
            ListFooterComponent={<View style={{ height: 300 }} />}
          />
        </ImageBackground>
      </ImageBackground>

      <TriilerPlayerModal
        visible={trilerModalVIsible}
        videoId={route.params?.data?.youtube_trailer}
        onClose={() => setTrilerModalVisible(false)}
      />
    </TabBgView>
  );
}
