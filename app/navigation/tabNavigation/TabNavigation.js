import React from 'react';
import { Image, StyleSheet, Text, View, Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

import LiveTvNavigation from './LiveTvNavigation';
import MovieNavigation from './MovieNavigation';
import {
  liveTvNaviList,
  movieNaviList,
  myFonts,
  seriesNaviList,
} from 'app/constants';
import liveTvIc from 'app/assets/images/tabIcons/livetv.png';
import movies from 'app/assets/images/tabIcons/movies.png';
import playlist from 'app/assets/images/tabIcons/playlist.png';
import SeriesNavigation from './SeriesNavigation';
// import PlaylistNavigation from './PlaylistNavigation';
// import VideoNavigation from './VideoNavigation';
const Tab = createBottomTabNavigator();

export default function TabNavigation({ navigation }) {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: '#000',
        unmountOnBlur: true,
      })}
    >
      <Tab.Screen
        name="LiveTvNavigation"
        component={LiveTvNavigation}
        options={({ route }) => ({
          title: '',
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <View style={styles.tabView}>
                {focused ? (
                  <View style={styles.tabItemView}>
                    <Image style={styles.markedImg} source={liveTvIc} />
                    <Text style={styles.markedText}>Live Tv</Text>
                  </View>
                ) : (
                  <View style={styles.tabItemView}>
                    <Image style={styles.unmarkedImg} source={liveTvIc} />
                    <Text style={styles.unmarkedText}>Live Tv</Text>
                  </View>
                )}
              </View>
            );
          },
          tabBarVisible: (route => {
            return false;
          })(route),
          tabBarButton: (route => {
            () => null;
          })(route),

          tabBarStyle: (route => {
            const routeName = getFocusedRouteNameFromRoute(route) ?? '';
            return liveTvNaviList.map((it, ind) => {
              if (routeName === it.name && routeName == 'MoviePlayer') {
                return { display: 'none' };
              }
              return styles.generalStyle;
            });
          })(route),
        })}
      />
      <Tab.Screen
        name="MovieNavigation"
        component={MovieNavigation}
        options={({ route }) => ({
          title: '',
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <View style={styles.tabView}>
                {focused ? (
                  <View style={styles.tabItemView}>
                    <Image style={styles.markedImg} source={movies} />
                    <Text style={styles.markedText}>Movies</Text>
                  </View>
                ) : (
                  <View style={styles.tabItemView}>
                    <Image style={styles.unmarkedImg} source={movies} />
                    <Text style={styles.unmarkedText}>Movies</Text>
                  </View>
                )}
              </View>
            );
          },
          tabBarVisible: (route => {
            return false;
          })(route),
          tabBarButton: (route => {
            () => null;
          })(route),
          tabBarStyle: (route => {
            const routeName = getFocusedRouteNameFromRoute(route) ?? '';
            return movieNaviList.map((it, ind) => {
              if (routeName === it.name && routeName == 'MoviePlayer') {
                return { display: 'none' };
              }
              return styles.generalStyle;
            });
          })(route),
        })}
      />
      <Tab.Screen
        name="SeriesNavigation"
        component={SeriesNavigation}
        options={({ route }) => ({
          title: '',
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <View style={styles.tabView}>
                {focused ? (
                  <View style={styles.tabItemView}>
                    <Image style={styles.markedImg} source={playlist} />
                    <Text style={styles.markedText}>Series</Text>
                  </View>
                ) : (
                  <View style={styles.tabItemView}>
                    <Image style={styles.unmarkedImg} source={playlist} />
                    <Text style={styles.unmarkedText}>Series</Text>
                  </View>
                )}
              </View>
            );
          },
          tabBarVisible: (route => {
            return false;
          })(route),
          tabBarButton: (route => {
            () => null;
          })(route),
          tabBarStyle: (route => {
            const routeName = getFocusedRouteNameFromRoute(route) ?? '';
            return seriesNaviList.map((it, ind) => {
              if (routeName === it.name && routeName == 'MoviePlayer') {
                return { display: 'none' };
              }
              return styles.generalStyle;
            });
          })(route),
        })}
      />
      {/* <Tab.Screen
        name="PlaylistNavigation"
        component={PlaylistNavigation}
        options={({ route }) => ({
          title: '',
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <View style={styles.tabView}>
                {focused ? (
                  <View style={styles.tabItemView}>
                    <Image style={styles.markedImg} source={playlist} />
                    <Text style={styles.markedText}>Playlist</Text>
                  </View>
                ) : (
                  <View style={styles.tabItemView}>
                    <Image style={styles.unmarkedImg} source={playlist} />
                    <Text style={styles.unmarkedText}>Playlist</Text>
                  </View>
                )}
              </View>
            );
          },
          tabBarVisible: (route => {
            return false;
          })(route),
          tabBarButton: (route => {
            () => null;
          })(route),

          tabBarStyle: (route => {
            return styles.generalStyle;
          })(route),
        })}
      /> */}
      {/* <Tab.Screen
        name="VideoNavigation"
        component={VideoNavigation}
        options={({ route }) => ({
          title: '',
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <View style={styles.tabView}>
                {focused ? (
                  <View style={styles.tabItemView}>
                    <Image style={styles.markedImg} source={videos} />
                    <Text style={styles.markedText}>Videos</Text>
                  </View>
                ) : (
                  <View style={styles.tabItemView}>
                    <Image style={styles.unmarkedImg} source={videos} />
                    <Text style={styles.unmarkedText}>Videos</Text>
                  </View>
                )}
              </View>
            );
          },
          tabBarVisible: (route => {
            return false;
          })(route),
          tabBarButton: (route => {
            () => null;
          })(route),

          tabBarStyle: (route => {
            return styles.generalStyle;
          })(route),
        })}
      /> */}
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  generalStyle: {
    backgroundColor: '#0B1620',
    borderTopColor: 'transparent',
    marginTop: 5,
    paddingTop: 5,
    height: Platform.OS === 'android' ? 60 : 80,
    position: 'absolute',
    overflow: 'hidden',
    shadowColor: '#FFFFFF',
    shadowOffset: { width: 0, height: -0.33 },
    shadowOpacity: 0.15,
    shadowRadius: 2,
    elevation: 5,
  },
  tabView: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabItemView: {
    alignItems: 'center',
    width: 48,
    height: 40,
    marginLeft: 'auto',
    marginRight: 'auto',
    flexGrow: 0,
    flexShrink: 0,
  },
  markedImg: {
    height: 24,
    width: 24,
    resizeMode: 'contain',
    tintColor: '#8AD2D5',
    marginBottom: 5,
    marginTop: 5,
  },
  unmarkedImg: {
    height: 24,
    width: 24,
    resizeMode: 'contain',
    marginBottom: 5,
    marginTop: 5,
    tintColor: '#D4D4D4',
  },
  markedText: {
    color: '#8AD2D5',
    fontFamily: myFonts.mediumSFProDisplay,
    fontSize: 10,
  },
  unmarkedText: {
    color: '#D4D4D4',
    fontFamily: myFonts.mediumSFProDisplay,
    fontSize: 10,
  },
});
