import { FlatList } from 'react-native';
import React, { useEffect, useRef } from 'react';
import { styles } from './style';
import { LiveStreamItem } from '../liveStreamItem';

export function ChannelList({ data, onPress, activeId }) {
  const listRef = useRef(null); 
  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollToOffset({ offset: 0, animated: true });
    }
  }, [activeId]);

  return (
    <FlatList
      ref={listRef}
      data={data}
      showsVerticalScrollIndicator={false}
      keyExtractor={item => item.stream_id.toString()}
      renderItem={({ item }) => (
        <LiveStreamItem
          picture={item?.stream_icon}
          title={item?.name}
          onPress={() => onPress(item, data)}
          egp={item.epg_channel_id}
        />
      )}
      contentContainerStyle={styles.gridContainer}
    />
  );
}
