import React from 'react';
import { View, Text, TouchableOpacity, FlatList, Image } from 'react-native';
import rigtIc from 'app/assets/images/right.png';
import leftIc from 'app/assets/images/back.png';
import { styles } from './style';

export const SeasonsEpisodes = React.memo(
  ({ seasonData, episodeData, activeData, setActiveData, onSelectEpisode }) => {
    const currentEpisodes = episodeData?.[activeData.chSeason] || [];
    const onSeasonPress = season => {
      setActiveData(prev => ({
        ...prev,
        chSeason: season.season_number,
        chEpisode: 1,
      }));
    };

    const handleEpisodePress = episode => {
      setActiveData(prev => ({
        ...prev,
        chEpisode: episode.episode_num,
      }));
      onSelectEpisode && onSelectEpisode(episode);
    };

    return (
      <View style={styles.container}>
        <FlatList
          data={seasonData}
          horizontal
          keyExtractor={item => item.id.toString()}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.content}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => onSeasonPress(item)}
              style={
                activeData.chSeason === item.season_number
                  ? styles.seasonSelected
                  : styles.seasonBtn
              }
            >
              {activeData.chSeason !== item.season_number && (
                <Image source={leftIc} style={styles.rigtIc} />
              )}
              <Text style={styles.text}>{item.name}</Text>
              {activeData.chSeason === item.season_number && (
                <Image source={rigtIc} style={styles.rigtIc} />
              )}
            </TouchableOpacity>
          )}
        />

        <FlatList
          data={currentEpisodes}
          horizontal
          keyExtractor={item => item.id.toString()}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 16 }}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => handleEpisodePress(item)}
              style={[
                styles.episodeBtn,
                activeData.chEpisode === item.episode_num &&
                  styles.seasonSelected,
              ]}
            >
              <Text style={styles.text}>{item?.episode_num}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    );
  },
);
