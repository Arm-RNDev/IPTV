import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native';
import Modal from 'react-native-modal';
import { styles } from './style';
import closeIc from 'app/assets/images/Close.png';
import { SafeAreaView } from 'react-native-safe-area-context';
import moment from 'moment';
import { ProgramInfo } from 'app/components/programInfo';

const decodeBase64 = encoded => {
  try {
    return atob(encoded);
  } catch (e) {
    return 'Title';
  }
};

const formatDate = dateString => {
  const date = new Date(dateString);
  const day = date.getDate();
  const dayOfWeek = date.toLocaleDateString('en-US', { weekday: 'short' });
  return `${day} ${dayOfWeek}`;
};

const ProgramItem = ({ item }) => {
  const isNowPlaying = item.now_playing === 1;
  const startTime = moment(item.start).format('HH:mm');
  const hasArchive = item.has_archive;
  const dotColor = isNowPlaying
    ? '#FF0000'
    : hasArchive
    ? '#00FF00'
    : '#FFFFFF';

  return (
    <View style={styles.programItem}>
      <View style={styles.programLeft}>
        <View style={[styles.dot, { backgroundColor: dotColor }]} />
        <Text
          style={[styles.programTitle, isNowPlaying && styles.nowPlayinText]}
          numberOfLines={4}
        >
          {decodeBase64(item.title)}
        </Text>
      </View>
      <View style={styles.programRight}>
        <Text
          style={[styles.programTime, isNowPlaying && styles.nowPlayinText]}
        >
          {startTime}
        </Text>
      </View>
    </View>
  );
};

export function EgpListModal({ visible, onPress, onClose, data }) {
  const epgData = data || [];
  const [selectedDate, setSelectedDate] = useState(null);
  useEffect(() => {
    if (epgData.length > 0) {
      const today = new Date().toISOString().substring(0, 10);
      const initialDate = epgData.find(item => item.title >= today)
        ? epgData.find(item => item.title >= today).title
        : epgData[0].title;
      setSelectedDate(initialDate);
    }
  }, [epgData]);

  const selectedDayData = epgData.find(item => item.title === selectedDate);
  const programData = selectedDayData ? selectedDayData.data : [];

  const renderDayItem = ({ item }) => {
    const isSelected = item.title === selectedDate;
    return (
      <TouchableOpacity
        style={[styles.dayButton, isSelected && styles.dayButtonSelected]}
        onPress={() => setSelectedDate(item.title)}
      >
        <Text style={[styles.dayText, isSelected && styles.dayTextSelected]}>
          {formatDate(item.title)}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <Modal
      isVisible={visible}
      animationIn="slideInLeft"
      animationOut="slideOutLeft"
      onBackdropPress={onClose}
      style={styles.modal}
    >
      <SafeAreaView style={[styles.modalContent]}>
        <View style={styles.titleView}>
          <TouchableOpacity onPress={onClose} style={styles.closeBtn}>
            <Image source={closeIc} style={styles.closeIcon} />
          </TouchableOpacity>
          <Text style={styles.title}>Program Guide (EPG)</Text>
        </View>
        <View style={styles.epgContentRow}>
          <FlatList
            data={epgData}
            keyExtractor={item => item.title}
            renderItem={renderDayItem}
            showsVerticalScrollIndicator={false}
            style={styles.dayList}
          />
          <FlatList
            data={programData}
            keyExtractor={item => item.id}
            renderItem={({ item }) => <ProgramInfo item={item} />}
            showsVerticalScrollIndicator={true}
            style={styles.programGuide}
          />
        </View>
      </SafeAreaView>
    </Modal>
  );
}
