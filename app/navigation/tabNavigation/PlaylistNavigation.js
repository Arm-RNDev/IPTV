import { createStackNavigator } from '@react-navigation/stack';
import { playlistNaviList } from 'app/constants';

import React from 'react';
const Stack = createStackNavigator();
export default function PlaylistNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false, 
      }}
    >
      {playlistNaviList.map((it, ind) => {
        return <Stack.Screen key={ind} name={it.name} component={it.screens} />;
      })}
    </Stack.Navigator>
  );
}
