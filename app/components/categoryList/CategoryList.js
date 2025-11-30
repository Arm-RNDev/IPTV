import { Text, FlatList, TouchableOpacity } from 'react-native';
import React from 'react';
import { styles } from './style';

export function CategoryList({ onPress, activeId, data }) {
  return (
    <FlatList
      horizontal
      data={data || []}
      keyExtractor={item => item.category_id}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={[
            activeId === item.category_id
              ? styles.activeItem
              : styles.inActiveItem,
          ]}
          onPress={() => onPress(item.category_id)}
        >
          <Text style={styles.title}>{item.category_name}</Text>
        </TouchableOpacity>
      )}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.tabContainer}
    />
  );
}
