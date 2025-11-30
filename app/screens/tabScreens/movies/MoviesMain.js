import { View } from 'react-native';
import React, { useEffect, useState, useCallback } from 'react';
import {
  CategoryList,
  LoadingModal,
  MoviesList,
  TabBgView,
  TopBarView,
} from 'app/components';
import axios from 'axios';
import axiosInstance from 'app/networking/axiosInstance';
import Toast from 'react-native-toast-message';
import { useSelector } from 'react-redux';

export function MoviesMain({ navigation }) {
  const userInfo = useSelector(store => store.userInfo.mainData);
  const [load, setLoad] = useState(false);
  const [data, setData] = useState({});
  const [activeCategoryId, setActiveCategoryId] = useState(null);
  const [categoryData, setCategoryData] = useState([]);

  const getData = useCallback(async () => {
    if (!userInfo?.user_info?.auth) return;
    const urlVodStreams = `player_api.php?username=${userInfo?.user_info?.username}&password=${userInfo?.user_info?.password}&action=get_vod_streams`;
    const urlCategories = `player_api.php?username=${userInfo?.user_info?.username}&password=${userInfo?.user_info?.password}&action=get_vod_categories`;

    try {
      setLoad(true);
      const [vodRes, categoriesRes] = await Promise.all([
        axiosInstance.get(urlVodStreams),
        axiosInstance.get(urlCategories),
      ]);
      const movies = {};
      vodRes.data.forEach(channel => {
        const catId = channel.category_id;
        if (!movies[catId]) movies[catId] = [];
        movies[catId].push(channel);
      });
      setData(movies);
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

  const getFilteredContent = (allContent, activeId) =>
    allContent?.[activeId] || [];

  const getVODInfo = async item => {
    try {
      const res = await axiosInstance.get(
        `player_api.php?username=${userInfo?.user_info?.username}&password=${userInfo?.user_info?.password}&action=get_vod_info&vod_id=${item.stream_id}`,
      );
      navigation.navigate('MovieInfo', { data: { ...item, ...res.data.info } });
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: error.response?.data?.message || 'Failed to fetch movie info',
      });
      console.log(error);
    }
  };

  return (
    <TabBgView>
      <TopBarView title="Movies" />
      <View style={{ paddingBottom: 140 }}>
        <CategoryList
          data={categoryData}
          onPress={id => setActiveCategoryId(id)}
          activeId={activeCategoryId}
        />
        <MoviesList
          data={getFilteredContent(data, activeCategoryId)}
          onPress={getVODInfo}
          activeId={activeCategoryId}
        />
      </View>
      <LoadingModal visible={load} />
    </TabBgView>
  );
}
