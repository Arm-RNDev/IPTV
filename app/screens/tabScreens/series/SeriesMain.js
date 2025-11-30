import { View } from 'react-native';
import React, { useEffect, useState, useCallback } from 'react';
import {
  CategoryList,
  LoadingModal,
  MoviesList,
  TabBgView,
  TopBarView,
} from 'app/components';
import axiosInstance from 'app/networking/axiosInstance';
import { useSelector } from 'react-redux';
import Toast from 'react-native-toast-message';

export function SeriesMain({ navigation }) {
  const userInfo = useSelector(store => store.userInfo.mainData);
  const [load, setLoad] = useState(false);
  const [data, setData] = useState({});
  const [activeCategoryId, setActiveCategoryId] = useState(null);
  const [categoryData, setCategoryData] = useState([]);

  const getData = useCallback(async () => {
    if (!userInfo?.user_info?.auth) return;
    const urlSeries = `player_api.php?username=${userInfo?.user_info?.username}&password=${userInfo?.user_info?.password}&action=get_series`;
    const urlCategories = `player_api.php?username=${userInfo?.user_info?.username}&password=${userInfo?.user_info?.password}&action=get_series_categories`;

    try {
      setLoad(true);
      const [seriesRes, categoriesRes] = await Promise.all([
        axiosInstance.get(urlSeries),
        axiosInstance.get(urlCategories),
      ]);

      const movies = {};
      seriesRes.data.forEach(item => {
        const catId = item.category_id;
        if (!movies[catId]) movies[catId] = [];
        movies[catId].push(item);
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

  const getInfo = async it => {
    try {
      const res = await axiosInstance.get(
        `player_api.php?username=${userInfo?.user_info?.username}&password=${userInfo?.user_info?.password}&action=get_series_info&series_id=${it.series_id}`,
      );
      navigation.navigate('MovieInfo', { data: it, info: res.data });
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: error.response?.data?.message || 'Failed to fetch series info',
      });
    }
  };

  return (
    <TabBgView>
      <TopBarView title="Series" />
      <View style={{ paddingBottom: 140 }}>
        <CategoryList
          data={categoryData}
          onPress={setActiveCategoryId}
          activeId={activeCategoryId}
        />
        <MoviesList
          data={getFilteredContent(data, activeCategoryId)}
          onPress={getInfo}
          activeId={activeCategoryId}
        />
      </View>
      <LoadingModal visible={load} />
    </TabBgView>
  );
}
