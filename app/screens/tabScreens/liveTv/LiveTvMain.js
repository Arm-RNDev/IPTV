import { View } from 'react-native';
import React, { useEffect, useState, useCallback } from 'react';
import {
  CategoryList,
  ChannelList,
  LoadingModal,
  TabBgView,
  TopBarView,
} from 'app/components';
import axiosInstance from 'app/networking/axiosInstance';
import Toast from 'react-native-toast-message';
import { useSelector } from 'react-redux';
import { errorResp } from 'app/hooks';

export function LiveTvMain({ navigation }) {
  const userInfo = useSelector(store => store.userInfo.mainData);
  const [load, setLoad] = useState(false);
  const [data, setData] = useState({});
  const [activeCategoryId, setActiveCategoryId] = useState(null);
  const [categoryData, setCategoryData] = useState([]);

  const getData = useCallback(async () => {
    if (!userInfo?.user_info?.auth) return;
    const urlStreams = `player_api.php?username=${userInfo?.user_info?.username}&password=${userInfo?.user_info?.password}&action=get_live_streams`;
    const urlCategories = `player_api.php?username=${userInfo?.user_info?.username}&password=${userInfo?.user_info?.password}&action=get_live_categories`;

    try {
      setLoad(true);
      const [streamsRes, categoriesRes] = await Promise.all([
        axiosInstance.get(urlStreams),
        axiosInstance.get(urlCategories),
      ]);

      const streamData = {};
      streamsRes.data.forEach(channel => {
        if (channel.stream_type !== 'live') return;
        const catId = channel.category_id;
        if (!streamData[catId]) streamData[catId] = [];
        streamData[catId].push(channel);
      });

      setData(streamData);
      setCategoryData(categoriesRes.data);
      setActiveCategoryId(categoriesRes.data?.[0]?.category_id || null);
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: error.response?.data?.message || 'Failed to load data',
      });
    } finally {
      setLoad(false);
    }
  }, [userInfo]);

  useEffect(() => {
    getData();
  }, [getData]);

  const getFilteredContent = (allContent, activeId,) =>
    allContent?.[activeId] || [];

  const getStreamInfo = async (item, chData,index) => {
    try {
       console.log(index);
       const res = await axiosInstance.get(
        `player_api.php?username=${userInfo?.user_info?.username}&password=${userInfo?.user_info?.password}&action=get_live_streams&action=get_stream_info&stream_id=${item.stream_id}`,
      );
      const result = errorResp(res.data);
      if (!result.success) return;
      navigation.navigate('MoviePlayer', { data: item, channels: chData,activeIndex:index });
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: error.response?.data?.message || 'Failed to fetch stream info',
      });
      console.log(error.response);
    }
  };

  return (
    <TabBgView>
      <TopBarView title="Live Tv" />
      <View style={{ paddingBottom: 140 }}>
        <CategoryList
          data={categoryData}
          onPress={setActiveCategoryId}
          activeId={activeCategoryId}
        />
        <ChannelList
          activeId={activeCategoryId}
          data={getFilteredContent(data, activeCategoryId)}
          onPress={getStreamInfo}
        />
      </View>
      <LoadingModal visible={load} />
    </TabBgView>
  );
}
