import { FlatList } from 'react-native';
import React, { useEffect, useRef } from 'react';
import { styles } from './style';
import { MovieItem } from '../movieItem';

export function MoviesList({ data, onPress, activeId }) {
  const listRef = useRef(null);
  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollToOffset({ offset: 0, animated: true });
    }
  }, [activeId]);
  return (
    <FlatList
      data={data}
      ref={listRef}
      horizontal={false}
      showsVerticalScrollIndicator={false}
      keyExtractor={item => item.stream_id}
      renderItem={({ item }) => (
        <MovieItem
          picture={item?.stream_icon || item.cover}
          title={item?.name}
          onPress={() => onPress(item)}
          egp={item?.epg_channel_id}
        />
      )}
      contentContainerStyle={styles.gridContainer}
    />
  );
}
